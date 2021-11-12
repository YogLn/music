import * as actionTypes from './constant'
import  { getSongDetail } from '@/services/player'

export const getCurrentSongAction = ids => {
	return dispatch => {
		getSongDetail(ids).then(res => {
			console.log(res)
		})
	}
}