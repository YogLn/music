import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreator'

export default memo(function Ranking() {

	// redux hooks
	const dispatch = useDispatch()
	// hooks
	useEffect(() => {
		dispatch(getTopListAction(0))
	}, dispatch)
	return (
		<RankingWrapper>
			<ThemeHeaderRCM title="榜单"/>
		</RankingWrapper>
	)
})
