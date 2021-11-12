import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannersAction } from './store/actionCreator'

export default memo(function Recommend() {

	// const { topBanners } = useSelector(state => ({
	// 	topBanners: state.recommend.topBanners
	// }), shallowEqual)
	const dispatch = useDispatch()

	return (
		<div>
			Recommend
		</div>
	)
})
