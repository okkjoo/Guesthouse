import { useState, useEffect } from 'react'
import { Http } from '@/utils'

const useHttpHook = ({
  url, //请求路径
  method = 'post', //请求方式
  headers, //请求头
  body = {}, //请求体
  watch = [], //useEffect 依赖项
}) => {
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Http({
      url, //请求路径
      method, //请求方式
      headers, //请求头
      body, //请求体
      setResult,
      setLoading,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watch)

  return [result, loading]
}

export default useHttpHook
