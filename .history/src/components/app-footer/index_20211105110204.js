import React, { Fragment, memo } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'

import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft className="left">
				<div className="link">
				{
						footerLinks.map((item) => {
							return (
								<Fragment key={item.title}>
									<a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
									<span className="line"> | </span>
								</Fragment>	
							)
						})
					}
				</div>
				</FooterLeft>

        <FooterRight></FooterRight>
      </div>
    </FooterWrapper>
  )
})
