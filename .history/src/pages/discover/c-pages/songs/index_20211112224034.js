import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'
import SongList from './c-cpns/songs-list'

import { getSongCategoryAction, getSongsListAction } from './store/actionCreator'

export default memo(function Songs() {
	const dispatch = useDispatch()
	const cat = useLocation().cat
	console.log(cat)

	useEffect(() => {
		dispatch(getSongCategoryAction())
		dispatch(getSongsListAction(0))
	}, [dispatch])
	return (
		<SongsWrapper className="wrap-v2">
			<SongsHeader />
			<SongList />
		</SongsWrapper>
	)
})
