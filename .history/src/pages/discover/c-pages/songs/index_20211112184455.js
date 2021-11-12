import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'


export default memo(function Songs() {
	const dispatch = useDispatch()
	const cat = useLocation().cat
	console.log(cat)
	return (
		<SongsWrapper>
			<SongsHeader />
		</SongsWrapper>
	)
})
