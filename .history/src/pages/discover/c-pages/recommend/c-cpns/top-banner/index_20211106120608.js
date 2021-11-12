import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreator'

import { TopBannerWrapper, BannerLeft, BannerRight, BannerControl} from './style'

export default memo(function TopBanner() {
	// state

	// redux hooks
	const dispatch = useDispatch()
	const { topBanners } = useSelector(state => ({
		topBanners: state.getIn(['recommend', 'topBanners'])
	}), shallowEqual)

	// other hooks
	useEffect(() => {
		dispatch(getTopBannersAction())
	})
	return (
		<TopBannerWrapper>
			<div className="banner wrap-v2">
				<BannerLeft></BannerLeft>
				<BannerRight></BannerRight>
				<BannerControl></BannerControl>
			</div>
		</TopBannerWrapper>
	)
})
