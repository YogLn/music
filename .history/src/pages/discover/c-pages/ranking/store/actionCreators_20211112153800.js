import * as actionTypes from './constant'
import { getTopList, getRankingList } from '@/services/ranking'

const changeTopListAction = topList => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList
})

const changePayListAction = playList => ({
  type: actionTypes.CHANGE_PLAYLIST,
  playList
})

export const changeCurrentIndexAction = currentIndex => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex
})

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res.list))
    })
  }
}

export const getRankingListAction = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      dispatch(changePayListAction(res.paylist))
    })
  }
}

