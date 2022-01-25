import React from 'react'
import Search from './search'
import Lists from './lists'
import { connect } from 'dva'

const Dva = props => {
  return (
    <div>
      <Search {...props} />
      <Lists {...props} />
    </div>
  )
}

export default connect(({ search }) => ({
  search,
}))(Dva)
