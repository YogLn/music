import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require("@/assets/img/playpanel_bg.png")}) 0 0;
`
export const HeaderLeft = styled.div`
	display: flex;
	justify-content: space-between;
	width: 553px;
	padding: 0 25px;

	h3 {
    color: #e2e2e2;
    font-weight: 700;
  }

	.operator {
		color: #ccc;

		button {
			background-color: transparent;
			color: #ccc;
		}
	}
`
export const HeaderRight = styled.div``