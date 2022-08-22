import { getLists } from '@/services/search'

export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [],
  },
  //同步
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        // lists: Array(10).fill(action.payload),
        lists: action.payload,
      }
    },
  },
  //异步
  effects: {
    //call 调用异步函数，puts：事件派发
    *getListsAsync({ payload }, { call, put }) {
      const res = yield call(getLists, payload)
      yield put({
        type: 'getLists',
        payload: res.lists,
      })
    },
  },
}
