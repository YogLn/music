import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

export default memo(function Header() {
	return (
		<div>
			{
				headerLinks.map(item => {
					return <NavLink key={item.title}>{item.title}</NavLink>
				})
			}
		</div>
	)
})
