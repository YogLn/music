import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
	width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;

	.cover-top {
    position: relative;

    &>img {
      width: 140px;
      height: 140px;
    }

		.cover {
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
      background-position: 0 0;

		}
	}
`