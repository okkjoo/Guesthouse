import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd-mobile/es'
import OrderLists from './components/OrderLists'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import { Http, isEmpty } from '@/utils'
import { ErrorBoundary } from '@/components'

import './index.less'

export default function(props) {
  const [page, setPage] = useState(CommonEnum.PAGE)
  const [orders, setOrders] = useState([])
  const [showLoading, setShowLoading] = useState(true)
  const [type, setType] = useState(0)
  // const [orders] = useHttpHook({
  //   url: '/order/lists',
  //   body: {
  //     ...page,
  //   },
  // })
  const invokenHttp = async pageNum => {
    const res = await Http({
      url: '/orders/lists',
      body: {
        ...page,
        pageNum,
        type,
      },
    })
    return res
  }
  const fetchOrder = async pageNum => {
    const res = await invokenHttp(pageNum)
    if (!isEmpty(res) && res.length <= page.pageSize) {
      setOrders(res)
      setShowLoading(true)
    } else {
      setShowLoading(false)
    }
  }
  const handleChange = e => {
    console.log(e)
    setType(parseInt(e))
    setPage(CommonEnum.PAGE)
    setOrders([])
    setShowLoading(true)
  }
  const tabs = [
    { title: '未支付', key: 0, orders, type: 0 },
    { title: '已支付', key: 1, orders, type: 1 },
  ]

  useObserverHook(
    `#${CommonEnum.LOADING_ID}`,
    async entries => {
      // console.log(entries)
      if (entries[0].isIntersecting) {
        const res = await invokenHttp(page.pageNum + 1)
        if (
          !isEmpty(orders) &&
          !isEmpty(res) &&
          res.length === page.pageSize
        ) {
          setOrders([...orders, ...res])
          setPage({
            ...page,
            pageNum: page.pageNum + 1,
          })
          setShowLoading(true)
        } else {
          setShowLoading(false)
        }
      }
    },
    null,
  )
  useEffect(() => {
    fetchOrder(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])
  return (
    <ErrorBoundary>
      <div className="order-page">
        <Tabs onChange={handleChange}>
          {tabs.map(item => (
            <Tabs.Tab
              title={item.title}
              key={item.key}
              className="tab"
            >
              <OrderLists
                showLoading={showLoading}
                orders={item.orders}
                type={item.type}
              />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </ErrorBoundary>
  )
}
