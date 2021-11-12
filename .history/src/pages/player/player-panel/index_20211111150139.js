import React, { memo } from 'react'

import PlayHeader from './c-cpns/play-header'
import PlayList from './c-cpns/play-list'


import { PanelWrapper } from './style'

export default memo(function PlayList() {
	return (
		<PanelWrapper>
			<PlayHeader />
			<div className="main">
				<div className="image">
					<img src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt="" />
					<PlayList />
				</div>
			</div>
		</PanelWrapper>
	)
})
