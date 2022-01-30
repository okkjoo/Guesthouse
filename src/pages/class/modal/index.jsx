import React, { useState } from 'react'
// import CreateProtal from '@/components/CreatePortal'
import Modal from '../../../components/Modal'
import { Button } from 'antd-mobile'

const Index = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        modal
      </Button>
      <Modal show={show} onClose={handleClose}>
        modal
      </Modal>
    </div>
  )
}

export default Index
