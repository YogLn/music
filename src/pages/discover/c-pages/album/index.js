import React, { memo } from 'react'

import { AlbumWrapper } from './style'
import HotAlbum from './c-pages/hot-album'
import TopAlbum from './c-pages/top-album'

export default memo(function Album() {
  return (
    <AlbumWrapper className="wrap-v2">
      <HotAlbum />
      <TopAlbum />
    </AlbumWrapper>
  )
})
