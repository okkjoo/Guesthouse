import React from 'react'
import { List } from 'antd-mobile'

const Lists = props => {
  console.log(props.search)

  const { text, lists } = props.search
  return (
    <div>
      <h1>text:{text}</h1>
      <List>
        {lists.map((item, i) => (
          <List.Item key={i}>{item}</List.Item>
        ))}
      </List>
    </div>
  )
}

export default Lists
