import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetterSingerWrapper } from './style'
import ThemeHeaderSmall from '@/components/theme-header-small'

import { getSettleSingersAction } from '../../store/actionCreator'

export default memo(function SettleSinger() {
	// state

	// redux hook
	const dispatch = useDispatch()
	const { settleSings } = useSelector(state => ({
		settleSings: state.getIn(['recommend', 'settleSings'])
	}))
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
