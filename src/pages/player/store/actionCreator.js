import * as actionTypes from './constant'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'
import {
  getSongDetail,
  getLyric,
  getSimiPlaylist,
  getSimiSong
} from '@/services/player'

const changeCurrentSongAction = currentSong => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentSongIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

const changePlayListAction = playList => ({
  type: actionTypes.CHANGE_PLAYLIST,
  playList
})

const changLyricListAction = lyricList => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

const changeSimiPlayListAction = simiPlaylist => ({
  type: actionTypes.CHANGE_SIMI_PLAY_LIST,
  simiPlaylist
})

const changeSimiSongsAction = simiSongs => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  simiSongs 
})


export const getCurrentSongAction = ids => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}

export const changeSequenceAction = sequence => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentLyricIndexAction = index => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const changeCurrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const sequence = getState().getIn(['player', 'sequence'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

export const getSongDetailAction = ids => {
  return (dispatch, getState) => {
    // 1. 根据ids查找playlist中是否已经有了该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2. 判断是否查找到该歌曲
    let song = null
    if (songIndex !== -1) {
      // 查找到
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))

      // 请求歌词
      dispatch(getLyricAction(song.id))
    } else {
      // 没找到
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0]
        if (!song) return

        // 1.讲最新的歌曲添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 2.更行redux的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))

        // 3.请求歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changLyricListAction(lyricList))
    })
  }
}

export const getSimiPlayListAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(['player', 'currentSong']).id
    if (!id) return
    getSimiPlaylist(id).then(res => {
      dispatch(changeSimiPlayListAction(res.playlists))
    })
  }
}

export const getSimiSongsAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(['player', 'currentSong']).id
    if (!id) return
    getSimiSong(id).then(res => {
      dispatch(changeSimiSongsAction(res.songs))
    })
  }
}

