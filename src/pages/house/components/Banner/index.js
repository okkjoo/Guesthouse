import React from 'react'
import { useState } from 'react'
import AwesomeSwiper from 'react-awesome-swiper'

const Banner = props => {
  const [config] = useState({
    // 循环
    loop: true,
    // 自动切换
    autoplay: {
      delay: 2000,
    },
    // 分页相关配置
    pagination: {
      el: '.swiper-pagination',
    },
  })
  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        {props?.banner?.map(banner => (
          <div className="swiper-slide" key={banner.id}>
            <img alt="banner" src={banner.src} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  )
}

export default Banner
