import { Map } from 'immutable'
import * as actionTypes from './constant'

const initialState = Map({
	category: []
})

function reducer (state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_SONGS_CATEGORY:
			return state.set('category', action.category)
		default:
			return state 
	}
}
export default reducer