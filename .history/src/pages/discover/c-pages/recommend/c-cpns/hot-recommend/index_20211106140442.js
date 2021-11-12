import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import ThemeHeader from '@/components/theme-header-rcm'

import { HotRecommendWrapper } from './style'
export default memo(function HotRecommend() {

	// redux hooks
	// useSelector(state => ({
	// 	hotRecommends: 
	// }), shallowEqual)
	const dispatch = useDispatch()

	// hooks
	// useEffect(() => {
		
	// }, [dispatch])
	return (
		<HotRecommendWrapper>
			<ThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
		</HotRecommendWrapper>
	)
})
