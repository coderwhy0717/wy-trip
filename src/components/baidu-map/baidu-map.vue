<template>
  <!-- <div>aaa你好aaa</div> -->
  <div class="baidu-map">
    <div class="nav">
      <NavBar>
        <template #center>
          <div class="center">房屋地图</div>
        </template>
      </NavBar>
    </div>
    <div class="map" ref="baidumapRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '../nav-bar/nav-bar.vue'

const route = useRoute()
console.log(route)
console.log(route.query.address, 'title')

const baidumapRef = ref()

onMounted(() => {
  // 捕获异常
  try {
    const map = new BMap.Map(baidumapRef.value)
    // 定位
    const point = new BMap.Point(route.query.longitude, route.query.latitude)
    map.centerAndZoom(point, 15)
    // map.enableScrollWheelZoom(true)
    const marker = new BMap.Marker(point)
    map.addOverlay(marker)

    const opts = {
      width: 200, // 信息窗口宽度
      height: route.query.address.length * 4, // 信息窗口高度
      title: '房屋位置', // 信息窗口标题
      offset: new BMap.Size(2, -12)
    }
    // var infoBox = new BMapLib.InfoBox(map)
    // infoBox.getOffset()
    const infoWindow = new BMap.InfoWindow(route.query.address, opts) // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point)
    marker.addEventListener('click', function () {
      console.log('object')
      map.openInfoWindow(infoWindow, point) //开启信息窗口
    })
    // 添加控件--------------------ss
    const scaleCtrl = new BMap.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    const zoomCtrl = new BMap.NavigationControl() // 添加缩放控件
    map.addControl(zoomCtrl)
    const cityCtrl = new BMap.CityListControl() // 添加城市列表控件
    map.addControl(cityCtrl)
  } catch (e) {
    console.log('捕获到错误引用的错误==>', e)
    // 捕获到错误引用的错误==> Uncaught ReferenceError: a is not defined
  }
})
</script>

<style lang="less" scoped>
.baidu-map {
  position: relative;
  z-index: 9;
}
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
  .center {
    flex: 1;
    text-align: center;
    color: #000;
  }
}
.map {
  width: 100%;
  height: 100vh;
  border-radius: 5px 5px 0 0;
}
</style>
