import * as actionTypes from './constant';

import { getTopBanners, getHotRecommend, getNewAlbum } from '@/services/recommend'

const changeBannerAction = (res) => ({
	type: actionTypes.CHANGE_TOP_BANNERS,
	topBanners: res.banners
})

const changeHotRecommendAction = res => ({
	type: actionTypes.CHANGE_HOT_RECOMMEND, 
	hotRecommend: res.result
})

const changeNewAlbumAction = res => ({
	type: actionTypes.CHANGE_NEW_ALB,
	 getNewAlbum: res.albums
})

export const getTopBannersAction = () => {
	return dispatch => {
		getTopBanners().then(res => {
			dispatch(changeBannerAction(res))
		})
	}
}

export const getHotRecommendAction = (limit) => {
	return dispatch => {
		getHotRecommend(limit).then(res => {
			dispatch(changeHotRecommendAction(res))
		})
	}
}

export const getNewAlbumAction = (limit) => {
	return dispatch => {
		getNewAlbum(limit).then(res => {
			console.log(res)
		})
	}
}