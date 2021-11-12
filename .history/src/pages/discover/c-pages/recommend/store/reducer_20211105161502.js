import * as actionTypes from './constant'

const initialState = {
	topBanners: []
}

function reducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.CHANGE_TOP_BANNERS: 
			return {...state, topBanners: action.topBanners}
		default:
			return state
	}
}

export default reducer