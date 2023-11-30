const { prdData } = require('../model/SelectPrdModel')
// 定义处理数据的方法
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
}

// 导出成员
module.exports = {
  SelectPrd,
}
