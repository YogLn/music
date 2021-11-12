import React, { memo, useEffect } from 'react'
import { getTopBanners } from '@/services/recommend'

export default memo(function Recommend() {

	const topBanners = useSelector(state => state.recommend.topBanners)

	useEffect(() => {
		getTopBanners().then(res => {
			console.log(res)
		})
	})

	return (
		<div>
			Recommend
		</div>
	)
})
