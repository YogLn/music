import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SetterSingerWrapper } from './style'
import ThemeHeaderSmall from '@/components/theme-header-small'

import { getSettleSingersAction } from '../../store/actionCreator'

export default memo(function SettleSinger() {
	// state

	// redux hook
	const dispatch = useDispatch()

	// hooks 
	useEffect(() => {
		dispatch(getSettleSingersAction())
	}, [dispatch])
	return (
		<SetterSingerWrapper>
			<ThemeHeaderSmall title="入驻歌手" more="查看更多&gt;"/>
			<div className="singer-list">

			</div>
		</SetterSingerWrapper>
	)
})
