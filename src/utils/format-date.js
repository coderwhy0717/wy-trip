import dayjs from "dayjs";


export function formatMonthDay(date,format = 'MM月DD日') {
  return dayjs(date).format(format)
}

export function formatDiif(inday,endDay) {
  return dayjs(endDay).diff(inday,"day")
}

export function nextWeek(day) {
 let datas = dayjs(day).day()
//  console.log(datas)
	let week = ['日', '一', '二', '三', '四', '五', '六']
  return '周'+ week[datas]
}


export function textDispose (text) {
  const texts = text.split('\n')
  console.log(texts,"texts")
  return texts
}
