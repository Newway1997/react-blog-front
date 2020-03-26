import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { Row, Col, List, message, Spin, Tag, Affix } from "antd";
import React, { useState } from "react";
import "../public/style/pages/index.css";
import Footer from "../components/Footer";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined
} from "@ant-design/icons";
import Author from "../components/Author";
import Advert from "../components/Advert";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import * as articleApi from "../api/articleApi";
import InfiniteScroll from "react-infinite-scroller";
const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});
let size = 5;
const Home = props => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(props.data.length < props.total);
  const [articleList, setArticleList] = useState(props.data);
  const [page, setPage] = useState(1);

  const handleInfiniteOnLoad = async () => {
    setLoading(true);
    if (articleList.length < props.total) {
      const res = await articleApi.getArticleList(page, size);
      if (articleList.concat(res.data.data).length >= props.total) {
        message.warning("已加载全部");
        setHasMore(false);
      }
      setArticleList(articleList.concat(res.data.data));
      setPage(page + 1);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={handleInfiniteOnLoad}
              hasMore={!loading && hasMore}
            >
              <List
                header={<div className="list-header">最新日志</div>}
                itemLayout="vertical"
                dataSource={articleList}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <div className="list-title">
                      {item.orderIndex === 0 && <Tag color="#f50">置顶</Tag>}
                      <Link
                        href={{ pathname: "/detail", query: { id: item.id } }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-info">
                      <span>
                        <CalendarOutlined />
                        {item.addTime}
                      </span>
                      <span>
                        <FolderOutlined />
                        {item.typeName}
                      </span>
                      <span>
                        <FireOutlined />
                        {item.view_count}人
                      </span>
                    </div>
                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.introduce || "")
                      }}
                    ></div>
                  </List.Item>
                )}
              >
                {loading && hasMore && (
                  <div className="loading-container">
                    <Spin />
                  </div>
                )}
                {!loading && hasMore && (
                  <div onClick={handleInfiniteOnLoad} className="load-more">
                    <span>更多</span>
                  </div>
                )}
              </List>
            </InfiniteScroll>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Affix>
              <Author />
              <Advert />
            </Affix>
          </Col>
        </Row>
        <Footer></Footer>
      </div>
    </div>
  );
};
Home.getInitialProps = async () => {
  const res = await articleApi.getArticleList(0, size);
  return res.data;
};
export default Home;
