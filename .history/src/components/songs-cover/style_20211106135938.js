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

			.info {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 10px;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background-position: 0 -537px;
        color: #ccc;
        height: 27px;
			}
		}
	}
`