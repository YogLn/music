import React, { memo } from 'react'

import { RankingWrapper, RankingLeft, RankingRight } from './style'
import TopRanking from './c-cpns/top-ranking'

export default memo(function Ranking() {
	return (
		<RankingWrapper className="wrap-v2">
			<RankingLeft>
				<TopRanking/>
			</RankingLeft>
			<RankingRight>

			</RankingRight>
		</RankingWrapper>
	)
})
