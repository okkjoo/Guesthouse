import { useEffect } from 'react'
import { isEmpty } from '@/utils'

/**
 *
 * @param {DOM元素} ele
 * @param {function} callback 回调函数
 * @param {数组} watch 监听项
 * @returns
 */

let observer
const useImgHook = (ele, callback, watch = []) => {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele)
    if (!isEmpty(nodes)) {
      observer = new IntersectionObserver(entries => {
        callback && callback(entries)
        entries.forEach(item => {
          // console.log(item)
          if (item.isIntersecting) {
            const itemTarget = item.target
            const dataSrc = itemTarget.getAttribute('data-src')
            // console.log(dataSrc)
            itemTarget.setAttribute('src', dataSrc)
            observer.unobserve(itemTarget)
          }
        })
      })
      nodes.forEach(item => {
        observer.observe(item)
      })
    }
    return () => {
      if (!isEmpty(nodes) && observer) {
        observer.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch)
}

export default useImgHook
