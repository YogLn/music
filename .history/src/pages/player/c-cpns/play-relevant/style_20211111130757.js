import styled from 'styled-components';

export const RelevantWrapper = styled.div`
	margin-top: 40px;
	.songs{
		.song-item {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.info {
        .title {
          a {
            color: #666;
          }
        }

        .artist {
          a {
            color: #999;
          }
        }
      }
		}
	}
`