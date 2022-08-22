import { useLayoutEffect, useState } from 'react'

const useTitleHook = title => {
  const [state, setState] = useState()

  useLayoutEffect(() => {
    document.title = title
    setState(title)
    return () => {}
  }, [title])

  return state
}

export default useTitleHook
