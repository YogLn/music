import * as actionTypes from './constant'
import  { getSongDetail } from '@/services/player'

const changeCurrentSongAction = (res) => ({
	type: actionTypes.CHANGE_CURRENT_SONG, 
	currentSong: res.songs[0]
})

export const getCurrentSongAction = ids => {
	return dispatch => {
		getSongDetail(ids).then(res => {
			dispatch(changeCurrentSongAction(res))
		})
	}
}