// import { combineReducers } from 'redux-immutable'
import { combineReducers } from 'redux'

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'

const reducer = combineReducers({
	recommend: recommendReducer
})

export default reducer