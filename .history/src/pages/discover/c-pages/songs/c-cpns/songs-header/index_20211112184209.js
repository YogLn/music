import React, { memo } from 'react'

import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style'

export default memo(function SongsHeader() {
	return (
		<SongsHeaderWrapper>
			<SongsHeaderLeft></SongsHeaderLeft>
			<SongsHeaderRight></SongsHeaderRight>
		</SongsHeaderWrapper>
	)
})
