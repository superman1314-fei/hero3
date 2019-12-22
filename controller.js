let heroModel = require('./model')


// 业务处理
module.exports={
    //显示首页
    showIndexPage(req,res){
        // heroModel.getAllHero()
        res.render('index',{})
    },
    showEddPage(req,res){
       res.render('add',{})
    },
    showEditPage(req,res){
        res.render('edit',{})
    },
    showinfoPage(req,res){
        res.render('info',{})
    }



}