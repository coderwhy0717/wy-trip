import dayjs from "dayjs"
// import arraySupport from "dayjs/plugin/arraySupport"
// dayjs.extend(arraySupport)
// 自定义全局指令
export default function directiveTime (app) {
  app.directive('time',{
    mounted(el,biandings) {
      console.dir(el.textContent, 'mounted')
      console.dir(biandings.value, 'mounted')
      let value = biandings.value
      if(!biandings.value) value ='YYYY-MM-DD HH:mm:ss'
      if(dayjs(el.textContent).isValid()) {
          let time = el.textContent
          const newTime = dayjs(time).format(value)
          el.textContent = newTime
      }else {
        el.textContent = '初始化文本不是时间，text:'+ el.textContent
      }
    },
    beforeUpdated(el) {
      // console.dir(el.textContent, 'beforeUpdated')
      // let time = el.textContent
      // const newTime = dayjs(time).format('YYYY-MM-DD HH:mm:ss')
      // el.textContent = newTime
    },
    updated(el,biandings) {
      console.dir(el.textContent, 'updated')
      console.dir(biandings.value, 'updated')
      let value = biandings.value
      if(!biandings.value) value ='YYYY-MM-DD HH:mm:ss'
      console.log(dayjs(el.textContent).isValid(),"校验")
      if(dayjs(el.textContent).isValid()) {
          let time = new Date()
          el.textContent = dayjs(time).format(value)
      }
      // console.dir(biandings, 'updated')

    }
  })
}
