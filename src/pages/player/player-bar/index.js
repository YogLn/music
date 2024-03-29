import React, { memo, useEffect, useState, useRef, useCallback } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Slider, message } from 'antd'
import PlayPanel from '../player-panel'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreator'

export default memo(function PlayerBar() {
  // state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [showSlider, setShowSlider] = useState(true)

  // redux hooks
  const dispatch = useDispatch()

  const { currentSong, sequence, lyricList, currentLyricIndex, playList } =
    useSelector(
      state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        sequence: state.getIn(['player', 'sequence']),
        lyricList: state.getIn(['player', 'lyricList']),
        currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
        playList: state.getIn(['player', 'playList'])
      }),
      shallowEqual
    )
  // hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(1475091192))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current
      .play()
      .then(res => {
        setIsPlaying(true)
      })
      .catch(err => {
        setIsPlaying(false)
      })
  }, [currentSong])

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  // function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = e => {
    const currentTime = e.target.currentTime
    if (!isChanging) {
      setCurrentTime(currentTime * 1000)
      setProgress(((currentTime * 1000) / duration) * 100)
    }

    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break
      }
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      if (showSlider) {
        message.open({
          key: 'lyric',
          content: content,
          duration: 0,
          className: 'lyric-class'
        })
      } else {
        message.destroy()
      }
    }
  }

  const sliderChange = useCallback(
    value => {
      setIsChanging(true)
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)
      setProgress(value)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    value => {
      const currentTime = ((value / 100) * duration) / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)

      if (!isPlaying) {
        playMusic()
        setIsPlaying(true)
      }
    },
    [duration, isPlaying, playMusic]
  )

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) currentSequence = 0
    dispatch(changeSequenceAction(currentSequence))
  }

  const changeMusic = tag => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const hanlePlayListClick = () => {
    setShowPanel(!showPanel)
    setShowSlider(!showSlider)
  }
  const history = useHistory()
  const getLyricPage = () => {
    history.push('/discover/player')
  }

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar prev"
            onClick={e => changeMusic(-1)}
          ></button>
          <button
            className="sprite_playbar play"
            onClick={e => playMusic()}
          ></button>
          <button
            className="sprite_playbar next"
            onClick={e => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span onClick={e => getLyricPage(e)} className="song-name">
                {currentSong.name}
              </span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                tooltipVisible={false}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={e => changeSequence()}
            ></button>
            <button
              className="sprite_playbar btn playlist"
              onClick={e => hanlePlayListClick()}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnded()}
      />
      {showPanel && <PlayPanel />}
    </PlaybarWrapper>
  )
})
