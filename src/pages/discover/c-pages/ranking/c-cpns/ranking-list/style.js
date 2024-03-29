import styled from 'styled-components'

export const RankingListWrapper = styled.div`
  padding: 0 40px;

  .play-list {
    table {
      border: 1px solid #ddd;
      th {
        height: 34px;
        line-height: 34px;
        background-image: url(${require('@/assets/img/sprite_table.png')});
        color: #666;
        border-width: 0 0 1px 1px;
        padding-left: 10px;
      }

      .ranking {
        width: 78px;
      }
      .duration {
        width: 91px;
      }

      .singer {
        width: 173px;
      }
    }

    tbody {
      td {
        padding: 6px 10px;
      }
      tr:nth-child(2n) {
        background-color: #fff;
      }
      tr:nth-child(2n + 1) {
        background-color: #f7f7f7;
      }
      .rank-num {
        display: flex;

        .num {
          width: 25px;
          height: 18px;
          text-align: center;
          color: #999;
        }
        .new {
          width: 16px;
          height: 17px;
          margin-left: 12px;
          background-position: -67px -283px;
        }
      }

      .song-name {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .play {
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
        }
        .name {
          margin-left: 15px;
          cursor: pointer;
        }
      }
    }
  }
`
