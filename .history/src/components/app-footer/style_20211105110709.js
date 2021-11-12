import styled from 'styled-components'

export const FooterWrapper = styled.div`
	height: 172px;
	background-color: #f2f2f2;
	color: #666;
	border-top: 1px solid #d3d3d3;

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const FooterLeft = styled.div`
	padding-top: 15px;
	line-height: 24px;

	.link {
		a {
			color: #999;
		}

		.line {
			color: #999;
			margin: 0 10px;
		}
	}

	.copyright {
    span {
      margin-right: 15px;
    }
  }
`

export const FooterRight = styled.div`

`