import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false,
    }
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error)
    return {
      flag: true,
    }
  }

  /* error: 抛出的错误
   * info: 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息
    在这其中做日志相关的操作，因为其返回的信息会相对来说比较全面一点
   */
  componentDidCatch(error, info) {}
  render() {
    return (
      <div>
        {this.state.flag ? (
          <h1>发生了未料到的错误，请稍微再刷新试试</h1>
        ) : (
          this.props.children
        )}
      </div>
    )
  }
}
