import React, { memo, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { SongListWrapper } from './style'
import SongCover from '@/components/songs-cover'
import Pagination from '@/components/pagination'

import { getSongsListAction } from '../../store/actionCreator'

export default memo(function SongList() {
	const [currentPage, setCurrentPage] = useState(1)

	const dispatch = useDispatch()
	const { categorySongs } = useSelector(state => ({
		categorySongs: state.getIn(['songs', 'categorySongs'])
	}), shallowEqual)

	const songsList = categorySongs.playlists || []
	const total = categorySongs.total || 0

	const onPageChange = (page) => {
		setCurrentPage(page)
		dispatch(getSongsListAction(page))
	}

	return (
		<SongListWrapper>
			<div className="songs-list">
				{
					songsList.map(item => {
						return (
							<SongCover info={item} key={item.id} right="30px" />
						 )
					})
				}
			</div>
			{/* <Pagination onPageChange={onPageChange}/> */}
		</SongListWrapper>
	)
})