import React, { memo } from 'react'

import { CategoryWrapper } from './style'

const selectCategory = name => {
	
}

export default memo(function SongsCategory() {
	return (
		<CategoryWrapper>
			 <div className="arrow sprite_icon"></div>
			 <div className="all">
				 <span className="link" onClick={e => selectCategory('全部')}>全部风格</span>
			 </div>
		</CategoryWrapper>
	)
})
