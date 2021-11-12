import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTopBannersAction } from './store/actionCreator'

export default memo(function Recommend() {
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getTopBannersAction())
	})
	return (
		<div>
			Recommend
		</div>
	)
})




