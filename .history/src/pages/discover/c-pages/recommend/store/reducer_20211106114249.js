import * as actionTypes from './constant'
import { Map } from 'immutable'

const initialState = Map({
	topBanners: []
})

function reducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.CHANGE_TOP_BANNERS: 
			return state.set("topBanners", action.topBanners)
		default:
			return state
	}
}

export default reducer