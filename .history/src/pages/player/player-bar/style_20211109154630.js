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
    bottom: 0;
    height: 47px;
  }
`
export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => (props.isPlaying ? '-165px' : '-204px')};
  }
  .next {
    background-position: -80px -130px;
  }
`
export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

	.info {
		flex: 1;
		color: #a1a1a1;
		margin-left: 10px;

		.song {
			position: relative;
      color: #e1e1e1;
			top: 8px;
			left: 8px;

			.singer-name {
				color: #a1a1a1;
        margin-left: 10px;
			}
		}
	}
`
export const Operator = styled.div``
