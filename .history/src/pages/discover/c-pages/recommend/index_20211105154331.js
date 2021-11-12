import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannersAction } from './store/actionCreator'

export default memo(function Recommend() {

	const topBanners = useSelector(state => state.recommend.topBanners)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTopBannersAction())
	}, [dispatch])

	return (
		<div>
			Recommend
		</div>
	)
})
