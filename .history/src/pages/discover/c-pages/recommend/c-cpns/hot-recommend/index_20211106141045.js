import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import ThemeHeader from '@/components/theme-header-rcm'

import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actionCreator'
export default memo(function HotRecommend() {

	// redux hooks
	const { hotRecommends } = useSelector(state => ({
		hotRecommends: state.getIn(['recommend', 'hotRecommend'])
	}), shallowEqual)
	const dispatch = useDispatch()



	return (
		<HotRecommendWrapper>
			<ThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
			{hotRecommends.length}
		</HotRecommendWrapper>
	)
})
