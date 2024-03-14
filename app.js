// 1. 导入express模块
const express = require('express')
// 2. 创建服务器
const app = express()
// 创建日志
const logger = require('morgan')
// CORS中间件
const cors = require('cors')

app.use(logger('dev'))
app.use(cors())
// 3. 定义路由
const routes = require('./routes/index')
app.use('/', routes)
// 4. 启动服务器
app.listen(3301, function () {
  console.log('服务启动啦')
})
