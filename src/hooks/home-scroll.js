import { onMounted,onUnmounted,ref} from "vue"
import { throttle } from 'underscore'
export function scrollHooks(obj) {
  console.log(obj,"obj")
  let el = window
  const isReach = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const wactjian = throttle(() => {
    if(el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = Math.floor(document.documentElement.scrollTop)
      scrollHeight.value = document.documentElement.scrollHeight
    }else {
      clientHeight.value = el.clientHeight
      // scrollTop.value = Math.ceil(el.scrollTop)
      scrollTop.value = Math.round(el.scrollTop)//四舍五入
      console.dir(el,"el")
      // scrollTop.value = Math.floor(el.scrollTop)
      // scrollTop.value = parseInt(el.scrollTop)
      // console.dir(el)
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value < scrollHeight.value) {
      console.log("没有滚到底部")
      isReach.value = false
    }
    console.log(clientHeight.value, scrollTop.value, scrollHeight.value)
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部")
      isReach.value = true
    }
    // if (scrollHeight.value - (clientHeight.value + scrollTop.value) <= 100) {
    //   homeStore.getHouseList()
    //   console.log('加载更多')
    // }
},500)
  onMounted(() => {
    if(obj) el = obj.value
    el.addEventListener('scroll',wactjian)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll',wactjian)
  })
  return {isReach,clientHeight,scrollHeight,scrollTop}
}



export function assemble (tip, hig) {
  // console.log(tip, hig)
  let newTip = []
  if (!hig) {
    newTip.push(tip)
  } else {
    newTip = tip.split(hig)
    newTip.splice(1, 0, hig)
  }
  // console.log(newTip, 'tip')
  return newTip
}
