import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { RankingListWrapper } from './style'
import ThemeHeader from '@/components/theme-header-song'

import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils'

export default memo(function RankingList() {
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['ranking', 'playList'])
    }),
    shallowEqual
  )
  const tracks = state.playList.tracks || []

  return (
    <RankingListWrapper>
      <ThemeHeader />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})
