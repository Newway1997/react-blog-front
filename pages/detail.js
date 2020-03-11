import React from "react";
import Head from "next/head";
import { Row, Col, List, Breadcrumb, Affix } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined
} from "@ant-design/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarkNav from "markdown-navbar";
import axios from "axios";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import * as articleApi from "../api/articleApi";
import "../public/style/pages/detail.css";
import Link from "next/link";
const Detail = props => {
  const data = props.data;
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
  let html = marked(data.article_content);

  return (
    <div className="container">
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header id={data.typeId}></Header>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">
                    <a>首页</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href={"/list?id=" + data.typeId}>
                    <a>{data.typeName}</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a>{data.title}</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detail-title">{data.title}</div>
            <div className="article-info center">
              <span>
                <CalendarOutlined />
                {data.addTime}
              </span>
              <span>
                <FolderOutlined />
                {data.typeName}
              </span>
              <span>
                <FireOutlined />
                {data.view_count}人
              </span>
            </div>
            <div
              className="detail-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Affix offsetTop={5}>
              <div className="detail-nav comm-box">
                <div className="nav-title">文章目录</div>
                <MarkNav
                  className="article-menu"
                  source={data.article_content}
                  headingTopOffset={0}
                  ordered={false}
                />
              </div>
            </Affix>
          </Col>
        </Row>
        <Footer></Footer>
      </div>
      <style jsx>{``}</style>
    </div>
  );
};
Detail.getInitialProps = async context => {
  let id = context.query.id;
  //埋点，增加观看数
  await articleApi.addViewCount(id);
  const res = await articleApi.getArticleById(id);
  return res.data;
};

export default Detail;
