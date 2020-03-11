该项目基于 [Next.js](https://nextjs.org/)， 由[`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app)创建

## 简介

react-blog 是前端基于 react，后端基于 egg.js 的一个博客项目。
项目分为三部分，即三个小项目，均可以在我的 github 中下载。

- react-blog-front 博客前端
- react-blog-back 博客后端，负责数据存储响应等逻辑
- react-blog-mng 管理端，管理博客
  数据库使用的是 mysql，库名为 react-blog，相应的表结构文件可查看 react-blog-back 项目根目录下的 react-blog.sql 文件

**执行** `npm start`

服务器将运行在 [http://localhost:3000](http://localhost:3000)
