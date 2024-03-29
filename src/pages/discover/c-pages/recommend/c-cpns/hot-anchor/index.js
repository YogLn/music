import React, { memo } from 'react'

import ThemeHeader from '@/components/theme-header-small'
import { HotRadioWrapper } from './style'
import { hotRadios } from '@/common/local-data'

export default memo(function HotAnchor() {
  return (
    <HotRadioWrapper>
      <ThemeHeader title="热门主播" />
      <div className="radio-list">
        {hotRadios.map(item => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="#/" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotRadioWrapper>
  )
})
