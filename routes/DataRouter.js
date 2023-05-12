const express = require('express')
const router = express.Router()
// 控制器添加
const myDateController = require('../controller/DataController')
router.get('/FineDate', myDateController.findDate)
module.exports = router
