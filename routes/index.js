// 路由出口
const express = require('express')
const router = express.Router()
const SelectPrdRouter = require('./SelectPrdRouter')
const UpdatePrdStateRouter = require('./UpdatePrdStateRouter')
const UpdatePrdNumRouter = require('./UpdatePrdNumRouter')
router.use('/api', SelectPrdRouter)
router.use('/api', UpdatePrdStateRouter)
router.use('/api', UpdatePrdNumRouter)

module.exports = router
