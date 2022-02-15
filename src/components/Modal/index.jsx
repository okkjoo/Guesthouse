import React from 'react'
import CreateProtal from '../CreatePortal'
import { Icon } from 'antd-mobile/es'
const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'fixed',
    top: '10px',
    right: '10px',
  },
}

const Modal = props => {
  const { children, show } = props

  const handleClose = () => {
    const { onClose } = props
    onClose && onClose()
  }
  return (
    <>
      {show ? (
        <CreateProtal style={Styles.modal}>
          <div style={Styles.body}>
            {children}
            <Icon
              type="cross"
              size="lg"
              style={Styles.close}
              onClick={handleClose}
            />
          </div>
        </CreateProtal>
      ) : null}
    </>
  )
}

export default Modal
