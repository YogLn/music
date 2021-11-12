import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function PlayerBar() {
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
              <img src="https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg?param=34y34" alt="" />
            </NavLink>
          </div>
        </PlayInfo>
        <Operator></Operator>
      </div>
    </PlaybarWrapper>
  )
})
