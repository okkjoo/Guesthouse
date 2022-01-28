import React, { useState } from 'react'
import { SearchBar } from 'antd-mobile'
import SearchContext from './searchContext'

//该组件用来做搜索相关的功能

const Search = props => {
  const [value, setValue] = useState('')
  const handleChange = value => {
    setValue(value)
  }

  const context = SearchContext

  const handleSubmit = () => {
    context.dispatch({
      type: 'TEXT',
      payload: value,
    })
  }
  return (
    <div>
      <SearchBar
        autoFocus
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Search
