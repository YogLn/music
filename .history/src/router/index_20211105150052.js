import React from 'react'
import { Redirect } from 'react-router-dom'
// const Discover = React.lazy(() => import('../pages/discover'))
// const Friend = React.lazy(() => import('../pages/friend'))
// const Mine = React.lazy(() => import('../pages/mine'))
// const Player = React.lazy(() => import('@/pages/player'))

import Discover from '../pages/discover'
import Album from '../pages/discover/c-pages/album'
import Artist from '../pages/discover/c-pages/artist'
import DjRadio from '../pages/discover/c-pages/djradio'
import Ranking from '../pages/discover/c-pages/ranking'
import Recommend from '../pages/discover/c-pages/recommend'
import Songs from '../pages/discover/c-pages/songs'

import Friend from '../pages/friend'
import Mine from '../pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend"
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/djradio',
        component: DjRadio
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      }
    ]
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
