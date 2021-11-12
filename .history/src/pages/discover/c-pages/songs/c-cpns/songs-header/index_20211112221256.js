import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style'
import SongsCategory from '../songs-category'

export default memo(function SongsHeader() {
	const [showCategory, setShowCategory] = useState(false)

	const { currentCategory } = useSelector(state => ({
		currentCategory: state.getIn(['songs', 'currentCategory'])
	}), shallowEqual)
	
	return (
		<SongsHeaderWrapper>
			<SongsHeaderLeft>
				<span className="title">{currentCategory}</span>
				<button className="select" onClick={e => setShowCategory(!showCategory)}>
					<span>选择分类</span>
          <i className="sprite_icon2"></i>
				</button>
				{showCategory ? <SongsCategory /> : null}
			</SongsHeaderLeft>
			<SongsHeaderRight>
				<button className="hot">热门</button>
			</SongsHeaderRight>
		</SongsHeaderWrapper>
	)
})
