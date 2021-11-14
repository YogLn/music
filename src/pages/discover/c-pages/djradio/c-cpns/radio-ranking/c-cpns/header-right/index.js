import React, { memo } from 'react'

import { HeaderRightWrapper } from './style'

export default memo(function HeaderRight() {
	return (
		<HeaderRightWrapper>
			<a href="#/">上升最快</a>
			<span>|</span>
			<a href="#/">最热电台</a>
		</HeaderRightWrapper>
	)
})
