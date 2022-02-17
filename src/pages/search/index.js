import React, { useState, useEffect } from 'react'
import { SearchBar, SpinLoading } from 'antd-mobile/es'
import { useHttpHook } from '@/hooks'
import './index.less'

export default function(props) {
  const [houseName, setHouseName] = useState('')

  const [houses, loading] = useHttpHook({
    url: '/houses/search',
    body: {},
  })

  const handleChange = value => {
    setHouseName(value)
  }
  const handleCancel = () => {}
  const handleSearch = value => {}
  useEffect(() => {}, [])

  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索酒店"
        showCancelButton
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSearch={handleSearch}
        style={{ '--background': '#ffffff', margin: '10px' }}
      />
      {/* 搜索结果 */}
      <div className="result">
        {!loading ? (
          houses.map(item => (
            <div className="item" key={item.id}>
              <img alt="img" src={item.img} />
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">￥{item.price}</div>
              </div>
            </div>
          ))
        ) : (
          <div
            id="11"
            style={{
              margin: '50% auto',
              width: '10%',
              height: '10px',
            }}
          >
            <SpinLoading color="primary" />
          </div>
        )}
      </div>
    </div>
  )
}
