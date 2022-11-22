<template>
  <div class="favor">
    <h2>favor</h2>
    <template v-for="(item, key, index) in message" :key="key">
      <div>key:{{ key }}, item: {{ item }}</div>
    </template>
    <div class="baidu" ref="mapRefsa"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const message = { a: 'a1', b: 'b2' }
const mapRefsa = ref()
onMounted(() => {
  console.log(window, 'window')
  const map = new BMap.Map(mapRefsa.value) // 创建地图实例

  const point = new BMap.Point(116.404, 39.915) // 创建点坐标
  map.centerAndZoom(point, 15)
  // map.enableScrollWheelZoom(true)

  const marker = new BMap.Marker(point)
  map.addOverlay(marker)

  const opts = {
    width: 200, // 信息窗口宽度
    height: 'auto', // 信息窗口高度
    title: '房屋位置', // 信息窗口标题
    message: '房子的位置'
  }

  const infoWindow = new BMap.InfoWindow('props.positionModule.address', opts) // 创建信息窗口对象
  map.openInfoWindow(infoWindow, point)
  marker.addEventListener('click', function () {
    console.log('object')
    map.openInfoWindow(infoWindow, point) //开启信息窗口
  })
  // 添加控件--------------------
  const scaleCtrl = new BMap.ScaleControl() // 添加比例尺控件
  map.addControl(scaleCtrl)

  const cityCtrl = new BMap.CityListControl() // 添加城市列表控件
  map.addControl(cityCtrl)
  const zoomCtrl = new BMap.NavigationControl() // 添加缩放控件
  map.addControl(zoomCtrl)
})
</script>

<style lang="less" scoped>
.baidu {
  margin: 0 auto;
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 0;
}
</style>
