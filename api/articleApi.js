import request from "./request";
export function getArticleList(start = 0, size = 10) {
  return request({
    url: "/getArticleList",
    method: "get",
    params: {
      start,
      size
    }
  });
}
export function getArticleById(id) {
  return request({ url: `/getArticleById/${id}`, method: "get" });
}
export function addViewCount(id) {
  return request({ url: `/addViewCount/${id}`, method: "get" });
}
export function getTypeInfo() {
  return request({ url: "/getTypeInfo", method: "get" });
}
export function getArticleListByType(id, start = 0, size = 10) {
  return request({
    url: `/getArticleListByType/${id}`,
    method: "get",
    params: { start, size }
  });
}
export function getAdverts() {
  return request({ url: `/getAdverts`, method: "get" });
}
