import React, { memo } from 'react'
import ThemeHeaderPlay from '@/components/theme-header-play'

export default memo(function PlayerSongs() {
	return (
		<div>
			<ThemeHeaderPlay title="包含这首歌的歌单"/>
		</div>
	)
})
