import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { SetterSingerWrapper } from './style'
import ThemeHeaderSmall from '@/components/theme-header-small'

import { getSizeImage } from '@/utils/format-utils'
import { getSettleSingersAction } from '../../store/actionCreator'

export default memo(function SettleSinger() {
	// state

	// redux hook
	const dispatch = useDispatch()
	const { settleSings } = useSelector(state => ({
		settleSings: state.getIn(['recommend', 'settleSings'])
	}), shallowEqual)

	// hooks 
	useEffect(() => {
		dispatch(getSettleSingersAction())
	}, [dispatch])
	return (
		<SetterSingerWrapper>
			<ThemeHeaderSmall title="入驻歌手" more="查看更多&gt;"/>
			<div className="singer-list">
				{
					settleSings.map(item => {
						return (
							<a href="/singer" key={item.id} className="item">
								<img src={getSizeImage(item.img1v1Url, 62)} alt="" />
								<div className="info">
									<div className="title">{item.alias.join('') || item.name}</div>
									<div className="name">{item.name}</div>
								</div>
							</a>
						)
					})
				}
			</div>
			<div className="apply-for">
				<a href="#/">申请成为网易云音乐人</a>
			</div>
		</SetterSingerWrapper>
	)
})
