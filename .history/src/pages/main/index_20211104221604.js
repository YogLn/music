import React, { memo } from 'react'
import Header from 'components/app-header'
import Footer from 'components/app-footer'

export default memo(function Main() {
	return (
		<div>
			<Header />
			<Footer />
		</div>
	)
})
