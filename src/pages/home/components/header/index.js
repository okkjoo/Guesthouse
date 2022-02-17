import React, { useState, useEffect } from 'react'
import { Link } from 'umi'

export default function(props) {
  const [state, setState] = useState()

  useEffect(() => {}, [])

  return (
    <div className="header">
      <div className="header_title">睡好</div>
      <div className="header_login">
        <Link to="/login">登录 </Link>|
        <Link to="/register"> 注册</Link>
      </div>
    </div>
  )
}
