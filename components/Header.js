import React, { useEffect, useState } from "react";
import "../public/style/components/header.css";
import { Row, Col, Menu } from "antd";
import * as Icon from "@ant-design/icons";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/aipUrl";
export default function() {
  const [navArr, setNavArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await axios(servicePath.getTypeInfo).then(res => {
        return res.data.data;
      });
      setNavArr(result);
    };
    fetchData();
  }, []);
  const handleClick = e => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Newway</span>
          <span className="header-text">一个前端</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <Icon.HomeOutlined />
              首页
            </Menu.Item>
            {navArr.map(item => {
              let Comp = Icon[item.icon];
              return (
                <Menu.Item key={item.id}>
                  <Comp />
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
}
