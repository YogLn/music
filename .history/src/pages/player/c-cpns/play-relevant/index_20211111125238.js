import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getSimiSongsAction } from '../../store/actionCreator'

export default memo(function PlayerRelevant() {
	// state

	// redux hooks
	const dispatch = useDispatch()
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
