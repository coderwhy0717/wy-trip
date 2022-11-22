<template>
  <div class="deail" ref="objRef">
    <navBars
      ref="navbarsRef"
      v-show="isshowBars"
      :names="names"
      @change-click="changeClick"
      :scrollTop="scrollTop"
    />
    <div class="scroll">
      <navBar />

      <div v-show="deailShow">
        <div v-if="houseDeail" v-memo="[mainPart]">
          <slideshowCpn1
            :itemdata="mainPart"
            :pricePart="houseDeail.pricePart?.priceModule?.product"
          />

          <navTitleCpn2
            name="概览"
            :ref="getcommonRef"
            :topModule="houseDeail?.mainPart?.topModule"
          />
          <SelectionHouseCpn3
            name="房源"
            :ref="getcommonRef"
            v-if="houseDeail.currentHouse"
            :current-house="houseDeail.currentHouse"
          />
          <FacilityItem1
            name="设施"
            :ref="getcommonRef"
            v-if="houseDeail.mainPart"
            :itemdata="houseDeail.mainPart.dynamicModule"
          />
          <LandlordItem2
            name="房东"
            :ref="getcommonRef"
            v-if="houseDeail.mainPart"
            :landlordModule="houseDeail.mainPart.dynamicModule?.landlordModule"
          />
          <roomer-item3
            name="点评"
            :ref="getcommonRef"
            v-if="houseDeail.mainPart"
            :comment-module="houseDeail.mainPart.dynamicModule?.commentModule"
          />
          <ReserveItem4
            name="须知"
            :ref="getcommonRef"
            v-if="houseDeail.mainPart"
            :rules-module="houseDeail.mainPart.dynamicModule?.rulesModule"
          />
          <LocationItem5
            name="周边"
            :ref="getcommonRef"
            v-if="houseDeail.mainPart"
            :position-module="houseDeail.mainPart.dynamicModule?.positionModule"
          />
          <PriceExplainItem6
            v-if="houseDeail.mainPart"
            :introduction-module="houseDeail.mainPart.introductionModule"
            :ensure-module="houseDeail.mainPart.ensureModule"
            :bgc="houseDeail.mainPart.businessLicenseModule"
          />
        </div>
        <div v-else>请求数据错误{{ houseDeail }} ...</div>
        <navBtm
          v-if="houseDeail.currentHouse"
          :current-house="houseDeail.currentHouse"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default { name: 'detail' }
</script>
<script setup>
import { useRoute } from 'vue-router'
import { getDetail } from '@/services'
import {
  computed,
  onActivated,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  watch
} from 'vue'
import navBar from '@/components/nav-bar/nav-bar.vue'
import slideshowCpn1 from './cpn/slideshow-cpn1.vue'
import navTitleCpn2 from './cpn/nav-title-cpn2.vue'
import SelectionHouseCpn3 from './cpn/Selection-house-cpn3.vue'
import FacilityItem1 from './cpn/message-cover/facility-item1.vue'
import LandlordItem2 from './cpn/message-cover/landlord-item2.vue'
import roomerItem3 from './cpn/message-cover/roomer-item3.vue'
import ReserveItem4 from './cpn/message-cover/reserve-item4.vue'
import LocationItem5 from './cpn/message-cover/location-item5.vue'
import PriceExplainItem6 from './cpn/message-cover/price-explain-item6.vue'
import navBtm from './cpn/nav-btm.vue'
import { scrollHooks } from '@/hooks/home-scroll'
import navBars from '@/components/nav-bars/nav-bars.vue'
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia'
// const names = [
//   {
//     name: '概览',
//     value: 0
//   },
//   {
//     name: '房源',
//     value: 553
//   },
//   {
//     name: '设施',
//     value: 817
//   },
//   {
//     name: '房东',
//     value: 1164
//   },
//   {
//     name: '点评',
//     value: 1497
//   },
//   {
//     name: '须知',
//     value: 1912
//   },
//   {
//     name: '周边',
//     value: 2407
//   }
// ]
const route = useRoute()
const houseId = route.params.id
console.log(houseId, 'house')
const mainStore = useMainStore()
const { deailShow } = storeToRefs(mainStore)
// 整个对象ref
const objRef = ref()
// bars的对象实例
const navbarsRef = ref()
//控制bars组件显示
const isshowBars = ref(false)
// 网络获取数据存入
const houseDeail = ref({})
// 网络请求
getDetail(houseId).then(
  (res) => {
    // console.log(res.data, 'res.data')
    deailShow.value = true
    if (houseDeail.value === res.data) {
      console.log('nihoa啊')
    }
    if (!res.data) {
      houseDeail.value = false
      return
    }
    houseDeail.value = res.data
    console.log(res.data, 'object')
  },
  (err) => {
    console.log(err)
  }
)
// 滚动
const { scrollTop, isReach } = scrollHooks(objRef)
console.log(scrollTop.value, 'scrollTop滚动')
// 判断是滚动距离显示bars
// 获取每个组件ref
const arrEls = ref({})
// ref多个绑定 使用函数绑定
const getcommonRef = (value) => {
  if (!value) return
  // 获取ref元素上的属性名
  const name = value.$el.getAttribute('name')
  // 使用属性名作为对象的key 把属性的对象el放进去
  arrEls.value[name] = value.$el
}

