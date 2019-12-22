
// 引入模块
const express=require('express')

// 创建端口
const app=express();
let router = require('./router')

// 配置模板引擎
app.set('view engine','ejs')


//静态托管

app.use('/node_modules',express.static('node_modules'))
// 监听端口
app.listen(3002,()=>{
    console.log('server is running at http://127.0.0.1:3002');
})







// 注册中间件
app.use(router)