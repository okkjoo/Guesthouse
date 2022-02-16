import React, { useState, useEffect } from 'react'

export default function(props) {
  const [houses, setHouses] = useState([
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
  ])

  useEffect(() => {}, [])

  return (
    <div className="hot">
      <h1>热门</h1>
      <div className="hot-lists">
        {houses.map(item => (
          <div className="hot-lists-item" key={item.id}>
            <img className="img" alt="img" src={item.img} />
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        ))}
        <br />
        --
      </div>
    </div>
  )
}
