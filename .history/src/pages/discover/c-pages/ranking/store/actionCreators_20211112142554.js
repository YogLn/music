import * as actionTypes from './constant'
import { getTopList } from '@/services/ranking'

const changeTopListAction = topList => ({
	type: actionTypes.CHANGE_TOP_LIST,
	topList
})

export const getTopListAction = () => {
	return dispatch => {
		getTopList().then(res => {
			dispatch(changeTopListAction(res.list))
		})
	}
}