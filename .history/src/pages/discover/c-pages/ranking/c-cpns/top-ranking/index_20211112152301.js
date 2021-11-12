import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { TopRankingWrapper } from './style'
import { changeCurrentIndexAction, getRankingListAction } from '../../store/actionCreators'

import { getSizeImage } from '@/utils/format-utils'

export default memo(function TopRanking() {
  // redux hooks
  const dispatch = useDispatch()
  const { topList, currentIndex } = useSelector(
    state => ({
      topList: state.getIn(['ranking', 'topList']),
			currentIndex: state.getIn(['ranking', 'currentIndex'])
    }),
    shallowEqual
  )
  // hooks
  useEffect(() => {
    const currentItem = topList && topList[currentIndex]?.id    
    if(!id) return 
    dispatch(getRankingListAction(id))
  })

  // handle
  const handleItemClick = (index) => {
		dispatch(changeCurrentIndexAction(index))
	}
  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          )
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: index === currentIndex })}
              onClick={e => handleItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
})
