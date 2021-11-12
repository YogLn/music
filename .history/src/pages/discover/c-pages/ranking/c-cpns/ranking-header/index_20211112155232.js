import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { RankingHeaderWrapper } from './style'
import { getSizeImage, formatMonthDay } from '@/utils/format-utils'
import SongOperation from '@/components/song-operation-bar'

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
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{'每日更新:TODO'}）</div>
        </div>
        <SongOperation
          favorTitle={`(${playList.subscribedCount})`}
          shareTitle={`(${playList.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${playList.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
})
