import React from 'react'
import { Redirect } from "react-router-dom";
// const Discover = React.lazy(() => import('../pages/discover'))
// const Friend = React.lazy(() => import('../pages/friend'))
// const Mine = React.lazy(() => import('../pages/mine'))
// const Player = React.lazy(() => import('@/pages/player'))

import Discover from '../pages/discover'
import Friend from '../pages/friend'
import Mine from '../pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (<Redirect to="/discover" />)
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/mine',
    component: Mine
  }
]

export default routes
