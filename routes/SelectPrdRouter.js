const express = require('express')
const router = express.Router()
// 控制器添加
const SelectPrdController = require('../controller/SelectPrdController')
router.get('/SelectPrd', SelectPrdController.SelectPrd)
module.exports = router
