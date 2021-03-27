import React, { memo, useEffect } from 'react'
import ThemeHeader from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'
import TopRanking from '@/components/top-ranking'

export default memo(function RecRangking () {
  // redux-hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }), shallowEqual)
  const dispatch = useDispatch()
  // other-hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeader title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
