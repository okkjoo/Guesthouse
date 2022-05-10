import React from 'react'
import { Form, Input, Button, Toast } from 'antd-mobile/es'
import { createForm } from 'rc-form'
import router from 'umi/router'
import { useStoreHook, value } from 'think-react-store'

import './index.less'

function Register(props) {
  const {
    user: { registerAsync },
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
        if (val.password !== val.password2) {
          Toast.show({
            icon: 'fail',
            content: '密码不一致',
          })
          return
        }
        registerAsync(val)
      }
    })
  }
  const handleClick = () => {
    router.push('./login')
  }
  return (
    <div className="register-page">
      <Form layout="horizontal">
        <Form.Header>用户注册</Form.Header>
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
        <Form.Item label="确认密码" name="password2">
          <Input
            placeholder="请输入密码"
            clearable
            type="password"
            {...getFieldProps('password2', {
              rules: [{ required: true }],
            })}
          />
        </Form.Item>
      </Form>
      <Button
        className="register-button"
        color="warning"
        onClick={handleSubmit}
      >
        注册
      </Button>
      <div className="login" onClick={handleClick}>
        已有账户
      </div>
    </div>
  )
}

export default createForm()(Register)
