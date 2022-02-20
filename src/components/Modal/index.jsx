import React from 'react'
import CreateProtal from '../CreatePortal'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useEffect } from 'react'
import { useState } from 'react'
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
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
}

const Modal = props => {
  const { children, show, styleBody, styleClose, onClose } = props
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(show)
  }, [show])

  const handleClose = () => {
    setShowModal(false)
    onClose(false)
  }
  const _styleBody = {
    ...Styles.body,
    ...styleBody,
  }
  const _styleClose = {
    ...Styles.close,
    ...styleClose,
  }
  return (
    <>
      {showModal ? (
        <CreateProtal>
          <div style={_styleBody}>
            {children}
            <AiFillCloseCircle
              // type="cross"
              fontSize={20}
              style={_styleClose}
              onClick={handleClose}
            />
          </div>
        </CreateProtal>
      ) : null}
    </>
  )
}

export default Modal
