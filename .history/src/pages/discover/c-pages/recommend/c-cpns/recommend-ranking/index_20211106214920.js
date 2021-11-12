import React, { memo } from 'react'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

import { RankingWrapper } from './style'

export default memo(function Ranking() {
	return (
		<RankingWrapper>
			<ThemeHeaderRCM title="榜单"/>
		</RankingWrapper>
	)
})
