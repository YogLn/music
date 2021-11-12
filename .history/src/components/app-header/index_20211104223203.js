import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
export default memo(function Header() {

	const showSelectItem = (item, index) => {
		if(index < 3) {
			return <NavLink to={item.link}>{item.title}</NavLink>
		} else {
			<a href={item.link}>{item.title}</a>
		}
	}

	return (
		<HeaderWrapper>
			<div className="content wrap-v1">
				<HeaderLeft>
					<a href="#/" className="logo">网易云音乐</a>
					<div className="select-list">
						{
							headerLinks.map(item => {
								return (
									<div key={item.title} className="select-item">
										{showSelectItem(item, index)}
									</div>
								)
							})
						}
					</div>
				</HeaderLeft>
				<HeaderRight></HeaderRight>
			</div>
		</HeaderWrapper>
	)
})
