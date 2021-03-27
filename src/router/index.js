import React from 'react';
import { Redirect } from "react-router-dom";

// import Discover from "../pages/discover";
const Discover = React.lazy(() => import("../pages/discover"))
// import Recommend from "../pages/discover/c-pages/recommend";
const Recommend = React.lazy(() => import("../pages/discover/c-pages/recommend"))
// import Ranking from "../pages/discover/c-pages/ranking";
const Ranking = React.lazy(() => import("../pages/discover/c-pages/ranking"))
// import Songs from "../pages/discover/c-pages/songs";
const Songs = React.lazy(() => import("../pages/discover/c-pages/songs"))
// import Djradio from "../pages/discover/c-pages/djradio";
const Djradio = React.lazy(() => import("../pages/discover/c-pages/djradio"))
// import Artist from "../pages/discover/c-pages/artist";
const Artist = React.lazy(() => import("../pages/discover/c-pages/artist"))
// import Album from "../pages/discover/c-pages/album";
const Album = React.lazy(() => import("../pages/discover/c-pages/album"))

// import Friend from "../pages/friend";
const Friend = React.lazy(() => import("../pages/friend"))
// import Mine from "../pages/mine";
const Mine = React.lazy(() => import("../pages/mine"))
// import Player from '../pages/player';
const Player = React.lazy(() => import("../pages/player"))

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )        
      },
      {
        path: '/discover/recommend',
        component: Recommend
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
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/player',
        component: Player
      },
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
]

export default routes