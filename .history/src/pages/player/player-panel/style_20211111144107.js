import styled from 'styled-components'

export const PanelWrapper = styled.div`
  position: absolute;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;

  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${require('@/assets/img/playpanel_bg.png')}) -1014px 0 repeat-y;

    .image {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: 0.2;
    }
  }
`
