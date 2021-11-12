import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AlbumWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

import { getNewAlbumAction } from '../../store/actionCreator'

export default memo(function NewAlbum() {

	// redux hooks
	const dispatch = useDispatch()
	const { newAlbum } = useSelector(state => ({
		newAlbum: state.getIn(['recommend', 'newAlbum'])
	}))
	// hooks
	useEffect(() => {
		dispatch(getNewAlbumAction(10))
	}, [dispatch])
	return (
		<AlbumWrapper>
			<ThemeHeaderRCM title="新碟上架"/>
			{newAlbum.length}
		</AlbumWrapper>
	)
})
