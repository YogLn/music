import styled from 'styled-components'

export const OperationBarWrapper = styled.div`
  display: flex;
  align-items: center;

	.play {
		display: flex;
		align-items: center;
		margin-right: 5px;

		.play-icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      background-position: right -428px;
			
			.play {
				display: flex;
				align-items: center;
				padding: 0 7px 0 8px;
        background-position: 0 -387px;
			}

			i {
				display: inline-block;
          width: 20px;
          height: 18px;
          margin: -2px 2px 0;
          background-position: 0 -1622px;
			}
		}
	}
`
