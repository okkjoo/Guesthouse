export default {
  //value支持函数类型、json类型
  'GET /api/getLists': {
    lists: ['a', 'b', 'c'],
  },
  'GET /api/getListsAsync': (req, res) => {
    // console.log('GET /api/getListsAsync', req)
    setTimeout(() => {
      res.json({
        status: 200,
        data: Array(10).fill(req.query.value),
        // status: 500,
        // errMsg: 'test err',
      })
    }, 1000)
  },
}
