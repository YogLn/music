import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getDjRadioRecommendAction } from '../../store/actionCreator'

import { RecommendWrapper } from './style'
import ThemeHeader from '@/components/theme-header-normal'
import RadioRecommendCover from '@/components/radio-recommend-cover'

export default memo(function RadioRecommend() {
  // redux hooks
  const dispatch = useDispatch()
  const { currentId, recommends } = useSelector(
    state => ({
      currentId: state.getIn(['djradio', 'currentId']),
      recommends: state.getIn(['djradio', 'recommends'])
    }),
    shallowEqual
  )

  // hooks
  useEffect(() => {
    dispatch(getDjRadioRecommendAction(currentId))
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <ThemeHeader title="优秀新电台" />
      <div className="radio-list">
        {recommends.slice(0, 5).map(item => {
          return <RadioRecommendCover info={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
})
