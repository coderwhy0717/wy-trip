<template>
  <div class="slideshow">
    <!-- :autoplay="3000" -->

    <van-swipe :initial-swipe="currentIndex">
      <template v-for="(item, index) in itemdata" :key="index">
        <van-swipe-item>
          <img class="img" :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <span
            class="item"
            :class="{
              active: active == 0
            }"
            @click="changeClick(0)"
          >
            封面
            <span v-if="active == 0"> 1/1 </span>
          </span>

          <template v-for="(value, key, indexs) in obgImg" :key="key">
            <span
              class="item"
              :class="{
                active:
                  itemdata[active]?.enumPictureCategory == key && active !== 0
              }"
              @click="changeClick(value)"
            >
              {{ qubain(value[1].title) }}
              <span
                v-if="
                  itemdata[active]?.enumPictureCategory == key && active !== 0
                "
              >
                {{ getCurrentIndex(itemdata[active]) }}/
                <span>{{
                  itemdata[active]?.enumPictureCategory == obgImgkey
                    ? value.length - 1
                    : value.length
                }}</span>
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  itemdata: {
    type: Array,
    default: () => []
  }
})
console.log(props.coverImg)
const obgImg = {}

//1---- 把封面塞进第一个数组里面
for (const item of props.itemdata) {
  let valueArray = obgImg[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    obgImg[item.enumPictureCategory] = valueArray
  }

  valueArray.push(item)
}
const obgImgkey = ref(Object.keys(obgImg)[0])

console.log(obgImg, '----')
const nameReg = /【(.*?)】/i
const qubain = (name) => {
  const arr = nameReg.exec(name)
  return arr[1].replace('1', '')
}
const getCurrentIndex = (item) => {
  const valueArray = obgImg[item.enumPictureCategory]
  // console.log(
  //   obgImgkey.value,
  //   obgImg[obgImgkey.value] === valueArray,
  //   'obgImg[0] === valueArray'
  // )
  return obgImg[obgImgkey.value] === valueArray
    ? valueArray.findIndex((data) => data === item)
    : valueArray.findIndex((data) => data === item) + 1
}
const currentIndex = ref(0)
const changeClick = (itemArr) => {
  // 点击封面传入0
  if (itemArr === 0) {
    currentIndex.value = 0
    return
  }
  // 点击其他传入数组 使轮播图跳转到 正确的照片index
  const onekey = itemArr[0].enumPictureCategory
  let oneindex = 0
  console.log(itemArr == obgImgkey.value)
  if (onekey == obgImgkey.value) oneindex = 1
  const res = props.itemdata.findIndex(
    (data) => data.url === itemArr[oneindex].url
  )
  currentIndex.value = res
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
        padding: 1px 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #222;
      }
    }
  }
}
</style>
