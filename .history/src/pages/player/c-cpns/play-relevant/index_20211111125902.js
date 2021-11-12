import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ThemeHeaderPlay from '@/components/theme-header-play'

import { getSimiSongsAction } from '../../store/actionCreator'
import { RelevantWrapper } from './style'

export default memo(function PlayerRelevant() {
	// state

	// redux hooks
	const dispatch = useDispatch()
	const { simiSongs } = useSelector(state => ({
		simiSongs: state.getIn(['player', 'simiSongs'])
	}), shallowEqual)
	// hooks
	useEffect(() => {
		dispatch(getSimiSongsAction())
	}, [dispatch])
	return (
		<RelevantWrapper>
			<ThemeHeaderPlay title="相似歌曲"/>
			PlayerRelevant
		</RelevantWrapper>
	)
})
