import * as actionTypes from './constant'

import { getDjRadioCateList, getDjRadioRecommend, getDjRadios } from '@/services/djradio'

const changeCategoriesAction = (categories) => ({
	type: actionTypes.CHANGE_CATEGORIES,
	categories
})

const changeRecommendsAction = (recommends) => ({
	type: actionTypes.CHANGE_RECOMMENDS,
	recommends
})

const changeRadiosAction = radios => ({
	type: actionTypes.CHANGE_RADIOS,
	radios
})

export const changeCurrentIdAction = currentId => ({
	type: actionTypes.CHANGE_CURRENT_ID,
	currentId
})

export const getRadioCategoriesAction = () => {
	return dispatch => {
		getDjRadioCateList().then(res => {
			dispatch(changeCategoriesAction(res.categories))
		})
	}
}

export const getDjRadioRecommendAction = (type) => {
	return dispatch => {
		getDjRadioRecommend(type).then(res => {
			dispatch(changeRecommendsAction(res.djRadios))
		})
	}
}

export const getDjRadiosAction = (currentId, offset) => {
	return dispatch => {
		getDjRadios(currentId, 30, offset).then(res => {
			dispatch(changeRadiosAction(res.djRadios))
		})
	}
}