import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannersAction } from './store/actionCreator'

export default memo(function Recommend() {

	const topBanners = useSelector(state => state.recommend.topBanners)
	const dispatch = useDispatch(() => {

	}, shallowEqual)

	useEffect(() => {
		dispatch(getTopBannersAction)
	})

	return (
		<div>
			Recommend
		</div>
	)
})
