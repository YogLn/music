import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { InfoWrapper, InfoLeft, InfoRight } from './style'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function PlayInfo() {
  // state
  const [isSpread, setIsSpread] = useState(false)
  // redux hooks
  const { currentSong, currentLyrics } = useSelector(
    state => ({
      currentSong: state.getIn(['player', 'currentSong']),
      currentLyrics: state.getIn(['player', 'currentLyrics'])
    }),
    shallowEqual
  )
  // handle code
  const totalLyricCount = isSpread ? currentLyrics.length : 13

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
      <InfoRight>
        <div className="header">
          <i className="sprite_icon2"></i>
          <div className="title">{currentSong.title}</div>
        </div>
        <div className="singer">
          <span>歌手: </span>
          <a href="/#" className="name">
            {currentSong.ar[0].name}
          </a>
        </div>
        <div className="album">
          <span>所属专辑: </span>
          <a href="/#" className="name">
            {currentSong.al.name}
          </a>
        </div>

        {/* 收藏栏 */}

        <div className="lyric">
          <div className="lyric-info">
            {currentLyrics.slice(0, totalLyricCount).map(item => {
              return (
                <p key={item.title} className="title">
                  {item.content}
                </p>
              )
            })}
          </div>
          <button
            className="btn btnlyric-control"
            onClick={e => setIsSpread(!isSpread)}
          >
            {isSpread ? '收起' : '展开'}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
