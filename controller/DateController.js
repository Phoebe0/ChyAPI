const { selDate } = require('../model/DateModel')
// 定义处理数据的方法
const findDate = async (req, res) => {
  let result = await Date()

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
}

// 导出成员
module.exports = {
  findDate,
}
