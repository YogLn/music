import * as actionTypes from './constant'
import { getTopList } from '@/services/ranking'

export const getTopListAction = () => {
	return dispatch => {
		getTopList().then(res => {
			console.log(res)
		})
	}
}