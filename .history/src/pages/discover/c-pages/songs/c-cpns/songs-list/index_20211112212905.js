import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { SongListWrapper } from './style'
import SongCover from '@/components/songs-cover'
import Pagination from '@/components/pagination'

export default memo(function SongList() {

	const { songsList } = useSelector(state => ({
		songsList: state.getIn(['songs', 'categorySongs'])
	}), shallowEqual)

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
			<Pagination />
		</SongListWrapper>
	)
})