import { Avatar, Divider } from "antd";
import { useEffect, useState } from "react";
import "../public/style/components/author.css";
import * as Icons from "@ant-design/icons";
import * as userApi from "../api/userApi";
const Author = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    userApi.getUserInfo().then(res => {
      setUser(res.data.data);
    });
  }, []);
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src={user.avatar}></Avatar>
      </div>
      <div className="author-introduction">
        {user.introduction}
        <Divider>社交账号</Divider>
        {user.account &&
          user.account.map(item => {
            const Icon = Icons[item.icon];
            return (
              <a key={item.id} target="_blank" href={item.account}>
                <Avatar size={28} icon={<Icon />} className="account" />
              </a>
            );
          })}
      </div>
    </div>
  );
};
export default Author;
