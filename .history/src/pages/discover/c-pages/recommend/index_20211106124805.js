import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'

import { RecommendWrapper } from './style'
export default memo(function Recommend() {

	return (
		<RecommendWrapper>
			<TopBanner />
		</RecommendWrapper>
	)
})




