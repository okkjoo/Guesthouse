import React, { useEffect } from 'react'
import { Link } from 'umi'
import { cookie } from '@/utils'

export default function(props) {
  useEffect(() => {
    // console.log(cookie.get('user'))
  }, [])

  return (
    <div className="header">
      <div className="header_title">睡好</div>
      <div className="header_login">
        {cookie.get('user') ? (
          cookie.get('user').username
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
