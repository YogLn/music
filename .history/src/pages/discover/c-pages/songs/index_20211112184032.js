import React, { memo } from 'react'

import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'

export default memo(function Songs() {
	return (
		<SongsWrapper>
			<SongsHeader />
		</SongsWrapper>
	)
})
