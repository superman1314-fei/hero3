// 操作数据库
// 引入数据库模块
const mysql = require('mysql')

// 创建数据库连接对象
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'qianduan0',
    dateStrings:true
})

//开启连接
conn.connect()


//处理数据方面业务
module.exports={
    getAllHeroData(callback){
        //获取所有英雄数据
        let sql = 'select * from users'
        conn.query(sql,(err,result)=>{
            if(err) return callback(err)
            
            callback(null,result)
        })
    },
    getOneHeroInfo(id,callback){
        let sql = 'select * from users where id=?'
        conn.query(sql,[id],(err,result)=>{
            if(err) return callback(err)
            callback(null,result)
        })
    }
}


