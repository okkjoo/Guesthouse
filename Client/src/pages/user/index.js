import React, { useEffect } from 'react'
import { List, Button } from 'antd-mobile/es'
import { useHistory } from 'react-router-dom'
import { useStoreHook } from 'think-react-store'
import './index.less'

export default function(props) {
  const {
    user: { avatar, phone, sign, getUserAsync, logoutAsync },
  } = useStoreHook()
  const history = useHistory()

  const handleClick = () => {
    history.push({
      pathname: 'user/edit',
      query: {},
    })
  }

  const handleLogout = () => {
    logoutAsync()
  }

  useEffect(() => {
    getUserAsync({
      id: 15,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            src={avatar || require('../../assets/yay.jpg')}
          />
          <div className="tel">{phone}</div>
          <div className="sign">{sign}</div>
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
      <Button
        style={{ marginTop: '100px', width: '100vw' }}
        onClick={handleLogout}
      >
        退出登录
      </Button>
    </div>
  )
}
