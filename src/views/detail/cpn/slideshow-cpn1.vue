<template>
  <div class="slideshow">
    <!-- :autoplay="3000" -->
    <van-swipe :height="250" ref="swipeToRef" lazy-render>
      <!-- 照片 -->
      <template v-for="(item, index) in itemdata" :key="index">
        <van-swipe-item>
          <img class="img" :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <!-- 指示器 -->
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, indexs) in obgImgs" :key="key">
            <span
              class="item"
              :class="{
                active: itemdata[active]?.enumPictureCategory == key
              }"
              @click="changeClick(value)"
            >
              {{ qubain(value[0].title) }}

              <span v-if="itemdata[active]?.enumPictureCategory == key">
                {{ getCurrentIndex(itemdata[active]) }}/
                <span>{{ value.length }}</span>
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
    <!-- 优惠的价格 -->
    <div
      v-if="pricePart.promoTotalPriceIcon"
      class="price"
      :style="{
        backgroundImage: `url(${pricePart.promoTotalPriceIcon.icon})`
      }"
    >
      <span class="price-title">{{ pricePart.promoTotalPriceIcon.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  itemdata: {
    type: Array,
    default: () => []
  },
  pricePart: {
    type: Object,
    default: () => ({})
  }
})
const obgImgs = computed(() => {
  const obgImg = {}
  //1----- 把封面独立一个数组
  for (const item of props.itemdata) {
    let valueArray = obgImg[item.enumPictureCategory]
    if (!valueArray) {
      valueArray = []
      obgImg[item.enumPictureCategory] = valueArray
    }

    valueArray.push(item)
  }
  return obgImg
})

const nameReg = /【(.*?)】/i
const qubain = (name) => {
  const arr = nameReg.exec(name)
  return arr[1].replace('1', '')
}
const getCurrentIndex = (item) => {
  const valueArray = obgImgs.value[item.enumPictureCategory]
  return valueArray.findIndex((data) => data === item) + 1
}
// 获取 swipe 组件实例
const swipeToRef = ref()
const changeClick = (itemArr) => {
  console.log(itemArr)
  const res = props.itemdata.findIndex(
    (data) =>
      data.orderIndex === itemArr[0].orderIndex && data.url === itemArr[0].url
  )
  // 调用 swipe 组件实例 内部方法切换指定index位置
  swipeToRef.value.swipeTo(res)
}
</script>

<style lang="less" scoped>
.slideshow {
  .img {
    width: 414.4px;
    height: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 12px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #fff;
    z-index: 99;
    .item {
      margin: 0 3px;
      &.active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #222;
      }
    }
  }
  .price {
    height: 30px;
    width: 100%;
    text-align: center;
    line-height: 30px;
    .price-title {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>
