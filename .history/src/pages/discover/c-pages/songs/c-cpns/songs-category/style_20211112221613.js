import styled from "styled-components";

export const CategoryWrapper = styled.div`
	position: absolute;
	z-index: 99;
	width: 700px;
  border: 1px solid #ccc;
  background-color: #fefefe;

	.arrow {
    position: absolute;
    top: -11px;
    left: 110px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

	.all {
		padding: 10px 25px;
		border-bottom: 1px solid #e2e2e2;
	}
`