import React from 'react'
import { Button } from 'antd-mobile/es'

const Info = () => {
  return (
    <div className="info">
      <div className="info-title">标题</div>
      <div className="info-msg">简介:</div>
      <div className="info-price">价格:</div>
      <div className="info-time">发布时间:</div>
      <div className="info-time">空房时间:~</div>
      <div className="info-time"></div>
      <Button className="info-btn" color="warning">
        预 订
      </Button>
    </div>
  )
}

export default Info
