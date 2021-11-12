import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommend'

const changeBannerAction = () => {
	return 
}

export const getTopBannersAction = () => {
	return dispatch => {
		getTopBanners().then(res => {
			console.log(res)
		})
	}
}