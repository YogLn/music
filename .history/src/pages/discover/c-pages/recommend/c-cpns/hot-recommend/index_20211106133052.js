import React, { memo } from 'react'

import ThemeHeader from '@/components/theme-header-rcm'

import { HotRecommendWrapper } from './style'
export default memo(function HotRecommend() {
	return (
		<HotRecommendWrapper>
			<ThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
		</HotRecommendWrapper>
	)
})
