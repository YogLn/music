import styled from 'styled-components'

export const RankingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;

  .image {
    padding: 3px;
		border: 1px solid #ccc;
		position: relative;
		
    img {
      width: 150px;
      height: 150px;
    }

		.image_cover {
      background-position: -230px -380px;
    }
  }
`
