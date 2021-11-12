import { Map } from 'immutable'
import * as actionTypes from './constant'

const initState = Map({
	currentSong: {}
})

function reducer(state, action) {
	switch (action.type) {
		case actionTypes.CHANGE_CURRENT_SONG: 
			return state.set('currentSong', action.currentSong)
		default:
			return state
	}
}

export default reducer