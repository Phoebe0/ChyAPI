// 1. 导入express模块
const express = require('express')
// 2. 创建服务器
const app = express()
// 3. 定义路由
const SelectPrd = require('./routes/SelectPrdRouter')
app.use('/', SelectPrd)
// 4. 启动服务器
app.listen(3301, function () {
  console.log('服务启动啦')
})
