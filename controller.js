let heroModel = require('./model')


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
}


}