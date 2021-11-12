import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from '@/store'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import PlayerBar from '@/pages/player/player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>{renderRoutes(routes)}</Suspense>
        <AppFooter />
        <PlayerBar />
      </HashRouter>
    </Provider>
  )
})
