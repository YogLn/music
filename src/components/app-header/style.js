import styled from 'styled-components'
import hot from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    background-color: #c20c0c;
    height: 5px;
  }
`
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${hot});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      a.active {
        text-decoration: none;
        background: #000;
        color: #fff;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 17px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50% 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
		font-size: 8px;
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
    cursor: pointer;
  }

	.login {
		font-size:12px;
		color: #787878;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
`
