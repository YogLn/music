import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { ArtistListWrapper } from './style'
import ThemeHeader from '@/components/theme-header-normal'
import AlphaList from './c-cpns/alpha-list'

export default memo(function ArtistList() {
	// react redux
	const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

	return (
		<ArtistListWrapper>
			<ThemeHeader title={currentType.name} />
			<AlphaList></AlphaList>
		</ArtistListWrapper>
	)
})
