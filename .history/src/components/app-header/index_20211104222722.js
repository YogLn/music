import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

import {HeaderWrapper} from './style'
export default memo(function Header() {

	const showSelectItem = () => {

	}

	return (
		<HeaderWrapper>
			{
				headerLinks.map(item => {
					return 
				})
			}
		</HeaderWrapper>
	)
})
