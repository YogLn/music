import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { RankingWrapper } from './style'
import ThemeHeader from '@/components/theme-header-normal'
import RankingCover from '@/components/radio-ranking-cover'
import Pagination from '@/components/pagination'
import HeaderRight from './c-cpns/header-right'

import { getDjRadiosAction } from '../../store/actionCreator'

export default memo(function RadioRanking() {
	// state
	const [currentPage, setCurrentPage] = useState(1)

	// redux hooks
	const dispatch = useDispatch()
	const { currentId, radios } = useSelector(state => ({
		currentId: state.getIn(['djradio', 'currentId']),
		radios: state.getIn(['djradio', 'radios'])
	}), shallowEqual)

	// hooks
	useEffect(() => {
		dispatch(getDjRadiosAction(currentId, 0))
	})

	// other handle
	const onPageChange = (page, pageSize) => {
		setCurrentPage(page);
		dispatch(getDjRadiosAction(currentId, page * 30))
	}

  return (
    <RankingWrapper>
      <ThemeHeader title="电台排行榜" rightSlot={<HeaderRight />} />
			<div className="ranking-list">
				{
					radios.map(item => {
						return <RankingCover key={item.id} radio={item}/>
					})
				}
			</div>
			<Pagination currentPage={currentPage}
									pageSize={30}
									total={1000}
									onPageChange={onPageChange}/>
    </RankingWrapper>
  )
})
