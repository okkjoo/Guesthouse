import React, { memo, useState } from 'react'
import { Link } from 'umi'

function Header(props) {
  const [username] = useState(localStorage.getItem('username'))
  console.log('header render')
  return (
    <div className="header">
      <div className="header_title">睡好</div>
      <div className="header_login">
        {username ? (
          username
        ) : (
          <>
            <Link to="/login">登录 </Link>
            <Link to="/register"> 注册</Link>
          </>
        )}
      </div>
    </div>
  )
}
export default memo(Header)
