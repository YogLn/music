import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import Header from 'components/app-header'
import Footer from 'components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      			<Header />
			<Footer />
    </HashRouter>
  )
})
