import React from 'react'
import { Redirect } from 'react-router-dom'
const Discover = React.lazy(() => import('../pages/discover'))
const Album = React.lazy(() => import('../pages/discover/c-pages/album'))
const Artist = React.lazy(() => import('../pages/discover/c-pages/artist'))
const DjRadio = React.lazy(() => import('../pages/discover/c-pages/djradio'))
const Ranking = React.lazy(() => import('../pages/discover/c-pages/ranking'))
const Recommend = React.lazy(() => import('../pages/discover/c-pages/recommend'))
const Songs = React.lazy(() => import('../pages/discover/c-pages/songs'))

const Friend = React.lazy(() => import('../pages/friend'))
const Mine = React.lazy(() => import('../pages/mine'))
const Player = React.lazy(() => import('@/pages/player'))


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
        render: () => <Redirect to="/discover/recommend" />
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
      },
      {
        path: "/discover/player",
        component: Player
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
