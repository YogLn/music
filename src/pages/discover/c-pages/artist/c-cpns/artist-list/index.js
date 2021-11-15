import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { ArtistListWrapper } from './style'
import ThemeHeader from '@/components/theme-header-normal'
import AlphaList from './c-cpns/alpha-list'
import ArtistItem from './c-cpns/artist-item'

export default memo(function ArtistList() {
	// react redux
	const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

	return (
		<ArtistListWrapper>
			<ThemeHeader title={currentType.name} />
			<AlphaList />
			<div className="artist-list">
				{
					artistList.map((item, index) => {
						return <ArtistItem key={item.id} index={index} info={item} />
					})
				}
			</div>
		</ArtistListWrapper>
	)
})
