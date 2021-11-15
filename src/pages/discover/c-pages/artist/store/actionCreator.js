import * as actionTypes from './constant'
import { getArtistList } from '@/services/artist'

const changeArtistListAction = artistList => ({
	type: actionTypes.CHANGE_ARTIST_LIST,
	artistList
})

export const changeCurrentAreaAction = (currentArea) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea
});

export const changeCurrentTypeAction = (currentType) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType
});

export const getArtistListAction =  (area, type, alpha) => {
	return dispatch => {
		getArtistList(area, type, alpha).then(res => {
			dispatch(changeArtistListAction(res.artists))
		})
	}
}