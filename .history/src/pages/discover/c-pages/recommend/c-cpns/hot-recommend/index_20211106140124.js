import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import ThemeHeader from '@/components/theme-header-rcm'

import { HotRecommendWrapper } from './style'
export default memo(function HotRecommend() {

	// redux hooks
	useSelector
	return (
		<HotRecommendWrapper>
			<ThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
		</HotRecommendWrapper>
	)
})
