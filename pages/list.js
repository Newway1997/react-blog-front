import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, List, Breadcrumb, Spin, Tag, message } from "antd";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "../public/style/pages/list.css";
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

import Link from "next/link";
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
const MyList = props => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(props.data.length < props.total);
  const [articleList, setArticleList] = useState(props.data);
  const [page, setPage] = useState(1);
  const { id } = props;
  useEffect(() => {
    setArticleList(props.data);
    setPage(1);
    setLoading(false);
    setHasMore(props.data.length < props.total);
  }, [props.data]);
  const handleInfiniteOnLoad = async () => {
    setLoading(true);
    if (articleList.length < props.total) {
      const res = await articleApi.getArticleListByType(id, page, size);
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
        <Header id={props.id}></Header>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a>{props.typeName}</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
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
                  <List.Item>
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
                {" "}
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
            <Author />
            <Advert />
          </Col>
        </Row>
        <Footer></Footer>
      </div>
      <style jsx>{``}</style>
    </div>
  );
};
//获取数据
MyList.getInitialProps = async context => {
  let id = context.query.id;
  const result = await articleApi.getArticleListByType(id, 0, size);
  result.data.id = id;
  let types = await articleApi.getTypeInfo();

  let type = types.data.data.find(item => item.id == id);

  result.data.typeName = type.typeName;

  return result.data;
};
export default MyList;
