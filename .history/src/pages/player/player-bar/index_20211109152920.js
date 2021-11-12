import React, { memo } from 'react'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function PlayerBar() {
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
					<button className="sprite_player prev"></button>
					<button className="sprite_player play"></button>
					<button className="sprite_player next"></button>
				</Control>
        <PlayInfo></PlayInfo>
        <Operator></Operator>
      </div>
    </PlaybarWrapper>
  )
})
