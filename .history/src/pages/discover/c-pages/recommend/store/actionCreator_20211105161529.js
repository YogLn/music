import * as actionTypes from './constant';

import { getTopBanners } from '@/services/recommend'

const changeBannerAction = (res) => ({
	type: actionTypes.CHANGE_TOP_BANNERS,
	topBanners: res.banners
})

export const getTopBannersAction = () => {
	return dispatch => {
		getTopBanners().then(res => {
			dispatch(changeBannerAction(res))
		})
	}
}