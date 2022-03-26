import React, { useState, useEffect } from 'react'
import { List } from 'antd-mobile/es'
import { useHistory } from 'react-router-dom'

import './index.less'

export default function(props) {
  const [state, setState] = useState()
  const history = useHistory()
  const handleClick = () => {
    history.push({
      pathname: 'user/edit',
      query: {},
    })
  }
  useEffect(() => {}, [])

  return (
    <div className="user-page">
      {/* 用户信息 */}
      <div className="info">
        <div className="set" onClick={handleClick}>
          设置
        </div>
        <div className="user">
          <img
            alt="user"
            src={
              'https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon001.jpg'
            }
          />
          <div className="tel">{'tel'}</div>
          <div className="sign">{'sign'}</div>
        </div>
      </div>
      {/* 列表 */}
      <div className="lists">
        <List>
          <List.Item arrow={true}>用户协议</List.Item>
          <List.Item arrow={true}>常见问题</List.Item>
          <List.Item arrow={true}>联系客服</List.Item>
        </List>
      </div>
    </div>
  )
}
