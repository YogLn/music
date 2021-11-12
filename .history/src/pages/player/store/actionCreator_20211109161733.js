import * as actionTypes from './constant'
import  { getSongDetail } from '@/services/player'

export const getCurrentSongAction = ids => {
	return dispatch => {
		getSongDetail(idx).then(res => {
			console.log(res)
		})
	}
}