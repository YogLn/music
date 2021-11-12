import React, { memo } from 'react';

import PlayInfo from './c-cpns/play-info'
import PlaySongs from './c-cpns/play-songs'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayInfo/>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <PlaySongs />
          <h2>SimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
