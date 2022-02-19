import React from 'react'
import { useState } from 'react'
import AwesomeSwiper from 'react-awesome-swiper'

const Banner = () => {
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
        <div className="swiper-slide">
          <img
            alt="banner"
            src="https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg"
          />
        </div>
        <div className="swiper-slide">
          <img
            alt="banner"
            src="https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg"
          />
        </div>
        <div className="swiper-slide">
          <img
            alt="banner"
            src="https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg"
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  )
}

export default Banner
