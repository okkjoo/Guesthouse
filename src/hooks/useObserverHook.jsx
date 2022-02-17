import { useEffect } from 'react'

let observer = undefined

// 传入要监听的DOM元素 ele, 监听元素的回调函数 callback, useEffect 的依赖项
export default function useObserverHook(
  selector,
  callback,
  watch = [],
) {
  useEffect(() => {
    observer = new IntersectionObserver(entries => {
      callback && callback(entries)
    })
    const listened = document.querySelector(selector)
    observer.observe(listened)

    return () => {
      if (observer) return
      observer.unobserve(selector)
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch)
}
