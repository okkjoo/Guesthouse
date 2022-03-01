import React, { useState } from 'react'
import { Tabs } from 'antd-mobile/es'
import OrderLists from './components/OrderLists'
import { useHttpHook } from '@/hooks'
import { CommonEnum } from '@/enums'

import './index.less'

export default function(props) {
  const [page, setPage] = useState(CommonEnum.PAGE)
  const [orders] = useHttpHook({
    url: '/order/lists',
    body: {
      ...page,
    },
  })

  const tabs = [
    { title: '未支付', key: 0, orders, type: 0 },
    { title: '已支付', key: 1, orders, type: 1 },
  ]
  return (
    <div className="order-page">
      <Tabs>
        {tabs.map(item => (
          <Tabs.Tab
            title={item.title}
            key={item.key}
            className="tab"
          >
            <OrderLists orders={item.orders} type={item.type} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  )
}
