import React, { memo, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { getSongDetailAction } from '../../../store/actionCreator'
import { PlayListWrapper } from './style'
import { formatMinuteSecond, getAllArtist } from '@/utils/format-utils'

export default memo(function PlayList() {
  const dispatch = useDispatch()

  const { playList, currentSongIndex } = useSelector(
    state => ({
      playList: state.getIn(['player', 'playList']),
			currentSongIndex: state.getIn(['player', 'currentSongIndex'])
    }),
    shallowEqual
  )
  const playMusic = useCallback((item) => {
    dispatch(getSongDetailAction(item.id))
  })
  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div key={item.id} className={classNames("play-item", {"active": currentSongIndex === index})}>
            <div className="left" onClick={e => playMusic(item)}>{item.name}</div>
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
