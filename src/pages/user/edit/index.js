import React, { useState } from 'react'
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
  const [fileList, setFileList] = useState([])
  const { getFieldProps, validateFields } = props.form
  const {
    user: { editUserAsync },
  } = useStoreHook()

  const beforeUpload = file => {
    if (file[0]?.size > 1024 * 1024 * 1) {
      Toast.show('请选择小于 1M 的图片')
      return null
    }
    return file
  }

  const handleSubmit = () => {
    //这里感觉是antd有问题
    // if (!fileList.length) {
    //   Toast.show('请上传头像')
    //   return
    // }
    validateFields((err, val) => {
      console.log(fileList)
      if (err) {
        Toast.show('信息不能为空')
        return
      } else {
        // console.log(val)
        editUserAsync({
          img: fileList[0]?.file,
          tel: val.tel,
          sign: val.sign,
        })
      }
    })
  }
  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImageUploader
            value={fileList}
            maxCount={1}
            onChange={setFileList}
            beforeUpload={beforeUpload}
          />
        </List.Item>
        <List.Item>
          手机号:
          <Input
            {...getFieldProps('tel', {
              rules: [{ required: true }],
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
              initialValue: '这个人很懒，还没有签名',
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
