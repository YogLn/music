import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { singerAlphas } from '@/utils/handle-data'
import { getArtistListAction } from '../../../../store/actionCreator'
import { AlphaListWrapper } from './style'

export default memo(function AlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState('热门')

  const dispatch = useDispatch()
  const { currentType, currentArea } = useSelector(
    state => ({
      currentType: state.getIn(['artist', 'currentType']),
      currentArea: state.getIn(['artist', 'currentArea'])
    }),
    shallowEqual
  )

  // useEffect(() => {
  //   setCurrentAlpha('-1')
  // }, [currentType, currentArea])

  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha))
  }, [currentArea, currentType, currentAlpha, dispatch])

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {currentArea !== -1 &&
        singerAlphas.map(item => {
          if (item === '0') item = '其他'
          if (item === '-1') item = '热门'
          const isActive = currentAlpha === item
          return (
            <div
              className={classNames('item', { active: isActive })}
              key={item}
            >
              <span onClick={e => setCurrentAlpha(item)}>
                {item.toUpperCase()}
              </span>
            </div>
          )
        })}
    </AlphaListWrapper>
  )
})
