import React, { useState } from 'react'
import { Modal } from '@/components'
import { TextArea, Button, Toast } from 'antd-mobile/es'
import { useStoreHook } from 'think-react-store'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const [show, setShow] = useState(false)
  const {
    house: { addCommentsAsync, getCommentsAsync },
  } = useStoreHook()
  const { query } = useLocation()

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
    if (commentValue) {
      addCommentsAsync({
        commentValue,
        houseId: query?.id,
      })
      handleClose()
      getCommentsAsync({ id: query?.id })
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
