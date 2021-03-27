import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import Footer from './components/app-footer'
import Header from './components/app-header'
import AppPlayerBar from './pages/player/app-player-bar'

import routes from './router'
import store from './store'

export default memo(function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <Footer />
        <AppPlayerBar />
      </HashRouter>
    </Provider>

  )
})
