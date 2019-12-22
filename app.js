
// 引入模块
const express=require('express')
const bodyParser = require('body-parser')


let router = require('./router')

// 创建端口
const app=express();
// 配置模板引擎
app.set('view engine','ejs')


//静态托管

app.use('/node_modules',express.static('node_modules'))
app.use(bodyParser.urlencoded({ extended: false }))
// 监听端口
app.listen(3002,()=>{
    console.log('server is running at http://127.0.0.1:3002');
})

// 注册中间件
app.use(router)