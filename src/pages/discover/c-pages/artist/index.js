import React, { memo } from 'react'
import { ArtistWrapper } from './style'

import ArtistCategory from './c-cpns/artist-category'
import ArtistList from './c-cpns/artist-list'

export default memo(function Artist() {
  return (
    <ArtistWrapper className="wrap-v2">
      <ArtistCategory />
      <ArtistList />
    </ArtistWrapper>
  )
})
