import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { dicoverMenu } from '@/common/local-data'
import { DiscoverWrapper, TopMenu } from './style'

export default memo(function Discover() {
	return (
		<DiscoverWrapper>
			<div className="top">
				<TopMenu>
					{
						dicoverMenu.map(item => {
							return (
								<div className="item" key={item.title}>
									<NavLink to={item.link}>{item.title}</NavLink>
								</div>
							)
						})
					}
				</TopMenu>
			</div>
		</DiscoverWrapper>
	)
})
