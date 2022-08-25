import { Http, urlGet } from '@/utils'
import { Toast } from 'antd-mobile/es'
import router from 'umi/router'

export default {
  state: {
    id: undefined,
    username: undefined,
    avatar: undefined,
    phone: undefined,
    sign: undefined,
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...payload,
      }
    },
    editUser(state, payload) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    async getUserAsync(dispatch, rootState, payload) {
      const user = await Http({
        url: '/user/detail',
        body: payload,
      })
      if (user) {
        dispatch({
          type: 'getUser',
          payload: user,
        })
      }
    },

    async editUserAsync(dispatch, rootState, payload) {
      const res = await Http({
        url: '/user/edit',
        body: payload,
      })
      // console.log(payload)
      if (res) {
        Toast.show({
          icon: 'success',
          content: '编辑成功',
        })
        dispatch({
          type: 'editUser',
          payload: res,
        })
        router.push('/user')
      }
    },

    async loginAsync(dispatch, rootState, payload) {
      const res = await Http({
        url: '/user/login',
        body: payload,
      })
      if (res) {
        urlGet('from') && router.push(urlGet('from'))
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.username)
        Toast.show('登录成功')
      }
    },

    async registerAsync(dispatch, rootState, payload) {
      const res = await Http({
        url: '/user/register',
        body: payload,
      })
      if (res) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.username)
        Toast.show('注册成功')
      }
    },

    async logoutAsync(dispatch, rootState, payload) {
      await Http({
        url: '/user/logout',
        body: payload,
      })
      Toast.show('已退出登录')
      localStorage.clear()
      // eslint-disable-next-line no-restricted-globals
      location.href = '/login?from=' + location.pathname
    },
  },
}
