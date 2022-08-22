import React from 'react'
import { SpinLoading } from 'antd-mobile/es'
import PropTypes from 'prop-types'

import './index.less'

export default function ShowLoading(props) {
  return (
    <div>
      {props.showLoading ? (
        <div id={props.id} className="loading-info">
          <SpinLoading color="primary" />
        </div>
      ) : (
        <div className="loading-info">已经到底部了~</div>
      )}
    </div>
  )
}

ShowLoading.defaultProps = {
  showLoading: true,
  id: 'zhou-loading',
}

ShowLoading.propTypes = {
  showLoading: PropTypes.bool,
  id: PropTypes.string,
}
