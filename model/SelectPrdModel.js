const pg = require('pg')
// 创建连接对象
const connect = {
  host: 'localhost', // 对应的服务器IP，如果是本地，则为local host
  user: 'postgres', // 用户
  password: '123456', // 密码
  port: 5432, // 端口号
  database: 'postgres',
}

const pool = new pg.Pool(connect)
pool.connect(function (err) {
  if (err) {
    return console.error('数据库连接出错', err)
  }
  return console.log('数据库连接成功')
})
const prdData = () => {
  //常用sql语句，和mysql语句基本一致
  var sql = 'select * from public.t_chy_buycar_info;'
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
//关闭连接

module.exports = {
  prdData,
}
