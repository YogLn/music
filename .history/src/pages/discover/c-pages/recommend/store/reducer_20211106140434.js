import * as actionTypes from './constant'
import { Map } from 'immutable'

const initialState = Map({
	topBanners: [], 
	hotRecommend: []
})

function reducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.CHANGE_TOP_BANNERS: 
			return state.set("topBanners", action.topBanners)
		case actionTypes.CHANGE_TOP_BANNERS: 
			return state.set('hotRecommend',action.hotRecommend)
		default:
			return state
	}
}

export default reducer