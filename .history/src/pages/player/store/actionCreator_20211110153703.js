import * as actionTypes from './constant'
import { getSongDetail } from '@/services/player'
import { getRandomNumber } from '@/utils/math-utils'

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

export const changeCurrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    const palyList = getState.getIn(['player', 'palyList'])
    const sequence = getState.getIn(['player', 'sequence'])
    let currentSongIndex = getState.getIn(['player', 'currentSongIndex'])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(palyList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(palyList.length)
        }
        currentSongIndex = randomIndex
        break;
			default:
				currentSongIndex += tag;
				if(currentSongIndex >=  palyList.length) currentSongIndex = 0
				if(currentSongIndex < 0) currentSongIndex = palyList.length - 1

    }
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
      })
    }
  }
}
