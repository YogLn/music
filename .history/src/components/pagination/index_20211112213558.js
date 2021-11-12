import React, { memo } from 'react'

import { Pagination } from 'antd';
import { PaginationWrapper } from './style'

export default memo(function Pagination(props) {
	const { currentPage = 0, total = 0, onPageChange } = props
	
	const itemRender = (current, type, originalElement) => {
		if(type === 'prev') {
			return <button className="control prev"> &lt; 上一页</button>
		}
		if(type === 'next') {
			return <button className="control next">上一页 &gt;</button>;
    }
		return originalElement
	}

	return (
		<PaginationWrapper>
			<Pagination className="pagination"
									size="small"
									current={currentPage}
									defaultCurrent={1}
									total={total}
									showSizeChanger={false}
									itemRender={itemRender}
									onChange={onPageChange}/>
		</PaginationWrapper>
	)
})
