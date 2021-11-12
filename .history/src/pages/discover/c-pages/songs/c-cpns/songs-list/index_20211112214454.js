import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { SongListWrapper } from './style'
import SongCover from '@/components/songs-cover'
import Pagination from '@/components/pagination'

import { getSongsListAction } from '../../store/actionCreator'

export default memo(function SongList() {
	const [currentPage, setCurrentPage] = useState(1)

	const { songsList } = useSelector(state => ({
		songsList: state.getIn(['songs', 'categorySongs'])
	}), shallowEqual)

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