import * as actionTypes from './constant'
import { getArtistList } from '@/services/artist'

export const changeCurrentAreaAction = (currentArea) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea
});

export const changeCurrentTypeAction = (currentType) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType
});

export const getArtistListAction =  () => {
	return dispatch => {
		getArtistList().then(res => {
			console.log(res)
		})
	}
}