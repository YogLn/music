import * as actionTypes from './constant'
import { getSongCategory } from '@/services/songs'

export const getSongCategoryAction = () => {
	return dispatch => {
		getSongCategory().then(res => {
			console.log(res)
		})
	}
}