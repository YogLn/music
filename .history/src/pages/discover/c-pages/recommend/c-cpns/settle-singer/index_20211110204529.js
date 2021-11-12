import React, { memo } from 'react'
import { SetterSingerWrapper } from './style'

export default memo(function SettleSinger() {
	return (
		<SetterSingerWrapper>
			<progress />
			入驻歌手
		</SetterSingerWrapper>
	)
})
