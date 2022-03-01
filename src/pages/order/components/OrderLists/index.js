import React from 'react'
import OrderItem from '../OrderItem'
import { SpinLoading } from 'antd-mobile/es'
import { isEmpty } from '@/utils'

const OrderLists = props => {
  return (
    <div>
      {isEmpty(props?.orders) ? (
        <SpinLoading />
      ) : (
        <div className="tab-lists">
          {props?.orders.map(item => (
            <OrderItem
              type={props?.type}
              key={`order-${item.key}`}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderLists
