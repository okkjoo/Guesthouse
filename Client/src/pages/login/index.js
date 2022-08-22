import React from 'react'
import { Form, Input, Button, Toast } from 'antd-mobile/es'
import { createForm } from 'rc-form'
import router from 'umi/router'
import { useStoreHook } from 'think-react-store'

import './index.less'

function Login(props) {
  const {
    user: { loginAsync },
  } = useStoreHook()
  const { getFieldProps, validateFields } = props.form
  const handleSubmit = () => {
    validateFields((err, val) => {
      if (err) {
        Toast.show({
          icon: 'fail',
          content: '请将信息填写完整',
        })
        return
      } else {
        loginAsync(val)
      }
    })
  }
  const handleClick = () => {
    router.push('./register')
  }
  return (
    <div className="login-page">
      <Form layout="horizontal">
        <Form.Header>用户登录</Form.Header>
        <Form.Item label="用户名" name="username">
          <Input
            placeholder="请输入用户名"
            clearable
            {...getFieldProps('username', {
              rules: [{ required: true }],
            })}
          />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input
            placeholder="请输入密码"
            clearable
            type="password"
            {...getFieldProps('password', {
              rules: [{ required: true }],
            })}
          />
        </Form.Item>
      </Form>
      <Button
        className="login-button"
        color="warning"
        onClick={handleSubmit}
      >
        登录
      </Button>
      <div className="register" onClick={handleClick}>
        还没有账号
      </div>
    </div>
  )
}

export default createForm()(Login)
