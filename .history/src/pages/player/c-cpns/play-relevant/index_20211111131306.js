import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ThemeHeaderPlay from '@/components/theme-header-play'

import { getSimiSongsAction } from '../../store/actionCreator'
import { RelevantWrapper } from './style'

export default memo(function PlayerRelevant() {
  // state

  // redux hooks
  const dispatch = useDispatch()
  const { simiSongs } = useSelector(
    state => ({
      simiSongs: state.getIn(['player', 'simiSongs'])
    }),
    shallowEqual
  )
  // hooks
  useEffect(() => {
    dispatch(getSimiSongsAction())
  }, [dispatch])

	// other handle
	const getAllArtist = (item) => {
		console.log(item)
	}
  return (
    <RelevantWrapper>
      <ThemeHeaderPlay title="相似歌曲" />
      <div className="songs">
        {simiSongs.map(item => {
          return (
            <div className="song-item" key={item.id}>
              <div className="info">
                <div className="title">
                  <a href="#/">{item.name}</a>
                </div>
                <div className="artist">
                  <a href="#/">{getAllArtist(item.artists)}</a>
                </div>
              </div>
              <div className="operate">
                <button className="item sprite_icon3 play"></button>
                <button className="item sprite_icon3 add"></button>
              </div>
            </div>
          )
        })}
      </div>
    </RelevantWrapper>
  )
})
