import React, { memo } from 'react'
import Main from '@/pages/main'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      			<Header />
			<Footer />
    </HashRouter>
  )
})
