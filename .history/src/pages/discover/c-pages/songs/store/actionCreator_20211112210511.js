import * as actionTypes from './constant'

import { getSongCategory, getSongCategoryList } from '@/services/songs'
import { handleSongsCategory } from '@/utils/handle-data'

const changeCategoryAction = (category) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY,
	category
})

export const changeCurrentCategoryAction = currentCategory => ({
	type: actionTypes.CHANGE_CURRENT_CATEGORY,
	currentCategory
})

export const getSongCategoryAction = () => {
	return dispatch => {
		getSongCategory().then(res => {
			const categoryData = handleSongsCategory(res)
			dispatch(changeCategoryAction(categoryData))
		})
	}
}

export const getSongListAction =  page => {
	return (dispatch, getState) => {
		const category = getState().getIn(['songs', 'currentCategory'])
		getSongCategoryList(category, page * 35).then(res => {
			console.log(res)
		})
	}
}