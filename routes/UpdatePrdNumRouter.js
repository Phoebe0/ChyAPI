const express = require('express')
const router = express.Router()
// 控制器添加
const PrdController = require('../controller/PrdController')
// 发送post请求
router.post('/UpdatePrdNum', PrdController.UpdatePrdNum)
module.exports = router
