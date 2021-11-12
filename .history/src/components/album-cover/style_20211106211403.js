import styled from 'styled-components'

export const AlbumWrapper = styled.div`
	width: ${props => props.width + 'px'};

	.album-image {
		position: relative;
		width: ${props => props.width + 'px'};
		height: ${props => props.size + 'px'};
		overflow: hidden;
		margin-top:15px;
	}
`