import "../public/style/components/advert.css";
import { useState, useEffect } from "react";
import { List } from "antd";
import * as articleApi from "../api/articleApi";
const Advert = () => {
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await articleApi.getAdverts();
      let adverts = result.data.data.map(item => item.advert);
      setImgList(adverts);
    })();
  }, []);
  return (
    <div className="ad-div comm-box">
      {imgList.length > 0 && (
        <List
          dataSource={imgList}
          renderItem={item => (
            <List.Item>
              <img src={item}></img>
            </List.Item>
          )}
        ></List>
      )}
    </div>
  );
};

export default Advert;
