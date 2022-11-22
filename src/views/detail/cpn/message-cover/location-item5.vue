<template>
  <div class="location" @click="changeClick" v-memo="[positionModule]">
    <DetailMessageCover title-name="位置周边" extend-string="查看更多周边信息">
      <div class="head-top">
        <div ref="mapRef" class="d" v-if="isshow"></div>

        <div v-if="!isshow">
          <img class="img" :src="positionModule.mapUrl" alt="" />
          <div class="bai">
            <div class="summaryText-no address">
              <img
                src="https://pic.tujia.com/upload/festatic/mp/ndetail_black.png"
                alt=""
              />
              {{ positionModule.address }}
            </div>
            <div class="sanjiao"></div>

            <div class="fuzhi">
              <img
                src="https://pic.tujia.com/upload/festatic/mp/nedit_division.png"
                alt=""
              />
              <span>复制</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <img
          src="https://pic.tujia.com/upload/festatic/mp/small_bulbs.png"
          alt=""
        />
        &nbsp;数据仅供参考，具体以实际情况为准&nbsp;
        <img
          src="https://pic.tujia.com/upload/festatic/personCenter/tip_explain_mark.png"
          alt=""
        />
      </div>
      <div class="xian"></div>
    </DetailMessageCover>
  </div>
</template>

<script setup>
import DetailMessageCover from '@/components/detail-message-cover/detail-message-cover.vue'
import { computed, onActivated, onMounted, onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  positionModule: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const mapRef = ref()
const isshow = ref(true)
console.log(props.positionModule, 'true')
const longitude = computed(() => props.positionModule.longitude)
const latitude = computed(() => props.positionModule.latitude)
const address = computed(() => props.positionModule.address)
onMounted(() => {
  try {
    // const map = new BMap.Map(mapRef.value)
    // 定位
    const point = new BMap.Point(longitude.value, latitude.value)
    map.centerAndZoom(point, 15)
    // map.enableScrollWheelZoom(true)

    const marker = new BMap.Marker(point)
    map.addOverlay(marker)

    const opts = {
      width: 200, // 信息窗口宽度
      height: 50, // 信息窗口高度
      title: '房屋位置', // 信息窗口标题
      offset: new BMap.Size(2, -12)
    }

    const infoWindow = new BMap.InfoWindow(address.value, opts) // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point)
    marker.addEventListener('click', function () {
      console.log('object')
      map.openInfoWindow(infoWindow, point) //开启信息窗口
    })
    // 添加控件--------------------
    const scaleCtrl = new BMap.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    const zoomCtrl = new BMap.NavigationControl() // 添加缩放控件
    map.addControl(zoomCtrl)
    const cityCtrl = new BMap.CityListControl() // 添加城市列表控件
    map.addControl(cityCtrl)

    isshow.value = true
  } catch (e) {
    console.log('捕获到错误引用的错误==>', e)
    isshow.value = false
    // 捕获到错误引用的错误==> Uncaught ReferenceError: a is not defined
  }
})
onUpdated(() => {
  console.log(address.value)
  // 捕获异常

  try {
    const map = new BMap.Map(mapRef.value)
    // 定位
    const point = new BMap.Point(longitude.value, latitude.value)
    map.centerAndZoom(point, 15)
    // map.enableScrollWheelZoom(true)

    const marker = new BMap.Marker(point)
    map.addOverlay(marker)

    const opts = {
      width: 200, // 信息窗口宽度
      height: 50, // 信息窗口高度
      title: '房屋位置', // 信息窗口标题
      offset: new BMap.Size(2, -12)
    }

    const infoWindow = new BMap.InfoWindow(address.value, opts) // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point)
    marker.addEventListener('click', function () {
      console.log('object')
      map.openInfoWindow(infoWindow, point) //开启信息窗口
    })
    // 添加控件--------------------
    const scaleCtrl = new BMap.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    const zoomCtrl = new BMap.NavigationControl() // 添加缩放控件
    map.addControl(zoomCtrl)
    const cityCtrl = new BMap.CityListControl() // 添加城市列表控件
    map.addControl(cityCtrl)

    isshow.value = true
  } catch (e) {
    console.log('捕获到错误引用的错误==>', e)
    isshow.value = false
    // 捕获到错误引用的错误==> Uncaught ReferenceError: a is not defined
  }
})

const changeClick = () => {
  console.log('位置周边')
  router.push({
    path: '/location/map',
    query: {
      address: props.positionModule.address,
      longitude: props.positionModule.longitude,
      latitude: props.positionModule.latitude
    }
  })
}
</script>

<style lang="less" scoped>
.location {
  .d {
    width: 100%;
    height: 250px;
    border-radius: 5px 5px 0 0;
  }
  .img {
    position: relative;
    width: 100%;
    height: 137px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  .head-top {
    position: relative;
    // 三角
    .sanjiao {
      position: absolute;
      bottom: -6px;
      right: 48%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #fff;
    }
  }
  .bai {
    position: absolute;
    top: 13px;
    right: 17%;
    display: flex;
    align-items: center;
    background-color: #fff;
    font-size: 13px;
    height: 30px;
    width: 250px;
    padding: 0 10px;
    border-radius: 5px;
  }
  // :deep(.baidu) {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   padding: 0 10px;
  // }
  .address {
    flex: 1;
    font-size: 12px;
    color: #666;
    img {
      width: 12px;
      height: 12px;
      margin-right: 3px;
    }
  }
  .fuzhi {
    img {
      width: 8px;
      height: 25px;
      margin-right: 10px;
    }
    span {
      font-size: 12px;
      font-weight: 600;
    }
  }
  .footer {
    background-color: #f8fafc;
    color: #bfbfbf;
    margin: 15px auto;
    font-size: 12px;
    width: 240px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 2px 5px;
    img {
      width: 12px;
      height: 12px;
    }
  }
  .xian {
    width: 100%;
    height: 0;
    border-bottom: 1px solid #f6f6f6;
  }
}
</style>
