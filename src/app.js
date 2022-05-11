import { cookie } from './utils'
import router from 'umi/router'

export function onRouteChange(route) {
  // console.log(route)
  const nowPath = route.routes[0].routes.filter(
    item => item.path === route.location.pathname,
  )
  const isLogin = cookie.get('user')

  if (nowPath.length === 1 && nowPath[0].auth && !isLogin) {
    router.push({
      pathname: '/login',
      query: {
        from: route.location.pathname,
      },
    })
  }
}
