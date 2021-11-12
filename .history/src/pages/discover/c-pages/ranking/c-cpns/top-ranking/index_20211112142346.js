import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { TopRankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function TopRanking() {
	// redux hooks
	const dispatch = useDispatch()

	// hooks
	useEffect(() => {
		dispatch(getTopListAction())
	})
	return (
		<TopRankingWrapper>
			TopRanking
		</TopRankingWrapper>
	)
})
