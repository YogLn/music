import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { RankingHeaderWrapper } from './style'

export default memo(function RankingHeader() {
  // redux hooks
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['ranking', 'playlist'])
    }),
    shallowEqual
  )
  // hooks

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={playList.topInfo.coverImgUrl} alt="" />
        <span className="image_cover"></span>
      </div>
      <div className="info"></div>
    </RankingHeaderWrapper>
  )
})
