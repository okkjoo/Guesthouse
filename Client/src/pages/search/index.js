import React, { useState, useEffect } from 'react'
import { SearchBar, SpinLoading } from 'antd-mobile/es'
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks'
import { useLocation } from 'react-router-dom'
import { ShowLoading } from '@/components'
import { CommonEnum } from '@/enums'

import './index.less'

export default function(props) {
  const { query } = useLocation() // 获取参数
  const [houseName, setHouseName] = useState('') // 搜索框输入的内容
  const [page, setPage] = useState(CommonEnum.PAGE)
  const [housesLists, setHousesLists] = useState([]) // 当前展示酒店列表
  const [showLoading, setShowLoading] = useState(true) // 监听是否到底部了
  const [houseSubmitName, setHouseSubmitName] = useState('') // 搜索框回车或点击取消后上传的内容

  // 这里的 loading 是要监听的，请求结束时再进行更新操作
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    // 携带的数据
    body: {
      ...page,
      houseSubmitName,
      code: query?.code,
      startTime: query?.startTime + ' 00:00:00',
      endTime: query?.endTime + ' 23:59:59',
    },
    watch: [page.pageNum, houseSubmitName], // 监听 pageNum 的变化，页码更新时就要重新发送请求
  })
  // console.log('house', houses)
  // console.log('house')
  useObserverHook(
    `#${CommonEnum.LOADING_ID}`, // 要监听的 DOM 元素
    // 执行的回调函数
    entries => {
      // console.log('a')
      // 要求是 监听元素进入可视页面 && 请求结束
      if (entries[0].isIntersecting && !loading) {
        // console.log('loading:::', loading)
        // console.log(entries[0].isIntersecting)
        setPage({
          ...page,
          pageNum: page.pageNum + 1,
        })
        // console.log(111)
      }
    },
    // 请求状态改变的时候调用
    [loading],
  )

  useImgHook('.item-img', entries => {}, null)

  // 与页面中输入框的显示绑定
  const handleChange = value => {
    setHouseName(value)
  }

  // 公共
  const valueChange = value => {
    setHousesLists([])
    console.log(housesLists)
    setHouseName(value)
    setHouseSubmitName(value)
    setPage(CommonEnum.PAGE)
  }
  // 取消搜索的回调函数
  const handleCancel = () => {
    valueChange('')
  }
  // 点击搜索的回调函数
  const handleSearch = value => {
    valueChange(value)
  }
  useEffect(() => {
    // console.log(loading)
    // console.log(houses)
    // 请求结束 && 请求返回的 houses 不是 undefined
    if (!loading && houses) {
      // 数组不为空
      if (houses.length) {
        // console.log(111)
        setHousesLists([...housesLists, ...houses])
        // 返回最后一组数据
        if (houses.length < page.pageSize) {
          setShowLoading(false)
        }
      } else {
        // 数组为空
        setShowLoading(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <div className="search">
        <SearchBar
          placeholder="搜索酒店"
          showCancelButton
          value={houseName}
          onChange={handleChange}
          onCancel={handleCancel}
          onSearch={handleSearch}
          style={{
            '--background': '#ffffff',
            margin: '10px',
          }}
        />
      </div>
      {/* 搜索结果 */}
      <div className="result">
        {!loading || housesLists ? (
          housesLists?.map(item => (
            <div className="item" key={item.id}>
              <img
                alt="img"
                className="item-img"
                data-src={item.img}
                src={require('../../assets/hui.png')}
              />
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">￥{item.price}</div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              margin: '50% auto',
              width: '10%',
              height: '10px',
            }}
          >
            <SpinLoading color="primary" />
          </div>
        )}
        <ShowLoading
          id={CommonEnum.LOADING_ID}
          showLoading={showLoading}
        />
      </div>
    </div>
  )
}
