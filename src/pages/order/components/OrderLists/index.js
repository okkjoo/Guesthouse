import React from 'react'
import OrderItem from '../OrderItem'
import { SpinLoading } from 'antd-mobile/es'
import { isEmpty } from '@/utils'
import { ShowLoading } from '@/components'

const OrderLists = props => {
  // console.log(props.showLoading)
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
      <ShowLoading
        style={{ marginBottom: '20px', height: '100px' }}
        showLoading={props.showLoading}
        // showLoading={true}
      />
    </div>
  )
}

export default OrderLists
