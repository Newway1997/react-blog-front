import React, { useEffect, useState } from "react";
import "../public/style/components/header.css";
import { Row, Col, Menu } from "antd";
import * as Icon from "@ant-design/icons";
import Router from "next/router";
import * as articleApi from "../api/articleApi";
import Link from "next/link";
function Header({ id = "" }) {
  const [navArr, setNavArr] = useState([]);
  id = id.toString();
  const [selectedKeys, setSelectedKeys] = useState(id || "0");
  //id变化改变selectedKeys
  useEffect(() => {
    setSelectedKeys(id || "0");
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await articleApi.getTypeInfo();
      let data = result.data.data;
      setNavArr(data);
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
          <Link href={{ pathname: "/" }}>
            <a>
              <span className="header-logo">Newway</span>
            </a>
          </Link>
          <span className="header-text">一个前端</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu
            mode="horizontal"
            selectedKeys={selectedKeys}
            onClick={handleClick}
          >
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
export default Header;
