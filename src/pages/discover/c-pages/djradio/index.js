import React, { memo } from 'react'

import { DjRadioWrapper } from './style'
import RadioCategory from './c-cpns/radio-category'
import RadioRecommend from './c-cpns/radio-recommend'
import RadioRanking from './c-cpns/radio-ranking'

export default memo(function DjRadio() {
	return (
		<DjRadioWrapper className="wrap-v2">
			<RadioCategory />
			<RadioRecommend />
			<RadioRanking />
		</DjRadioWrapper>
	)
})
