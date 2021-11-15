import * as actionTypes from './constant'
import { getHotAlbums, getTopAlbums } from '@/services/album'

const changeHotAlbumsAction = hotAlbums => ({
	type: actionTypes.CHANGE_HOT_ALBUMS,
	hotAlbums
})

const changeTopAlbumAction = (res) => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums
})

const changeTopTotalAction = (topTotal) => ({
  type: actionTypes.CHANGE_TOP_TOTAL,
  topTotal
})

export const getHotAlbumsAction = () => {
	return dispatch => {
		getHotAlbums().then(res => {
			dispatch(changeHotAlbumsAction(res.albums))
		})
	}
}

export const getTopAlbumsAction = (page) => {
  return dispatch => {
    getTopAlbums(30, (page-1) * 30).then(res => {
      dispatch(changeTopAlbumAction(res));
      dispatch(changeTopTotalAction(res.total));
    })
  }
}