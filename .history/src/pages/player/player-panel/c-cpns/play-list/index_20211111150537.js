import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PlayListWrapper } from './style'

export default memo(function PlayList() {
	const { playList } = useSelector(state => ({
		playList: state.getIn(['player', 'playList'])
	}), shallowEqual)
	return (
		<PlayListWrapper>
			{
				playList.map(item => {
					return (
						<div key={item.id}>
							<div className="left"></div>
							<div className="right"></div>
						</div>
					)
					
				})
			}
		</PlayListWrapper>
	)
})
