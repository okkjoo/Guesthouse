import React from 'react'
import { Button } from 'antd-mobile/es'
import { timer } from '@/utils'

const Info = props => {
  const { detail } = props
  // console.log('detail', detail)
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
      <Button className="info-btn" color="warning">
        预 订
      </Button>
    </div>
  )
}

export default Info
