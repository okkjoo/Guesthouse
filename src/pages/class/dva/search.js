import React, { useState } from 'react'
import { SearchBar } from 'antd-mobile'

//该组件用来做搜索相关的功能

const Search = props => {
  const [value, setValue] = useState('')
  const handleChange = value => {
    setValue(value)
  }
  // const handleSubmit = () => {
  //   console.log('props', value)
  //   props.dispatch({
  //     type: 'search/getLists',
  //     payload: value,
  //   })
  // }
  const handleSubmit = () => {
    console.log('handleSubmit props', value)
    props.dispatch({
      type: 'search/getListsAsync',
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
