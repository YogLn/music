import * as actionTypes from './constant'
import { Map } from 'immutable'

const initialState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSings: []
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)

    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)

    case actionTypes.CHANGE_SETTLE_SiNGER:
      return state.set('settleSings', action.settleSings)
    default:
      return state
  }
}

export default reducer
