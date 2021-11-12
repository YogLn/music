import React, { memo } from 'react'
import { SetterSingerWrapper } from './style'
import ThemeHeaderSmall from '@/components/theme-header-small'

export default memo(function SettleSinger() {
	return (
		<SetterSingerWrapper>
			<ThemeHeaderSmall title="入驻歌手" more="查看更多&gt;"/>
		</SetterSingerWrapper>
	)
})
