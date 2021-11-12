import styled from 'styled-components'

export const PlaybarWrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 52px;
	background-position: 0 0;
	background-repeat: repeat;

	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		
	}
`