import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  padding: 25px 0;
	.header {
		font-size: 14px;
		padding: 0 10px 12px 15px;
		color: #000;
		font-family: simsun;
	}

	.item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 5px 20px;
		margin: 5px 5px;
		cursor: pointer;

		&:hover, &.active {
      background-color: #e6e6e6;
    }

		img {
      width: 40px;
      height: 40px;
    }

		.info {
			margin-left: 15px;

			.update {
				color: #ccc;
			}
		}
	}

`