import * as actionTypes from './constant'
import { getSongCategory } from '@/services/songs'

import { handleSongsCategory } from '@/utils/handle-data'

const changeCategoryAction = (category) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY,
	category
})

export const getSongCategoryAction = () => {
	return dispatch => {
		getSongCategory().then(res => {
			const categoryData = handleSongsCategory(res)
			dispatch(changeCategoryAction(categoryData))
		})
	}
}