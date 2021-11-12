import * as actionTypes from './constant'
import { getSongCategory } from '@/services/songs'

import { handleSongsCategory } from '@/utils/handle-data'

export const getSongCategoryAction = () => {
	return dispatch => {
		getSongCategory().then(res => {
			console.log(res)

			handleSongsCategory(res)
		})
	}
}