import React from 'react'
import { List } from 'antd-mobile'
import SearchContext from './searchContext'

const Lists = props => {
  const { text, lists } = props

  const context = SearchContext
  console.log('SearchContext', context)
  // const { text, lists } = context.state

  // console.log(this)
  return (
    <div>
      {/* <h1>text:{text}</h1>
      <List>
        {lists.map((item, i) => (
          <List.Item key={i}>{item}</List.Item>
        ))}
      </List> */}
    </div>
  )
}

export default Lists