// 小bug 变量控制bars内部点击滚动 还是滚动监听了执行
//1. 第一种方法
// let istrue.value = false
// let currentSu = -1
// 2.
let istrue = ref(false)
// 记录点击的索引
let currentindex = ref(-1)
// 初始化bars
const names = computed(() => Object.keys(arrEls.value))
// 记录点击需要滚动的位置
let currentSu = ref()
const gun = ref()
// // 监听滚动获取index
watch(scrollTop, (newValue) => {
  // 设置bars是否显示
  if (scrollTop.value >= 300) {
    isshowBars.value = true
  } else {
    isshowBars.value = false
  }
  // 取消内部点击 改变颜色 滚动了就根据当前的索引变色
  navbarsRef.value?.bac(currentindex.value)

  // navbarsRef.value?.bac(currentindex.value)
  // 初始化值 如果里面没有值 就是用最后的一个值 这样第一次直接滚动最下面就没有bug bars就不会没有变色
  if (!currentSu.value) {
    currentSu.value = arrEls.value[names.value.slice(-1)[0]]?.offsetTop
  }
  //1. 当指定滚动的位置 等于监听最新滚动的位置时 设置值 放行
  if (currentSu.value === newValue) {
    istrue.value = false
  }
  if (
    currentSu.value > newValue &&
    isReach.value &&
    currentindex.value === names.value.length - 1
  ) {
    istrue.value = false
    navbarsRef.value?.bac(currentindex.value - 1)
    currentindex.value = currentindex.value - 1
    currentSu.value = newValue
    return
  }

  console.log(currentSu.value, newValue)
  // 控制滚动时机 是否下面代码 放行 执行
  gun.value = istrue.value
  if (istrue.value) {
    console.log('istrue.value')
    return
  }

  // 这里可以 性能优化
  const els = Object.values(arrEls.value)
  const arr = els.map((el) => el.offsetTop)

  // 获取组件的每个的位置scrollTop距离 去和 当前滚动的值相比较 如果大于就是当前索引 -1 就是 到了当前位置歌词等
  let index = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > newValue - 10) {
      index = i - 1
      break
    }
  }
  // index记录索引也需要改
  gun.value = newValue

  currentindex.value = index
  //2.判断有没有滚动到准确的位置
  // !! 换了手机型号 滚动文本长度不够 就会有bug
  if (navbarsRef.value?.currentindex !== index) {
    navbarsRef.value?.bac(index)
  }
  // }
})
// bars内部点击事件
const changeClick = ({ item, index }) => {
  // console.log(item, index)
  let distance = arrEls.value[item].offsetTop
  // console.log(distance + 15, 'instance')
  // 使滚动到顶部
  if (index == 0) {
    distance = -100
  }
  // 页面的每个组件头部的灰色线
  distance = distance + 15
  objRef.value.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
  // 点击滚动到的 距离
  currentSu.value = distance
  // 第二次点击index等于上一次的index的话  设置false 这个时候不滚动 让监听器监听滚动
  if (currentindex.value == index) {
    istrue.value = false
    //     针对 判断点击的 索引 如果等于最后一个 并且 触底了 让监听器监听滚动
  } else if (index === names.value.length - 1 && isReach.value) {
    istrue.value = false
  } else {
    istrue.value = true
  }
  currentindex.value = index
  // 记录点击的index
  console.log(distance, 'distance')
  console.log(istrue.value, '点击了的')
}

const mainPart = computed(() => {
  let imgarr = []
  imgarr = houseDeail.value?.mainPart?.topModule?.housePicture?.housePics
  imgarr?.unshift({
    url: houseDeail.value?.mainPart?.topModule?.housePicture?.defaultPictureURL,
    enumPictureCategory: '0',
    title: '【封面1】',
    orderIndex: -1
  })
  return imgarr
})

// kepactive 组件活跃的时候
// onActivated(() => {
// 控制bars显示否则有bug
isshowBars.value = false

// 点击地图页面 返回滚动原位置
// objRef.value?.scrollTo({
//   top: scrollTop.value
// })
// console.log('setup函数创建')
// onBeforeUnmount(() => {
//   console.log(objRef.value, 'deailt销毁前')
// })
// onUnmounted(() => {
//   console.log(objRef.value, 'deailt销毁了')
// })
// onMounted(() => {
//   console.log(objRef.value, '元素挂载后')
// })

// })
</script>

<style lang="less" scoped>
.deail {
  position: relative;
  z-index: 2;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;
  /* 局部滚动条样式设置 & */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
<!-- http://codercba.com:1888/api/detail/infos?houseld=51953704 -->
