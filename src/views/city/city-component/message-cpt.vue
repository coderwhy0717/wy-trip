<template>
  <div class="message-cpt">
    <van-index-bar :index-list="cityAZ">
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="(item, index) in message?.hotCities" :key="index">
          <div class="hotCityName" @click="changebtn(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(iten, indea) in message?.cities" :key="indea">
        <van-index-anchor :index="iten.group" />
        <template v-for="(itens, index) in iten.cities" :key="index">
          <van-cell :title="itens.cityName" @click="changebtn(itens)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { useCityStore } from '@/stores/modules/city'
import { computed } from 'vue-demi'
import { useRouter } from 'vue-router'

const props = defineProps({
  message: {
    type: Object,
    default: () => ({})
  }
})
const cityAZ = computed(() => [
  '#',
  ...props.message.cities.map((item) => item.group)
])
const router = useRouter()
const citystore = useCityStore()
const changebtn = (item) => {
  console.log(item)
  citystore.currentCity = item
  router.back()
}
</script>

<style lang="less" scoped>
.message-cpt {
  height: calc(100vh - 98px);
  overflow-y: auto;
  // 滚动条设置
  &::-webkit-scrollbar {
    display: none;
    /* background-color: #000; */
  }
  // ::-webkit-scrollbar-thumb {
  //   background: rgba(165, 165, 165, 0.5);
  //   border-radius: 10px;
  // }
  .hot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 25px 10px 10px;
    .hotCityName {
      width: 70px;
      height: 28px;
      margin: 6px 0;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
    }
  }
}
</style>
