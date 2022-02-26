export default {
  'post /api/houses/search': (req, res) => {
    let data
    if (req.body.pageNum < 4) {
      data = [
        {
          id: 1,
          img:
            'https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg',
          title: '礼途酒店',
          info: '广州淘金地铁站店',
          price: '515',
        },
        {
          id: 2,
          img:
            'https://dimg04.c-ctrip.com/images/0202l1200098zagu6E64E_R_300_225_R5_Q70_D.jpg',
          title: '悦云酒店',
          info: '广州白云国际机场店',
          price: '375',
        },
        {
          id: 3,
          img:
            'https://dimg04.c-ctrip.com/images/200q1h000001hm83tE3C4_R_300_225_R5_Q70_D.jpg',
          title: '铂瑞斯行政公寓',
          info: '深圳华强北店',
          price: '1219',
        },
        {
          id: 4,
          img:
            'https://ac-a.static.booking.cn/xdata/images/hotel/270x200/292819265.webp?k=8b04b0d6c2a0795930cff2620592f6f88066a02ce085c433ce064c95d59ea454&o=',
          title: '较场尾蔚蓝沿海民宿',
          info: '大鹏新区较场尾',
          price: '4235',
        },
        {
          id: 5,
          img:
            'https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg',
          title: '礼途酒店',
          info: '广州淘金地铁站店',
          price: '515',
        },
        {
          id: 6,
          img:
            'https://dimg04.c-ctrip.com/images/0202l1200098zagu6E64E_R_300_225_R5_Q70_D.jpg',
          title: '悦云酒店',
          info: '广州白云国际机场店',
          price: '375',
        },
        {
          id: 7,
          img:
            'https://dimg04.c-ctrip.com/images/200q1h000001hm83tE3C4_R_300_225_R5_Q70_D.jpg',
          title: '铂瑞斯行政公寓',
          info: '深圳华强北店',
          price: '1219',
        },
        {
          id: 8,
          img:
            'https://ac-a.static.booking.cn/xdata/images/hotel/270x200/292819265.webp?k=8b04b0d6c2a0795930cff2620592f6f88066a02ce085c433ce064c95d59ea454&o=',
          title: '较场尾蔚蓝沿海民宿',
          info: '大鹏新区较场尾',
          price: '4235',
        },
      ]
    } else {
      data = []
    }
    res.json({
      status: 200,
      data,
    })
  },
  'post /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          {
            id: 1,
            src:
              'https://ac-a.static.booking.cn/xdata/images/hotel/270x200/292819265.webp?k=8b04b0d6c2a0795930cff2620592f6f88066a02ce085c433ce064c95d59ea454&o=',
          },
          {
            id: 2,
            src:
              'http://p1.meituan.net/hotelbiz/7adc0387cd64a0a5b67eb4f7b17dde11187185.jpg%40340w_255h_1e_1c_1l%7Cwatermark%3D0',
          },
          {
            id: 3,
            src:
              'https://img.meituan.net/phoenix/395ab37c9509193dfcd489f27cf76581192309.jpg%40340w_255h_1e_1c_1l%7Cwatermark%3D0',
          },
        ],
        info: {
          title: '较场尾蔚蓝沿海民宿',
          msg: '大鹏新区较场尾',
          price: '4235',
          startTime: new Date(),
          endTime: new Date() + 1,
        },
      },
    })
  },
  'post /api/comments/lists': (req, res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 1,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon001.jpg',
          username: 'user0',
          createTime: new Date(),
          info: '服务态度👌',
        },
        {
          id: 2,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon00.jpg',
          username: 'user',
          createTime: new Date(),
          info: '提供的三餐不错',
        },
        {
          id: 3,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon001.jpg',
          username: 'user',
          createTime: new Date(),
          info: '下次还会来',
        },
        {
          id: 4,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon00.jpg',
          username: 'user9',
          createTime: new Date(),
        },
        {
          id: 5,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon001.jpg',
          username: 'user7',
          createTime: new Date(),
          info: '服务态度👌',
        },
        {
          id: 6,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon00.jpg',
          username: 'user',
          createTime: new Date(),
          info: '下次还会来',
        },
        {
          id: 7,
          avatar:
            'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon00.jpg',
          username: 'user',
          createTime: new Date(),
          info: '提供的三餐不错',
        },
      ],
    })
  },
  'post /api/comments/add': (req, res) => {
    res.json({
      status: 200,
      data: 'ok',
    })
  },
}
