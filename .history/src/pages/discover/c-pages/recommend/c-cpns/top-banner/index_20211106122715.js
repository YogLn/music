import React, { memo, useEffect, useRef, useState } from 'react'
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
	const [currentIndex, setCurrentIndex] = useState(0)
  // redux hooks
  const dispatch = useDispatch()
	const bannerRef = useRef()
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

	// 其他业务逻辑
	const bannerChange = useCallback(() => {
		(form, to) => {
			setTimeout(() => {
				setCurrentIndex(to)
			}, 0)
		}
	})
	// const bgimage = topBanners

  return (
    <TopBannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
						{
							topBanners.map(item => {
								return (
									<div className="banner-item" key={item.imageUrl}>
										<img className="image" src={item.imageUrl} alt={item.typeTitle} />
									</div>
								)
							})
						}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
					<button className="btn left" onClick={e => bannerRef.current.prev()}></button>
					<button className="btn right" onClick={e => bannerRef.current.next()}></button>
				</BannerControl>
      </div>
    </TopBannerWrapper>
  )
})
