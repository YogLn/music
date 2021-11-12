import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const ThemeHeaderRCM = memo(function(props) {
	const { title, keyword } = props

	return (
		<HeaderWrapper>
			<div className="left">
				<div className="title">{title}</div>
				<div className="keyword">
					{
						keyword.map(item => {
							return (
								<div className="item">
									<a href="todo">{item}</a>
									<span className="divider">|</span>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className="right"></div>
		</HeaderWrapper>
	)
})

export default ThemeHeaderRCM
