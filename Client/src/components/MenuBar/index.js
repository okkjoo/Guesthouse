import React, { useState } from 'react'
import { TabBar } from 'antd-mobile/es'
import PropTypes from 'prop-types'
import {
  BsHouseDoorFill,
  BsHouseDoor,
  BsBagFill,
  BsBag,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import './index.less'

const MenuBar = props => {
  const { show, pathname } = props

  const history = useHistory()
  // const location = useLocation()
  // const { pathname } = location

  const setRouteActive = value => {
    history.push(value)
  }

  const [items] = useState([
    {
      title: '首页',
      selectedIcon: <BsHouseDoorFill className="menubar-icon" />,
      icon: <BsHouseDoor className="menubar-icon" />,
      key: '/',
    },
    {
      title: '订单',
      selectedIcon: <BsBagFill className="menubar-icon" />,
      icon: <BsBag className="menubar-icon" />,
      key: '/order',
    },
    {
      title: '我的',
      selectedIcon: <BsPersonFill className="menubar-icon" />,
      icon: <BsPerson className="menubar-icon" />,
      key: '/user',
    },
  ])

  return (
    <div className="menu-bar">
      <TabBar
        activeKey={pathname}
        onChange={value => setRouteActive(value)}
        className={show ? 'tabs-tab-bar-wrap ' : 'hidden'}
      >
        {items.map(item => (
          <TabBar.Item
            className="tab-bar-item "
            key={item.key}
            title={item.title}
            icon={
              item.key === pathname ? item.selectedIcon : item.icon
            }
          />
        ))}
      </TabBar>
    </div>
  )
}

export default MenuBar

MenuBar.defaultProps = {
  show: false,
  pathname: '',
}

MenuBar.propTypes = {
  show: PropTypes.bool,
  pathname: PropTypes.string,
}
