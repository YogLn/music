import React, { memo, useEffect } from 'react'
import { getTopBanners } from '@/services/recommend'

export default memo(function Recommend() {
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
