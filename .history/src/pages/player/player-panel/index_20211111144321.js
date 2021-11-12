import React, { memo } from 'react'

import PlayHeader from './c-cpns/play-header'

import { PanelWrapper } from './style'

export default memo(function PlayList() {
	return (
		<PanelWrapper>
			<PlayHeader />
			<div className="main">
				<div className="image">
					<img src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt="" />
				</div>
			</div>
		</PanelWrapper>
	)
})
