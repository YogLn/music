import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ThemeHeaderPlay from '@/components/theme-header-play'
import { getSimiPlayListAction } from '../../store/actionCreator'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function PlayerSongs() {
	// state

	// redux hooks
	const dispatch = useDispatch()
	const { simiPlaylist } = useSelector(state => ({
    simiPlaylist: state.getIn(["player", "simiPlaylist"])
  }), shallowEqual);
	// hooks
	useEffect(() => {
		dispatch(getSimiPlayListAction())
	}, [dispatch])

	return (
		<div>
			<ThemeHeaderPlay title="包含这首歌的歌单"/>
			<div className="songs">
				{
					simiPlaylist.map(item => {
						return (
							<div className="song-item" key={item.id}>
								<a href="#/" className="image">
									<img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
								</a>
								<div className="info">
									by
									<a href="#/" className="nickname">{item.creator.nickname}</a>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
})
