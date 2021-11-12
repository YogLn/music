import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreator'

export default memo(function TopBanner() {
	// state

	// redux hooks
	const dispatch = useDispatch()

	// other hooks
	useEffect(() => {
		dispatch(getTopBannersAction())
	})
	return (
		<div>
			
		</div>
	)
})
