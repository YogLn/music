import styled from 'styled-components'

export const SongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
`

export const SongsHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-size: 24px;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
  }

	.select {
		width: 91px;
    height: 31px;
    line-height: 31px;
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    color: #0c73c2;
		margin-left: 10px;
    cursor: pointer;

		&:hover {
      background-color: #fff;
    }

		i {
			display: inline-block;
			width: 8px;
      height: 5px;
      background-position: -70px -543px;
		}
	}

`

export const SongsHeaderRight = styled.div``
