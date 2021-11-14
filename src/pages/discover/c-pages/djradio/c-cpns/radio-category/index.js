import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { getRadioCategoriesAction, changeCurrentIdAction } from '../../store/actionCreator'

import { Carousel } from 'antd'
import { CategoryWrapper, CategoryContent, CategoryItemImage } from './style'

export default memo(function RadioCategory() {
  // state
  const PAGE_SIZE = 16

  // redux hooks
  const dispatch = useDispatch()
  const { categories, currentId } = useSelector(state => ({
    categories: state.getIn(['djradio', 'categories']),
    currentId: state.getIn(['djradio', 'currentId'])
  }))

  // hooks
  const carouselRef = useRef()
  useEffect(() => {
    dispatch(getRadioCategoriesAction())
  })

  // other
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1
  const getSize = index => {
    return index * PAGE_SIZE > categories.length
      ? categories.length
      : index * PAGE_SIZE
  }

  return (
    <CategoryWrapper>
      <div
        className="arrow arrow-left"
        onClick={e => carouselRef.current.prev()}
      ></div>
      <CategoryContent>
        <Carousel dots={{ className: 'dots' }} ref={carouselRef}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {categories
                    .slice(index * PAGE_SIZE, getSize(index + 1))
                    .map(item => {
                      return (
                        <div
                          className={classNames('category-item', {
                            active: currentId === item.id
                          })}
                          key={item.id}
													onClick={e => {dispatch(changeCurrentIdAction(item.id))}}
                        >
                          <CategoryItemImage imgUrl={item.picWebUrl} />
                          <span>{item.name}</span>
                        </div>
                      )
                    })}
                </div>
              )
            })}
        </Carousel>
      </CategoryContent>
      <div
        className="arrow arrow-right"
        onClick={e => carouselRef.current.next()}
      ></div>
    </CategoryWrapper>
  )
})
