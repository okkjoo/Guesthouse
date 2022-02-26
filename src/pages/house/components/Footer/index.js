import React, { useState } from 'react'
import { Modal } from '@/components'
import { TextArea, Button, Toast } from 'antd-mobile/es'
import { useStoreHook } from 'think-react-store'

const Footer = () => {
  // console.log('aaa')
  const [show, setShow] = useState(false)
  // const [commentValue, setCommentValue] = useState('')
  const {
    house: { addCommentsAsync, getCommentsAsync },
  } = useStoreHook()

  const handleClick = () => {
    setShow(!show)
    console.log(show)
  }

  const handleClose = () => {
    setShow(false)
  }

  // const handleChange = value => {
  //   // setCommentValue(value)
  // }
  const handleSubmit = () => {
    const commentValue = document.querySelector('textarea').value
    console.log(commentValue)
    if (commentValue) {
      addCommentsAsync({
        commentValue,
      })
      handleClose()
      getCommentsAsync({})
    } else {
      Toast.show({
        icon: 'fail',
        content: '请输入非空的评论内容~',
      })
    }
  }
  return (
    <>
      <div className="footer" onClick={handleClick}>
        评论~
      </div>
      <Modal
        show={show}
        styleBody={{
          borderRadius: '15px 15px 0 0 ',
          borderTop: '1px solid rgb(217, 216, 219)',
          height: '200px',
          bottom: '0px',
          top: 'unset',
        }}
        onClose={handleClose}
      >
        <div className="modal-comment">
          <TextArea
            className="text-area"
            rows={3}
            maxLength={200}
            showCount
            // onChange={val => setCommentValue(val)}
            // value={commentValue}
          />
          <Button
            onClick={handleSubmit}
            className="modal-comment-btn"
            color="warning"
          >
            评 论
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default Footer
