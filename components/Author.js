import { Avatar, Divider } from "antd";
import "../public/style/components/author.css";
import { GithubOutlined, WechatOutlined, QqOutlined } from "@ant-design/icons";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="https://newway1997.github.io/img/about-BY-gentle.jpg"
        ></Avatar>
      </div>
      <div className="author-introduction">
        一个渣前端
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  );
};
export default Author;
