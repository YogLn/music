export function handleSongsCategory(data) {
	// 获取歌曲的类别
	const category = data.categories

	// 创建类别数据结构
	const categoryData = Object.entries(category).map(([key, value]) => {
		return {
			name: value,
			subs: []
		}
	})
}