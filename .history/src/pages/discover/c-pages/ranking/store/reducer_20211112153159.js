import { Map } from 'immutable'
import * as actionTypes from './constant'

const initState = Map({
  topList: [],
	payList: {},
	currentIndex: 0,
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_TOP_LIST:
			return state.set('topList', action.topList)
		case actionTypes.CHANGE_CURRENT_INDEX:
			return state.set('currentIndex', action.currentIndex)
		case actionTypes.CHANGE_PAYLIST:
			return state.set('payList', action.payList)
		default:
			return state
	}
}
export default reducer