import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const CreatePortal = props => {
  const { children } = props

  const body = document.querySelector('body')
  const el = document.createElement('div')

  useEffect(() => {
    el.setAttribute('id', 'portal-root')
    body.appendChild(el)
    return () => {
      body.removeChild(el)
    }
  }, [body, el])
  return ReactDOM.createPortal(children, el)
}

export default CreatePortal
