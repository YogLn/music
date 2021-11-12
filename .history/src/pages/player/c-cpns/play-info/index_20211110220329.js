import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { InfoWrapper, InfoLeft, InfoRight } from './style'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function PlayInfo() {
  // state

  // redux hooks
  const { currentSong, currentLyrics } = useSelector(
    state => ({
      currentSong: state.getIn(['player', 'currentSong']),
      currentLyrics: state.getIn(['player', 'currentLyrics'])
    }),
    shallowEqual
  )
  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al.picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight></InfoRight>
    </InfoWrapper>
  )
})
