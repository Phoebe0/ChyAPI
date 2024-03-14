const {
  prdData,
  updatePrdData,
  updatePrdNumData,
} = require('../model/PrdModel')
// 定义处理数据的方法
// 01 - 查询所有商品信息
const SelectPrd = async (req, res) => {
  let result = await prdData()
  if (result) {
    res.send({
      meta: {
        code: 200,
        message: '成功',
      },
      data: result,
    })
  } else {
    res.send({
      meta: {
        code: 500,
        message: '失败',
      },
      data: null,
    })
  }
  res.end()
}

// 02 - 更新商品状态
const UpdatePrdState = async (req, res) => {
  // req.query - 请求体{obj}
  let result = await updatePrdData(req.query)
  if (result) {
    res.send({
      meta: {
        code: 200,
        message: '更新成功',
      },
      data: result,
    })
  } else {
    res.send({
      meta: {
        code: 500,
        message: '更新失败',
      },
      data: [],
    })
  }
  res.end()
}

// 03 - 更新商品数量
const UpdatePrdNum = async (req, res) => {
  // req.query - 请求体{obj}
  let result = await updatePrdNumData(req.query)
  if (result) {
    res.send({
      meta: {
        code: 200,
        message: '更新成功',
      },
      data: result,
    })
  } else {
    res.send({
      meta: {
        code: 500,
        message: '更新失败',
      },
      data: [],
    })
  }
  res.end()
}

// 导出成员
module.exports = {
  SelectPrd,
  UpdatePrdState,
  UpdatePrdNum,
}
