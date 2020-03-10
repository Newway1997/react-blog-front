import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { Row, Col, List } from "antd";
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
import axios from "axios";
import servicePath from "../config/aipUrl";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
const Home = props => {
  const [mylist, setMyList] = useState(props.data);
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
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link
                      href={{ pathname: "/detail", query: { id: item.id } }}
                    >
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
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
                    dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                  ></div>
                </List.Item>
              )}
            ></List>
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
Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios.get(servicePath.getArticleList).then(res => {
      resolve(res.data);
    });
  });
  return await promise;
};
export default Home;
