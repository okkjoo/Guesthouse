export default {
  'post /api/user/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 15,
        username: 'test user',
        avatar:
          'https://avatars.githubusercontent.com/u/72183335?v=4',
        tel: 1123123213,
        sign: '现在是白天',
      },
    })
  },
  'post /api/user/edit': (req, res) => {
    res.json({
      status: 200,
      data: 'ok',
    })
  },
}
