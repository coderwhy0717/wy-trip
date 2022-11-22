<template>
  <div class="calendar">
    <!-- 日历 -->
    <van-calendar
      v-model:show="showCalendar"
      @confirm="confirm"
      :round="false"
      type="range"
      color="#ff9854"
    />
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia'
// const showCalendar = ref(false)
// 初始化 入住 离店 时间处理
const mainStore = useMainStore()
const { showCalendar } = storeToRefs(mainStore)

// const stayCount = ref(formatDiif(inDay.value, endDay.value))

const confirm = (value) => {
  mainStore.inDay = value[0]
  mainStore.endDay = value[1]
  // mainStore.stayCount.value = formatDiif(value[0], value[1])
  mainStore.showCalendar = false
}

// const startDate = computed(() => formatMonthDay(inDay.value))
// const endDate = computed(() => formatMonthDay(endDay.value))
</script>

<style lang="less" scoped>
.calendar {
  --van-calendar-popup-height: 100%;
}
</style>
