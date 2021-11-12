import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	height: 75px;
	font-size: 14px;
	color: #fff;
	background-color: #242424;

	.content {
		height: 70px;
		display: flex;
		justify-content: space-between;
	}
`
export const HeaderLeft = styled.div`
	display: flex;

	.logo {
		display: block;
		width: 176px;
    height: 69px;
		background-position: 0 0;
		text-indent: -9999px;
	}

	.select-list {
		display: flex;
		line-height: 70px;

		.select-item {
			a {
				display: block;
				padding: 0 20px;
				color: #ccc;
			}
		}
	}

`
export const HeaderRight = styled.div`

`