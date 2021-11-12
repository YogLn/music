import React, { memo, useEffect } from 'react'
import ThemeHeaderPlay from '@/components/theme-header-play'
import { getSimiPlayListAction } from '../../store/actionCreator'
import { useDispatch } from 'react-redux'

export default memo(function PlayerSongs() {
	// state

	// redux hooks
	const dispatch = useDispatch()
	// hooks
	useEffect(() => {
		dispatch(getSimiPlayListAction())
	}, [dispatch])

	return (
		<div>
			<ThemeHeaderPlay title="包含这首歌的歌单"/>
			<div className="songs">
				{

				}
			</div>
		</div>
	)
})
