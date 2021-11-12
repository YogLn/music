import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

import routes from './router'
import { Provider } from 'react-redux'

export default memo(function App() {
  return (
    <Provider>
<HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>
    </Provider>
    
  )
})
