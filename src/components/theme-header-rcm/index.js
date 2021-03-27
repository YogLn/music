import React, { memo } from 'react';
import propTypes from 'prop-types';

import { HeaderWrapper } from './style';

const ThemeHeader = memo(function(props) {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
ThemeHeader.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array
}

ThemeHeader.defaultProps = {
  keywords: []
}


export default ThemeHeader;
