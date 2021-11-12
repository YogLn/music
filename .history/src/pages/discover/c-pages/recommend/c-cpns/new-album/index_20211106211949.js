import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { AlbumWrapper } from './style'
import  { Carousel } from 'antd'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'

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
						{
							[0,1].map(item => {
								return (
									<div key={item} className="page">
										{
											newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
												return <AlbumCover key={iten.id}
																					 info={iten}
																					 size={100}
																					 width={118}
																					 bgp="-570px"/>
											})
										}
									</div>
								)
							})
						}
					</Carousel>
				</div>
				<button className="arrow arrow-right sprite_02"></button>
			</div>
		</AlbumWrapper>
	)
})
