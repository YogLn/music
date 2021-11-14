import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeader(props) {
  const { title, rightSlot } = props
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <div className="right">{rightSlot}</div>
    </HeaderWrapper>
  )
})
