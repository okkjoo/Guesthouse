import { useEffect } from 'react'

let observer = undefined

// 传入要监听的DOM元素 ele, 监听元素的回调函数 callback, useEffect 的依赖项
export default function useObserverHook(
  selector,
  callback,
  watch = [],
) {
  useEffect(() => {
    const listenedNode = document.querySelector(selector)
    if (listenedNode) {
      observer = new IntersectionObserver(entries => {
        typeof callback === 'function' && callback(entries)
      })
      observer.observe(listenedNode)
      // console.log('in???')
    }

    return () => {
      if (observer && listenedNode) {
        observer.unobserve(listenedNode)
        observer.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch)
}
