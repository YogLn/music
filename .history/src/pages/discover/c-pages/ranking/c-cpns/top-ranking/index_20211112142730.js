import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { TopRankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function TopRanking() {
	// redux hooks
	const dispatch = useDispatch()
	const { topList } = useSelector(state => ({
		topList: state.getIn(['ranking', 'topList'])
	}), shallowEqual)
	// hooks
	useEffect(() => {
		dispatch(getTopListAction())
	})
	return (
		<TopRankingWrapper>
			{topList.length}
		</TopRankingWrapper>
	)
})
