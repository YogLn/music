import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'

export default memo(function SongsCover(props) {
  const { info } = props
  const { right } = props

  const picUrl = info.picUrl ? info.picUrl : info.coverImgUrl
  return (
    <SongsCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage(picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info?.copywriter || info?.creator?.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
