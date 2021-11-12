import request from './request'

export function getTopBanners() {
	return request({
		url: '/banner'
	})
}

export function getHotRecommend(limit) {
	return request({
		url: '/personalized',
		params: {
			limit
		}
	})
}

export function getNewAlbum(limit) {
	return request({
		url: '/top/album',
		params: {
			limit
		}
	})
}

export function getTopList(idx) {
	return request({
		url: '/top/list',
		params: {
			idx
		}
	})
}

export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}