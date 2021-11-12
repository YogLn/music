import React, { memo } from 'react'

import { RankingListWrapper } from './style'
import ThemeHeader from '@/components/theme-header-song'
export default memo(function RankingList() {
	return (
		<RankingListWrapper>
			<ThemeHeader />
		</RankingListWrapper>
	)
})
