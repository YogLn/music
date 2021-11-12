import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

import routes from '@/router'

export default memo(function App() {
  return (
    <HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>
  )
})
