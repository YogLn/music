import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSimiSongsAction } from '../../store/actionCreator'

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
		<div>
			PlayerRelevant
		</div>
	)
})
