import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { AlbumWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

import { getNewAlbumAction } from '../../store/actionCreator'

export default memo(function NewAlbum() {

	// redux hooks
	const dispatch = useDispatch()
	const { newAlbum } = useSelector(state => ({
		newAlbum: state.getIn(['recommend', 'newAlbum'])
	}), shallowEqual)

	// hooks
	const pageRef = useRef()
	useEffect(() => {
		dispatch(getNewAlbumAction(10))
	}, [dispatch])

	return (
		<AlbumWrapper>
			<ThemeHeaderRCM title="新碟上架"/>
			<div className="content">
				<button className="arrow arrow-left sprite_02"></button>
				<div className="album">
					<Carousel dots={false} ref={pageRef}>

					</Carousel>
				</div>
				<button className="arrow arrow-right sprite_02"></button>
			</div>
		</AlbumWrapper>
	)
})
