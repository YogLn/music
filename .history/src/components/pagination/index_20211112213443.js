import React, { memo } from 'react'

import { Pagination } from 'antd';
import { PaginationWrapper } from './style'

export default memo(function Pagination(props) {
	const { currentPage, total, onPageChange } = props
	
	const itemRender = (current, type, originalElement) => {
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
