import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { RankingHeaderWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function RankingHeader() {
  // redux hooks
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['ranking', 'playList'])
    }),
    shallowEqual
  )
  // hooks

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={getSizeImage(playList.coverImgUrl, 150)} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info"></div>
    </RankingHeaderWrapper>
  )
})
