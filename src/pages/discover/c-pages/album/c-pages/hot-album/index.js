import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HotAlbumWrapper } from './style'
import AlbumCover from '@/components/album-cover'
import ThemeHeader from '@/components/theme-header-normal'

import { getHotAlbumsAction } from '../../store/actionCreator'

export default memo(function HotAlbum() {
  const dispatch = useDispatch()
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(['album', 'hotAlbums'])
  }))

  useEffect(() => {
    dispatch(getHotAlbumsAction())
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <ThemeHeader title="热门新碟" />
      <div className="album-list">
        {hotAlbums.slice(0, 10).map(item => {
          return (
            <AlbumCover
              size={130}
              width={153}
              bgp={'-845px'}
              key={item.id}
              info={item}
            />
          )
        })}
      </div>
    </HotAlbumWrapper>
  )
})
