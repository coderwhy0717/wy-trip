<template>
  <!-- 滚动时480px 顶部的 搜索框 -->
  <div class="scroll-search">
    <div class="left" @click="mainStore.showCalendar = true">
      <div class="in">
        <span>住</span>
        <span class="ina"> {{ indaystate }}</span>
      </div>
      <div class="out">
        <span>离</span>
        <span class="outa"> {{ enddaystate }} </span>
        <p class="p icon-dian"></p>
      </div>
    </div>
    <div class="right">
      <span>关键字/位置/民宿名</span>
      <p class="search icon-dian"></p>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main'
import { formatMonthDay } from '@/utils/format-date'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const mainStore = useMainStore()
const { inDay, endDay } = storeToRefs(mainStore)
const indaystate = computed(() => formatMonthDay(inDay.value, 'MM.DD'))
const enddaystate = computed(() => formatMonthDay(endDay.value, 'MM.DD'))

// const emits = defineEmits(['showCalendar'])

// const showCalendar = () => {
//   emits('showCalendar')
// }
</script>

<style lang="less" scoped>
.scroll-search {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;

  background-color: #fff;
  padding: 10px 15px;
  color: #999;

  .left {
    position: relative;
    background-color: #f2f4f6;
    border-radius: 10px 0 0 10px;
    border-right: 2px solid #fff;
    font-size: 10px;
    padding: 5px 0 5px 10px;
    .in {
      .ina {
        color: #000;
      }
    }
    .out {
      .outa {
        color: #000;
      }
    }
    .p {
      display: inline-block;
      background-position: -403px -317px;
      width: 5px;
      height: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
    flex: 1;
    background-color: #f2f4f6;
    border-radius: 0 10px 10px 0;
    span {
      font-size: 14px;
    }
    .search {
      display: inline-block;
      background-position: -29px -151px;
      background-size: 207px 192px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
