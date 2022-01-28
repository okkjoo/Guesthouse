import React from 'react'
import { List } from 'antd-mobile'
import { Link } from 'umi'

const Index = () => {
  return (
    <div>
      <h1>class demo</h1>
      <List>
        <List.Item>
          <Link to="/class/component-old">component-old</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/component-new">component-new</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/dva">dva</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/context">context</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/lazy-load">lazy-load</Link>
        </List.Item>
      </List>
    </div>
  )
}

export default Index
