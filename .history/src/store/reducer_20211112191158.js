import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store'
import { reducer as songsReducer } from '../pages/discover/c-pages/songs/store'
import { reducer as playerReducer } from '../pages/player/store'

const reducer = combineReducers({
	recommend: recommendReducer,
	ranking: rankingReducer,
	songs: songsReducer,
	player: playerReducer
})

export default reducer