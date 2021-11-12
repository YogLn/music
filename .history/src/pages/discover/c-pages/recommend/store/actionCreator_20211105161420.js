import * as actionTypes from './constant';

import { getTopBanners } from '@/services/recommend'

const changeBannerAction = (res) => ({
	type: actionTypes.CHANGE_TOP_BANNERS,
	res
})

export const getTopBannersAction = () => {
	return dispatch => {
		getTopBanners().then(res => {
			console.log(res)
			dispatch(changeBannerAction(res))
		})
	}
}