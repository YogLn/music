import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTopListAction } from './store/actionCreators'

import { RankingWrapper, RankingLeft, RankingRight } from './style'
import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'

export default memo(function Ranking() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <RankingHeader />
        <RankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
