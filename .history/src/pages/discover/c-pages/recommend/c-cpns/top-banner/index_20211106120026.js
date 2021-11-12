import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreator'

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
		<div>
			{topBanners.length}
		</div>
	)
})
