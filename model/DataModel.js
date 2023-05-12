const pg = require('pg')
// 使用连接池进行数据库连接操作
// 1. 创建连接对象
const conn = {
  host: 'localhost', // 对应的服务器IP，如果是本地，则为local host
  user: 'postgres', // 用户
  password: 123456, // 密码
  port: 5432, // 端口号
  database: 'postgres', // 数据库名称
  // 扩展属性
  max: 20, // 连接池最大连接数
  idleTimeoutMillis: 3000, // 连接最大空闲时间
}
// 创建连接池
const pool = new pg.Pool(conn)
// 执行连接操作 connect方法
pool.connect(function (err) {
  if (err) {
    return console.error('数据库连接错误❌！', err)
  }
  return console.log('数据库连接成功')
})

const selData = () => {
  //常用sql语句
  var sql = 'select * from product'
  return pool
    .query(sql)
    .then((res) => {
      return res.rows //传出查询到的数据
    })
    .catch((err) => {
      console.log('查询失败' + err)
      return false
    })
}

module.exports = {
  selData,
}
