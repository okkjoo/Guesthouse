import { useEffect } from 'react'

let observer = undefined

/**
 *
 * @param {待监听元素 DOM 选择器} selector
 * @param {监听元素的回调函数} callback
 * @param {Hook内部useEffect的依赖项} watch
 */
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
