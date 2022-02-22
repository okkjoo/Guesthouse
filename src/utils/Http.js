import { Toast } from 'antd-mobile/es'

export default function Http({
  url, //请求路径
  method = 'post', //请求方式
  headers, //请求头
  body = {}, //请求体)
  setLoading,
  setResult,
}) {
  setLoading && setLoading(true)
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

  return new Promise((resolve, reject) => {
    fetch('/api' + url, params)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
          setResult && setResult(res.data)
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
        setLoading && setLoading(false)
      })
  })
}
