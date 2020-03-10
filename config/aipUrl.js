let ipUrl;
if (process.env.NODE_ENV === "development") {
  ipUrl = "localhost:7001/default/";
} else {
  ipUrl = "http://112.74.35.49:7001/default/";
}

const servicePath = {
  getArticleList: ipUrl + "getArticleList",
  getArticleById: ipUrl + "getArticleById/",
  getTypeInfo: ipUrl + "getTypeInfo",
  getArticleListByType: ipUrl + "getArticleListByType/"
};
export default servicePath;
