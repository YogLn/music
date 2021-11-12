import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PannelWrapper } from './style'
export default memo(function PlayLyric() {
	// redux hooks
	const { lyricList } = useSelector(state =>({
		lyricList: state.getIn(['player', 'lyricList'])
	}), shallowEqual)

	console.log(lyricList)
	return (
		<PannelWrapper>
				
		</PannelWrapper>
	)
})
