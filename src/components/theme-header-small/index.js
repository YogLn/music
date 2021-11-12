import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import PropTypes from 'prop-types'

const ThemeHeaderSmall = (props) => {
  const { title, more } = props
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
}
ThemeHeaderSmall.propTypes = {
	title: PropTypes.string.isRequired,
	more: PropTypes.string
}

export default memo(ThemeHeaderSmall)