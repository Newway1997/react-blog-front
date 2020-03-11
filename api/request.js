import axios from "axios";
let baseUrl;
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:7001/default/";
} else {
  baseUrl = "http://112.74.35.49:7001/default/";
}
export default function(config) {
  if (!config.url) {
    throw Error("need url");
  }
  if (config.url[0] !== "/") {
    config.url = baseUrl + config.url;
  } else {
    config.url = baseUrl + config.url.substring(1);
  }
  return axios(config);
}
