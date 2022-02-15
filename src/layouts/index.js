import { ErrorBoundary, MenuBar } from '@/components'
import { useLocation } from 'react-router-dom'

function BasicLayout(props) {
  const location = useLocation()
  // console.log(location)
  const paths = ['/', '/order', '/user']
  // console.log(paths.includes(location.pathname))
  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  )
}

export default BasicLayout
