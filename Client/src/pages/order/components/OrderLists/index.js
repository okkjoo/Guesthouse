import React, { useState, useEffect } from 'react'
import OrderItem from '../OrderItem'
import { isEmpty } from '@/utils'
import { ShowLoading } from '@/components'
import { OrderSkeleton } from '@/skeletons'

const OrderLists = props => {
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFlag(true)
    }, 1500)
  }, [])

  return (
    <div>
      {isEmpty(props?.orders) ? (
        <>
          {flag ? (
            <ShowLoading showLoading={false} />
          ) : (
            <OrderSkeleton />
          )}
        </>
      ) : (
        <div className="tab-lists">
          {props?.orders.map(item => (
            <OrderItem
              type={props?.type}
              key={`order-${item.key}`}
              {...item}
            />
          ))}
          <ShowLoading
            style={{ marginBottom: '20px', height: '100px' }}
            showLoading={props.showLoading}
            // showLoading={true}
          />
        </div>
      )}
    </div>
  )
}

export default OrderLists
