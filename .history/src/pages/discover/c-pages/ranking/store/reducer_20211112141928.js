import { Map } from 'immutable'
import * as actionTypes from './constant'

const initState = Map({
  topList: []
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_TOP_LIST:
			return state.set('topList', action.topList)
		default:
			return state
	}
}
export default reducer