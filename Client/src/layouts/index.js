import { MenuBar } from '@/components'
import { useLocation } from 'react-router-dom'
import { StoreProvider } from 'think-react-store'
import * as store from '../stores'

function BasicLayout(props) {
  const location = useLocation()
  // console.log(location)
  const paths = ['/', '/order', '/user']
  // console.log(paths.includes(location.pathname))
  return (
    <StoreProvider store={store}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {props.children}
    </StoreProvider>
  )
}

export default BasicLayout
