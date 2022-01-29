import React, { useState } from 'react'
import SearchContext from './searchContext'
import Search from './search'
import Lists from './lists'
import LazyLoad from '@/components/LazyLoad'
const Index = () => {
  const [text, setText] = useState('')
  const [lists, setLists] = useState([])

  const handleDispatch = action => {
    switch (action.type) {
      case 'TEXT':
        return setText(action.payload)
      case 'LISTS':
        return setLists(action.payload)
      default:
        break
    }
  }
  return (
    <div>
      {/* 生产组件 ,其中的value 是可以自定义的*/}
      <SearchContext.Provider
        value={{
          text,
          setText,
          lists,
          setLists,
          dispatch: handleDispatch,
        }}
      >
        {/* 这里面的叫消费组件，订阅了provider里面的属性，
        如果里面的属性发生变化，那么该属性相关的消费组件就会被重新渲染 */}
        <Search />
        {/* <Lists /> */}
        <LazyLoad component={import('./lists')} />
      </SearchContext.Provider>
    </div>
  )
}

export default Index
