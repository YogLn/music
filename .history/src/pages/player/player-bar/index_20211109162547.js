import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Slider } from 'antd'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import { getCurrentSongAction } from '../store/actionCreator'

export default memo(function PlayerBar() {
	
	// redux hooks
	const dispatch = useDispatch()
	const { currentSong } = useSelector(state => ({
		currentSong: state.getIn(['player', 'currentSong']),
	}), shallowEqual)
	// hooks
	useEffect(() => {
		dispatch(getCurrentSongAction(167876))
	}, [dispatch])

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play"></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src={getSizeImage()}
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">有何不可</span>
              <a href="#/" className="singer-name">
                许嵩
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={30} />
              <div className="time">
                <span className="now-time">2:30</span>
                <span className="divider">/</span>
                <span className="duration">4:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
					<div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})
