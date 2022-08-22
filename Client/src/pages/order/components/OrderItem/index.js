import React from 'react'
import { Button } from 'antd-mobile/es'
import { timer } from '@/utils'

const OrderItem = props => {
  const renderPay = () => {
    switch (props?.type) {
      case 0:
        return (
          <Button color="warning" size="small">
            去支付
          </Button>
        )
      case 1:
        return (
          <Button color="success" size="small">
            已完成
          </Button>
        )
      default:
        break
    }
  }
  return (
    <div className="order-item">
      <img alt="order" src={props?.img} />
      <div className="center">
        <div className="title">{props?.title}</div>
        <div className="price">￥{props?.price}</div>
        <div className="time">{timer(props?.createTime)}</div>
      </div>
      <div className="pay">{renderPay()}</div>
    </div>
  )
}

export default OrderItem
