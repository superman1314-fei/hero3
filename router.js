// 引入express
const express = require("express");
// 创建路由对象
const router = express.Router();
let hero = require('./controller')
router.get("/", (req, res) => {
    hero.showIndexPage(req, res);
  }).get("/add", (req, res) => {
    hero.showEddPage(req, res);
  }).get("/edit", (req, res) => {
    hero.showEditPage(req, res);
  }).get("/info", (req, res) => {
    hero.showinfoPage(req, res);
  });

// 暴露路由
module.exports = router;
