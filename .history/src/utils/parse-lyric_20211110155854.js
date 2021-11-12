// [00:41.060] 夏天快要过去}

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
	const lineStrings = lyricString.split('\n')	
	const lyrics = []
	for (const line of lineStrings) {
		if(line) {
			const res = parseExp.exec(line)
			console.log(res)
			if(!res) continue
			const time1 = res[1] * 60 * 1000
			const time2 = res[2] * 1000
			const time3 = result[3].length === 3? result[3]*1: result[3]*10;
		}
	}

}