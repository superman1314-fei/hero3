// 引入express
const express = require("express");

let hero = require("./controller");
// 创建路由对象
const router = express.Router();

router.get("/", (req, res) => {
    hero.showIndexPage(req, res);
  })
  .get("/add", (req, res) => {
    hero.showEddPage(req, res);
  })
  .get("/edit", (req, res) => {
    hero.showEditPage(req, res);
  })
  .get("/info", (req, res) => {
    hero.showInfoPage(req, res);
  })
  .get("/getAllheroInfo", (req, res) => {
    hero.getAllheroInfo(req,res)
  })
  .get('/getOneHero',(req,res)=>{
    hero.getOneHeroInfo(req,res)
  })
  .get('/deieteOneHero',(req,res)=>{
    hero.deieteOneHero(req,res)
  })
  .get('/showOneHeroInof',(req,res)=>{
    hero.showOneHeroInof(req,res)
  })
  .post('/updateHeroInfo',(req,res)=>{
    hero.updateHeroInfo(req,res)
  })
  
  ;

// 暴露路由
module.exports = router;
