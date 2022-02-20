import React, { useState } from 'react'
import { Modal } from '@/components'
import { TextArea, Button } from 'antd-mobile/es'

const Footer = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
    console.log(show)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleChange = value => {}
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
            onChange={handleChange}
          />
          <Button className="modal-comment-btn" color="warning">
            评 论
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default Footer
