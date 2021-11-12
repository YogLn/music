import React, { memo } from 'react'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

import { AlbumWrapper } from './style'

export default memo(function NewAlbum() {
	return (
		<div>
			<ThemeHeaderRCM title="新碟上架"/>
		</div>
	)
})
