import styled from 'styled-components';

export const RankingListWrapper = styled.div`
	padding: 0 40px;
	
	.play-list {
		table {
			th {
				height: 34px;
				line-height: 34px;
				background-image: url(${require("@/assets/img/sprite_table.png")});
				color: #666;
				border: 1px solid #ddd;
				padding-left: 10px;
			}
		}
	}
`