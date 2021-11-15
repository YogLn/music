import styled from 'styled-components';

export const AlphaListWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${props => props.hasTop ? '20px' : 0};

	.item {
		padding: 2px 6px;
    border-radius: 3px;

		span {
			font-size: 12px;
      color: #333;
      cursor: pointer;
		}
	}

	.active {
    background-color: #c20c0c;
    span {
      color: #fff;
    }
  }
`