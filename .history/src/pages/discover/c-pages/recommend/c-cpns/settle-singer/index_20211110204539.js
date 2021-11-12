import React, { memo } from 'react'
import { SetterSingerWrapper } from './style'

export default memo(function SettleSinger() {
	return (
		<SetterSingerWrapper>
			<progress value={30}/>
			入驻歌手
		</SetterSingerWrapper>
	)
})
