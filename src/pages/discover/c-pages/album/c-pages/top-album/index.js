import React, { memo, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { TopAlbumWrapper } from './style'
import AlbumCover from '@/components/album-cover'
import ThemeHeader from '@/components/theme-header-normal'
import Pagination from '@/components/pagination'

import { getTopAlbumsAction } from '../../store/actionCreator'

export default memo(function TopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()

  const { topAlbums, total } = useSelector(
    state => ({
      topAlbums: state.getIn(['album', 'topAlbums']),
      total: state.getIn(['album', 'topTotal'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getTopAlbumsAction(1))
  }, [dispatch])

	const onPageChange = useCallback((page, pageSize) => {
		setCurrentPage(page)
		dispatch(getTopAlbumsAction(page))
	}, [dispatch])

  return (
    <TopAlbumWrapper>
      <ThemeHeader title="全部新碟" />
      <div className="album-list">
        {topAlbums.map(item => {
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
      <Pagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})
