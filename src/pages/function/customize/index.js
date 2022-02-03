import React, { useState } from 'react'
import { useTitleHook, useHttpHook } from '@/hooks'
import { Toast, Button } from 'antd-mobile'

export default function(props) {
  const [state, setState] = useState('customize')
  const title = useTitleHook(state)

  const handleClick = () => {
    setState('change')
  }
  const [listResult, loading] = useHttpHook({
    url: '/getListsAsync',
    method: 'get',
    watch: [state],
  })
  // console.log('List:', listResult)
  // console.log('loading:', loading)

  const errorToast = () => {
    Toast.show({
      icon: 'fail',
      content: '名称已存在',
    })
    // Toast.show('成功')
  }

  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
      <Button type="primary" onClick={errorToast}>
        aa
      </Button>
      <Button
        onClick={() =>
          Toast.show({
            content: 'Hello World',
            afterClose: () => {
              console.log('after')
            },
          })
        }
      >
        失败
      </Button>
    </div>
  )
}
