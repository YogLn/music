import { Map } from 'immutable'
import * as actionTypes from './constant'

const initState = Map({
	categories: [],
	currentId: 3,
	recommends: [],
	radios: []
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_CATEGORIES:
			return state.set('categories', action.categories)
		case actionTypes.CHANGE_CURRENT_ID:
			return state.set('currentId', action.currentId)
		case actionTypes.CHANGE_RECOMMENDS:
			return state.set('recommends', action.recommends)
		case actionTypes.CHANGE_RADIOS:
			return state.set('radios', action.radios)
		default:
			return state
	}
}

export default reducer

