import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'
import SongList from './c-cpns/songs-list'

import { getSongCategoryAction } from './store/actionCreator'

export default memo(function Songs() {
	const dispatch = useDispatch()
	const cat = useLocation().cat

	useEffect(() => {
		dispatch(getSongCategoryAction())
	})
	return (
		<SongsWrapper className="wrap-v2">
			<SongsHeader />
			<SongList />
		</SongsWrapper>
	)
})
