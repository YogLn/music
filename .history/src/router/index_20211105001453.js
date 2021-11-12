// import React from 'react'
// const Discover = React.lazy(() => import('../pages/discover'))
// const Friends = React.lazy(() => import('../pages/friends'))
// const Mine = React.lazy(() => import('../pages/mine'))
// const Player = React.lazy(() => import('@/pages/player'))

import Discover from '../pages/discover'
import Friends from '../pages/friend'
import Mine from '../pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/discover',
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/friend',
    component: Friends
  },
  {
    path: '/mine',
    component: Mine
  }
]

export default routes
