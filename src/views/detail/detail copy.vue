<template>
  <div class="deail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <slideshow v-if="houseDeail" :itemdata="mainPart" />
    <div v-else>请求数据错误{{ houseDeail }} ...</div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { getDetail } from '@/services'
import { computed, ref } from 'vue'
import slideshow from './cpn/slideshow-cpn1.vue'
const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const onClickLeft = () => {
  router.back()
}
const houseDeail = ref({})
getDetail(houseId).then(
  (res) => {
    console.log(res.data, 'res.data')
    if (!res.data) console.log('res')
    houseDeail.value = res.data
  },
  (err) => {
    console.log(err)
  }
)
const mainPart = computed(() => {
  const imgarr = houseDeail.value?.mainPart?.topModule?.housePicture?.housePics
  imgarr.unshift({
    url: houseDeail.value?.mainPart?.topModule?.housePicture?.defaultPictureURL,
    enumPictureCategory: imgarr[0].enumPictureCategory
  })
  return imgarr
})
</script>

<style lang="less" scoped>
.deail {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
</style>
<!-- http://codercba.com:1888/api/detail/infos?houseld=51953704 -->
