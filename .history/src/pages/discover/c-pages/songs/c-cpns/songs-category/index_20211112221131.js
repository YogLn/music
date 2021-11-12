import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { CategoryWrapper } from './style'

export default memo(function SongsCategory() {
  // redux hooks
  const { category } = useSelector(state => ({
    category: state.getIn(['songs', 'category'])
  }))

  // other handle
  const selectCategory = name => {}
	
  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e => selectCategory('全部')}>
          全部风格
        </span>
      </div>
      <div className="category">
				{
					category.map((item, index) => {
						return(
							<dl key={item.name} className={"item" + index}>
								<dt>
									<i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
								</dt>
								<dd>
									{
										item.subs.map(sItem => {
											return ( 
												<div className="item">
													<span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
													<span className="divider">|</span>
												</div>
											 )
										})
									}
								</dd>
							</dl>
						)
					})
				}
			</div>
    </CategoryWrapper>
  )
})
