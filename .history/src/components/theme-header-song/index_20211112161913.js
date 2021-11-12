import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeader() {
  const { playList } = useSelector(staet => ({
    playList: state.getIn(['ranking', 'playList'])
  }))
  return (
    <HeaderWrapper>
      <div className="left">
				<h3>歌曲列表</h3>
				<div className="count">{playList.trackCount}</div>
			</div>
      <div className="right"></div>
    </HeaderWrapper>
  )
})
