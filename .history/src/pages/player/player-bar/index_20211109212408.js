import React, { memo, useEffect, useState, useRef, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Slider } from 'antd'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import { getCurrentSongAction } from '../store/actionCreator'

export default memo(function PlayerBar() {
	// state
	const [currentTime, setCurrentTime] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isChange, setIsChange] = useState(false)
	const audioRef = useRef()
	
	// redux hooks
	const dispatch = useDispatch()

	const { currentSong } = useSelector(state => ({
		currentSong: state.getIn(['player', 'currentSong']),
	}), shallowEqual)
	// hooks
	useEffect(() => {
		dispatch(getCurrentSongAction(167876))
	}, [dispatch])

	useEffect(() => {
		audioRef.current.src = getPlaySong(currentSong.id);
		audioRef.current.play().then(res => {
			setIsPlaying(true);
		}).catch(err => {
			setIsPlaying(false);
		})
	}, [isPlaying])

	// other handle
	const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
	const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

	// function
	const playMusic = useCallback(() => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play()
		setIsPlaying(!isPlaying)
	}, [isPlaying])

	const timeUpdate = e => {
		const currentTime = e.target.currentTime;
		if(!isChange) {
			setCurrentTime(currentTime * 1000);
      // setProgress(currentTime * 1000 / duration * 100);
		}
	}

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src={getSizeImage(picUrl, 35)}
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={30} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
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
			<audio ref={audioRef}
					   onTimeUpdate={e => timeUpdate(e)}/>
    </PlaybarWrapper>
  )
})
