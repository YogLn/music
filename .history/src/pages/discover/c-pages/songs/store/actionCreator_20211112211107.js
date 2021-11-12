import * as actionTypes from './constant'

import { getSongCategory, getSongCategoryList } from '@/services/songs'
import { handleSongsCategory } from '@/utils/handle-data'

const changeCategoryAction = (category) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY,
	category
})

const changeCategorySongsAction = categorySongs => ({
	type: actionTypes.CHANGE_CATEGORY_SONGS,
	categorySongs
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

export const getSongsListAction =  page => {
	return (dispatch, getState) => {
		const category = getState().getIn(['songs', 'currentCategory'])
		getSongCategoryList(category, page * 35).then(res => {
			dispatch(changeCategorySongsAction(res.playlists))
		})
	}
}