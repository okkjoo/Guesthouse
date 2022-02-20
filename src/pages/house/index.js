import React from 'react'
import Banner from './components/Banner'
import CommentList from './components/CommentList'
import Footer from './components/Footer'
import Info from './components/Info'

import './index.less'

const House = () => {
  return (
    <div className="house-page">
      {/* 顶部 banner */}
      <Banner />
      {/* 房屋信息 */}
      <Info />
      {/* 评论列表 */}
      <CommentList />
      {/* 底部 footer ：悬浮 + 评论弹窗按钮 */}
      <Footer />
    </div>
  )
}

export default House
