import React from 'react'

const Discover = React.lazy(() => import('../pages/discover'))
const Friends = React.lazy(() => import('../pages/friends'))
const Mine = React.lazy(() => import('../pages/mine'))
// const Player = React.lazy(() => import('@/pages/player'))

const routes = [
  {
    path: '/',
    exact: true
  },
  {
    path: 'discover',
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
