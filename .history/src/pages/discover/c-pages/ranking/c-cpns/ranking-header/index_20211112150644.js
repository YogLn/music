import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { RankingHeaderWrapper } from './style'
import { getRankingListAction } from '../../store/actionCreator'

export default memo(function RankingHeader() {
	// redux hooks
	const dispatch = useDispatch()

	// hooks
	useEffect(() => {
		dispatch(getRankingListAction())
	}, [dispatch])

	return (
		<RankingHeaderWrapper>
			
		</RankingHeaderWrapper>
	)
})
