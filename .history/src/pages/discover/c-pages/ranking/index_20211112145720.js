import React, { memo } from 'react'

import { RankingWrapper, RankingLeft, RankingRight } from './style'
import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'

export default memo(function Ranking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <RankingHeader />
      </RankingRight>
    </RankingWrapper>
  )
})
