import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { RankingHeaderWrapper } from './style'

export default memo(function RankingHeader() {
  // redux hooks
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['ranking', 'playList'])
    }),
    shallowEqual
  )
  // hooks
  useEffect(() => {
    console.log(playList)
  }, [playList])
  return (
    <RankingHeaderWrapper>
      <div className="image">
        {/* <img src={playList.coverImgUrl} alt="" /> */}
        <span className="image_cover"></span>
      </div>
      <div className="info"></div>
    </RankingHeaderWrapper>
  )
})
