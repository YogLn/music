import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PlayListWrapper } from './style'
import { formatMinuteSecond, getAllArtist } from '@/utils/format-utils';

export default memo(function PlayList() {
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['player', 'playList'])
    }),
    shallowEqual
  )
  return (
    <PlayListWrapper>
      {playList.map(item => {
        return (
          <div key={item.id}>
            <div className="left">{item.name}</div>
            <div className="right">
							<span className="singer">{getAllArtist(item.ar)}</span>
							<span className="duration">{formatMinuteSecond(item.dt)}</span>
							<span className="sprite_playlist link"></span>
						</div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
})
