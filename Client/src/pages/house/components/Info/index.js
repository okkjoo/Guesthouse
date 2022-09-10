import React from 'react'
import { Button } from 'antd-mobile/es'
import { timer } from '@/utils'

const Info = props => {
  const { detail, order, btnClick } = props

  const handleOrder = id => {
    btnClick(id)
  }

  const renderBtn = () => {
    // order 中无id 表示 未预定
    if (!order?.id) {
      return (
        <Button
          className="info-btn"
          color="warning"
          onClick={() => {
            handleOrder()
          }}
        >
          预 订
        </Button>
      )
    }
    // 已有订单 未支付
    if (order?.isPayed === 0) {
      return (
        <Button
          className="info-btn"
          color="success"
          onClick={() => {
            handleOrder(order.id)
          }}
        >
          取消预订
        </Button>
      )
    }
    // 已支付
    if (order?.isPayed === 1) {
      return (
        <Button className="info-btn" color="success">
          准备入住
        </Button>
      )
    }
  }

  return (
    <div className="info">
      <div className="info-title">{detail?.name}</div>
      <div className="info-msg">简介: {detail?.info}</div>
      <div className="info-price">价格: {detail?.price}</div>
      <div className="info-time">
        空房时间: {timer(detail?.startTime, '')} ~{' '}
        {timer(detail?.endTime, '')}
      </div>
      <div className="info-time"></div>

      {renderBtn()}
    </div>
  )
}

export default Info
