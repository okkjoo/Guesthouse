import { Http } from '@/utils'
import { CommonEnum } from '@/enums'

export default {
  state: {
    detail: {},
    comments: [],
    page: CommonEnum.PAGE,
    showLoading: true,
    reloadCommentsNum: 0,
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload,
      }
    },
    getComments(state, payload) {
      return {
        ...state,
        comments: payload,
      }
    },
    setShowLoading(state, payload) {
      return {
        ...state,
        showLoading: payload,
      }
    },
    reloadComments(state, payload) {
      // console.log('reloadComments')
      return {
        ...state,
        reloadCommentsNum: state.reloadCommentsNum + 1,
        page: {
          ...CommonEnum.PAGE,
          pageNum: state.page.pageNum + 1,
        },
      }
    },
    resetData(state, payload) {
      return {
        ...state,
        // detail: {},
        comments: [],
        page: CommonEnum.PAGE,
        showLoading: true,
        reloadCommentsNum: 0,
        ...payload,
      }
    },
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/house/detail',
        body: payload,
      })
      dispatch({
        type: 'getDetail',
        payload: detail,
      })
    },
    async getCommentsAsync(dispatch, rootState, payload) {
      const { comments, page } = rootState.house
      let lists
      if (page.pageNum < 4) {
        lists = await Http({
          url: '/comment/lists',
          body: {
            ...payload,
            pageSize: page.pageSize,
            pageNum: page.pageNum,
          },
        })
      } else lists = []
      // console.log(lists)
      // const lists = [1, 1, 1]
      dispatch({
        type: 'getComments',
        payload: [...comments, ...lists], // 拼装数据
      })
      dispatch({
        type: 'setShowLoading',
        payload: lists.length ? true : false,
      })
    },
    async addCommentsAsync(dispatch, rootState, payload) {
      const res = await Http({
        url: '/comment/add',
        body: payload,
      })
      if (res) {
        dispatch({
          type: 'resetData',
          payload: {},
        })
      }
    },
  },
}
