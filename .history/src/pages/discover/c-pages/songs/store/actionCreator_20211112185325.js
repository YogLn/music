import * as actionTypes from './constant'
import { getSongCategory } from '@/services'

export const getSongCategory = () => {
	return dispatch => {
		getSongCategory().then(res => {
			console.log(res)
		})
	}
}