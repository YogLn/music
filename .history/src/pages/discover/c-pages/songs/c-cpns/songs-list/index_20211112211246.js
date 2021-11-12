import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { SongListWrapper } from './style'

export default memo(function SongList() {

	const { songsList } = useSelector(state => ({
		songsList: state.getIn(['songs', 'categorySongs'])
	}), shallowEqual)

	return (
		<SongListWrapper>
			<div className="song-list">
				{

				}
			</div>
		</SongListWrapper>
	)
})