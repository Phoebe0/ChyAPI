const pg = require('pg')
// 创建连接对象
const connect = {
  connectionLimit: 10, //最大连接数，默认为10
  host: 'localhost', // 对应的服务器IP，如果是本地，则为local host
  user: 'postgres', // 用户
  password: '123456', // 密码
  port: 5432, // 端口号
  database: 'postgres',
  prepare: true, // 设置为 true 支持参数化查询
}

const pool = new pg.Pool(connect)
pool.connect(function (err) {
  if (err) {
    return console.error('数据库连接出错', err)
  }
  return console.log('数据库连接成功')
})

// 01 - 获取所有商品
const prdData = () => {
  //常用sql语句，和mysql语句基本一致
  const sql = 'select * from public.t_chy_buycar_info;'
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

// 02 - 更新商品状态
const updatePrdData = (queryBody) => {
  const sql = 'update public.t_chy_buycar_info set pstate = $1 where pid = $2;'
  return (
    pool
      // 传递参数
      .query(sql, [queryBody.pstate, queryBody.pid])
      .then(() => {
        // 返回更新后的数据结果
        return prdData()
      })
      .catch((err) => {
        console.log('更新数据失败 ' + err + ' SQL:' + sql)
        return false
      })
  )
}

// 03 - 更新商品数量
const updatePrdNumData = (queryBody) => {
  const sql = 'update public.t_chy_buycar_info set pnum = $1 where pid = $2;'
  return (
    pool
      // 传递参数
      .query(sql, [queryBody.pnum, queryBody.pid])
      .then(() => {
        // 返回更新后的数据结果
        return prdData()
      })
      .catch((err) => {
        console.log('更新数据失败 ' + err + ' SQL:' + sql)
        return false
      })
  )
}

// 导出数据
module.exports = {
  prdData,
  updatePrdData,
  updatePrdNumData,
}
