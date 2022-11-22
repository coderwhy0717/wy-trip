<template>
  <div class="city">
    <div class="nav-component">
      <!-- 搜索框 -->
      <van-search
        v-model="inputValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="changeClear"
      />
      <!-- 区分地区 -->
      <van-tabs v-model:active="barActive" swipeable>
        <van-tab
          v-for="(item, key) in region"
          :title="item.title"
          :key="key"
          :name="key"
        >
        </van-tab>
      </van-tabs>
    </div>
    <!-- 所有地区 -->
    <!-- 直接循环两个组件 把数据传送进去 优化性能 直接 -->
    <template v-for="(item, key) in region" :key="key">
      <MessageCpt v-show="barActive === key" :message="item" />
    </template>
    <!-- <MessageCpt :message="message"></MessageCpt> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCityStore } from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia'
import MessageCpt from './city-component/message-cpt.vue'
import { useRouter } from 'vue-router'
const inputValue = ref()
const barActive = ref()

const router = useRouter()
const cityStore = useCityStore()

cityStore.getRequestCityAll()

const { region } = storeToRefs(cityStore)
// const message = computed(() => region.value[barActive.value])

const changeClear = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.city {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  .nav-component {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
}
</style>
