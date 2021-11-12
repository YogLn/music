import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Carousel } from 'antd'

import { getTopBannersAction } from '../../store/actionCreator'

import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function TopBanner() {
  // state

  // redux hooks
  const dispatch = useDispatch()
  const { topBanners } = useSelector(
    state => ({
      topBanners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual
  )

  // other hooks
  useEffect(() => {
    dispatch(getTopBannersAction())
  })
  return (
    <TopBannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
						{
							topBanners.map(item => {
								return (
									<div className="banner-item" key={item.imageUrl}>
										<img src={item.imageUrl} alt={item.typeTitle} />
									</div>
								)
							})
						}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl></BannerControl>
      </div>
    </TopBannerWrapper>
  )
})
