import React, { memo } from 'react'
import { UserLoginWrapper } from './style'

export default memo(function UserLogin() {
	return (
		<UserLoginWrapper className="sprite_02">
			<p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
			<a href="#/" className="sprite_02">用户登录</a>
		</UserLoginWrapper>
	)
})
