import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import ThemeHeader from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'

import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actionCreator'
export default memo(function HotRecommend() {

	// redux hooks
	const { hotRecommends } = useSelector(state => ({
		hotRecommends: state.getIn(['recommend', 'hotRecommend'])
	}), shallowEqual)
	const dispatch = useDispatch()

	// hooks
	useEffect(() => {
		dispatch(getHotRecommendAction(8))
	}, [dispatch])
	
	return (
		<HotRecommendWrapper>
			<ThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
			<div className="recommend-list">
			{
				hotRecommends.map(item => {
					return <SongsCover key={item.id} info={item} />
				})
			}
			</div>
		</HotRecommendWrapper>
	)
})
