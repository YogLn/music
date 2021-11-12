import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { AlbumWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

import { getNewAlbumAction } from '../../store/actionCreator'

export default memo(function NewAlbum() {

	// redux hooks
	const dispatch = useDispatch()
	// hooks
	useEffect(() => {
		dispatch(getNewAlbumAction(8))
	}, )
	return (
		<AlbumWrapper>
			<ThemeHeaderRCM title="新碟上架"/>
		</AlbumWrapper>
	)
})
