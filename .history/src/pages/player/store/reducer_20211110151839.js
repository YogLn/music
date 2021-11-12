import { Map } from 'immutable'
import * as actionTypes from './constant'

const initState = Map({
	currentSong: {},
	playList: [],
	currentSongIndex: 0,
	sequence: 0, // 0 循环 1 随机 2 单曲
	lyricList: []
})
                                           
function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_CURRENT_SONG: 
			return state.set('currentSong', action.currentSong)
		case actionTypes.CHANGE_CURRENT_SONG_INDEX: 
			return state.set('currentSongIndex', action.index)
		case actionTypes.CHANGE_PLAYLIST:
			return state.set('playList', action.playList)
		default:
			return state
	}
}

export default reducer