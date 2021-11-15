import { Map } from 'immutable'
import * as actionTypes from './constant'

const initState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
})

function reducer(state = initState, action) {
  switch (action.type) {
		case actionTypes.CHANGE_HOT_ALBUMS:
			return state.set('hotAlbums', action.hotAlbums)
		case actionTypes.CHANGE_TOP_ALBUMS:
			return state.set('topAlbums', action.topAlbums)
		case actionTypes.CHANGE_TOP_TOTAL:
			return state.set('topTotal', action.topTotal)
    default:
      return state
  }
}

export default reducer
