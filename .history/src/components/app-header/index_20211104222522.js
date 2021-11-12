import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

export default memo(function Header() {
	return (
		<div>
			{
				headerLinks.map(item => {
					return <NavLink to={item.link}>{item.title}</NavLink>
				})
			}
		</div>
	)
})
