import React, { useState, useEffect } from 'react'
import {
  List,
  ImageUploader,
  Toast,
  Input,
  Button,
} from 'antd-mobile/es'
import { createForm } from 'rc-form'
import { useStoreHook } from 'think-react-store'

function Edit(props) {
  const { getFieldProps, validateFields } = props.form

  const {
    user: { editUserAsync, getUserAsync, avatar, phone, sign },
  } = useStoreHook()

  const [fileList, setFileList] = useState([{ url: avatar }])

  const beforeUpload = file => {
    if (file[0]?.size > 1024 * 1024 * 1) {
      Toast.show('请选择小于 1M 的图片')
      return null
    }
    return file
  }

  const handleUpload = async file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve({
          url: reader.result,
        })
      }
    })
  }

  const handleSubmit = () => {
    //这里感觉是antd有问题
    // if (!fileList.length) {
    //   Toast.show('请上传头像')
    //   return
    // }
    validateFields((err, val) => {
      // console.log(fileList)
      if (err) {
        Toast.show('信息不能为空')
        return
      } else {
        editUserAsync({
          avatar: fileList[0]?.url || null,
          phone: val.tel,
          sign: val.sign,
        })
      }
    })
  }

  useEffect(() => {
    getUserAsync({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImageUploader
            value={fileList}
            maxCount={1}
            onChange={setFileList}
            beforeUpload={beforeUpload}
            upload={handleUpload}
          />
        </List.Item>
        <List.Item>
          手机号:
          <Input
            {...getFieldProps('tel', {
              rules: [{ required: true }],
              initialValue: phone,
            })}
            placeholder="请输入手机号"
            clearable
          />
        </List.Item>
        <List.Item>
          简介:
          <Input
            {...getFieldProps('sign', {
              rules: [{ require: true }],
              initialValue: sign,
            })}
            placeholder="用一句话介绍自己吧~"
            clearable
          />
        </List.Item>
      </List>
      <Button
        onClick={handleSubmit}
        color="warning"
        style={{ marginTop: '20px', width: '100%' }}
      >
        修改
      </Button>
    </div>
  )
}

export default createForm()(Edit)
