import React, { memo } from 'react';

import PlayInfo from './c-cpns/play-info'

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
          <h2>SimiPlaylist</h2>
          <h2>SimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
