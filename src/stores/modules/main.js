import { defineStore } from "pinia";
// 初始化 入住 离店 时间处理
const beforDay = new Date()
const inday = new Date()
const endday = new Date()
endday.setDate(inday.getDate() + 1)
beforDay.setDate(inday.getDate() - 1)

const useMainStore = defineStore('main', {
  state:() => ({
    token:'',

    beforDay: beforDay,
    inDay: inday,
    endDay: endday,

    showCalendar: false,
    isloading: false,
    showbars: false,

    deailShow: true,//// 控制 deail页面 视觉效果
  })
})



export default useMainStore
