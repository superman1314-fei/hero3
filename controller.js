let heroModel = require('./model')
const moment = require('moment')

// 业务处理
module.exports={
    //显示首页
    showIndexPage(req,res){
        heroModel.getAllHeroData((err,result)=>{
            if(err) return res.json({
                code:'201',
                msg:'没有数据'
            })
         res.render('index',{data:result})
        })
      
    },
    //添加英雄页面
    showEddPage(req,res){
       res.render('add',{})
    },
    //编辑英雄
    showEditPage(req,res){

        res.render('edit',{})
    },
    // 显示英雄详情页面
    showInfoPage(req,res){
        res.render('info',{})
    },
    //渲染全部英雄数据
    getAllheroInfo(req,res){
        heroModel.getAllHeroData((err,result)=>{
    if(err) return res.json({
        code:201,
        msg:'获取英雄失败'
    })
    res.json({
        code:200,
        msg:'获取英雄成功',
        data:result
    })
})},
//查看英雄
getOneHeroInfo(req,res){
    //获取id,根据id获取英雄数据
    let {id}=req.query
    heroModel.getOneHeroInfo(id,(err,result)=>{
        if(err) return res.json({
            code:201,
            msg:'不存在'
        })
        res.json({
            code:200,
            msg:'获取成功',
            data:result
        })
    })
    
},//删除数据
deieteOneHero(req,res){
    let {id} = req.query
// console.log(req.query);

    heroModel.deieteOneHero(id,result=>{
        if(result) return res.json({
            code:200,
            msg:'删除成功'
        })
        res.json({
            code:201,
            msg:'删除失败'
        })
    })
},
//获取编辑详情
showOneHeroInof(req,res){
    let {id}=req.query
    heroModel.getOneHeroInfo(id,(err,result)=>{
        if(err) return res.json({
            code:201,
            msg:'获取失败'
        })
        res.json({
            code:200,
            msg:'获取成功',
            data:result
        })
    })
},
//修改英雄
updateHeroInfo(req,res){
    let hero = req.body
    // console.log(hero);
   hero.ctime=moment().format('YYYY-MM-DD HH:mm:ss')
   heroModel.updateHeroInfo(hero,result=>{

    //    console.log(hero);
       
       if(result) return res.json({
           code:200,
           msg:'更新成功'
       })
       res.json({
           code:201,
           msg:'更新失败'
       })
   })
    
},
//添加数据
addHerOInfo(req,res){
    let hero=req.body
   hero.ctime=moment().format('YYYY-MM-DD HH:mm:ss')
    
    heroModel.addHerOInfo(hero,result=>{
        if(result) return res.json({
            code:200,
            msg:'添加成功'
        })
        res.json({
            code:201,
            msg:'添加失败'
        })
    })
}
}