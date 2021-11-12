import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreator'

export default memo(function TopBanner() {
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getTopBannersAction())
	})
	return (
		<div>
			
		</div>
	)
})
