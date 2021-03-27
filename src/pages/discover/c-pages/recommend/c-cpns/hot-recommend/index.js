import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import ThemeHeader from '../../../../../../components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'
import SongCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'

export default memo(function HotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch]) 
  return (
    <div>
      <HotRecommendWrapper>
        <ThemeHeader title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></ThemeHeader>
        <div className="recommend-list">
          {
            hotRecommends.map((item, index) => {
              return <SongCover key={item.id} info={item}/>
            })
          }
        </div>
      </HotRecommendWrapper>
    </div>
  )
})