import * as actionTypes from './constant'
import { getSongDetail } from '@/services/player'

const changeCurrentSongAction = currentSong => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const getCurrentSongAction = ids => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}

export const getSongDetailAction = ids => {
	return (dispatch, getState) => {
		
	}
}