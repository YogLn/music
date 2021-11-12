import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'

import Header from 'components/app-header'
import Footer from 'components/app-footer'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

export default memo(function App() {
  return (
    <HashRouter>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </HashRouter>
  )
})
