import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
	.banner {
		height: 270px;
		background-color: red;
		display: flex;
		position: relative;
	}
`
export const BannerLeft = styled.div`
	width: 730px;

	.banner-item {
		overflow: hidden;
		height: 270px;
		.image {
			width: 100%;
		}
	}
`
export const BannerRight = styled.div`

`
export const BannerControl = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(50%);

	.btn {
		position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

		&:hover {
      background-color: rgba(0, 0, 0, .1);
		}
	}

`