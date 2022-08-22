import React from 'react'

import './index.less'

const OrderSkeleton = () => {
  const arr = Array(3).fill(1)
  return (
    <div className="order-skeletons">
      {arr.map((_, index) => (
        <div className="order-item" key={index}>
          <div className={'skeletons left'}></div>
          <div className="center">
            <div className={'skeletons title'}></div>
            <div className={'skeletons price2'}></div>
            <div className={'skeletons time'}></div>
          </div>
          <div className={'skeletons pay'}></div>
        </div>
      ))}
    </div>
  )
}

export default OrderSkeleton
