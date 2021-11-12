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
	display: flex;

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 40px;

		.link {
			display: block;
			width: 50px;
			height: 45px;

			background-image: url(${import("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 450px;
		}
	}
`