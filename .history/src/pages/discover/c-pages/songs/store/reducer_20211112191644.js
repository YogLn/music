import { Map } from 'immutable'
import * as actionTypes from './constant'

const initialState = Map({
	category: [],
	currentCategory: '全部'
})

function reducer (state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_SONGS_CATEGORY:
			return state.set('category', action.category)
		case actionTypes.CHANGE_CURRENT_CATEGORY:
		 return state.set('currentCategory', action.currentCategory)
		default:
			return state 
	}
}
export default reducer