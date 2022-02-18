import { useState, useEffect } from 'react'
import { Toast } from 'antd-mobile/es'

const useHttpHook = ({
  url, //请求路径
  method = 'post', //请求方式
  headers, //请求头
  body = {}, //请求体
  watch = [], //useEffect 依赖项
}) => {
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)

  async function Http() {
    setLoading(true)
    const defaultHeader = {
      'Content-Type': 'application/json',
    }

    let params
    if (method.toUpperCase() === 'GET') {
      params = undefined
    } else {
      params = {
        headers: {
          ...defaultHeader,
          headers,
        },
        method,
        body: JSON.stringify(body),
      }
    }
    // 节流
    let mark = true
    mark &&
      setTimeout(() => {
        return new Promise((resolve, reject) => {
          fetch('/api' + url, params)
            .then(res => res.json())
            .then(res => {
              if (res.status === 200) {
                resolve(res.data)
                setResult(res.data)
              } else {
                Toast.show({
                  icon: 'fail',
                  content: res.errMsg,
                })
                reject(res.errMsg)
              }
            })
            .catch(err => {
              Toast.show({
                icon: 'fail',
                content: err,
              })
              reject(err)
            })
            .finally(() => {
              setLoading(false)
            })
        })
      }, 100)
    mark = false
  }

  useEffect(() => {
    Http()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch)

  return [result, loading]
}

export default useHttpHook
