<template>
  <div class="home" ref="homeRef">
    <div class="nav-bar">
      <div class="title">鸿源旅途</div>
    </div>
    <div class="banner">
      <img src="http://xxcijmz.top/assets/banner.3d82bd25.webp" alt="" />
    </div>
    <div class="item region">
      <div class="left" @click="changeRegion">
        {{ cityStore.currentCity.cityName ?? '浙江' }}
      </div>
      <div class="right">
        <span>我的位置</span>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </div>
    <div class="item day" @click="mainStore.showCalendar = true">
      <div class="day-left">
        <span class="in">入住</span>
        <span class="in-day">{{ formatMonthDay(inDay) }}</span>
      </div>
      <div class="late">共 {{ formatDiif(inDay, endDay) }} 晚</div>
      <div class="day-right">
        <span class="in">离店</span>
        <span class="in-day">{{ formatMonthDay(endDay) }}</span>
      </div>
    </div>

    <div class="item pirc">
      <div>价格不限</div>
      <div>人数不限</div>
    </div>
    <div class="item input-page">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="item hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="hot-area"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="item serachbtm">
      <div class="textbtm">开始搜索</div>
    </div>
    <!-- 滑块 -->
    <div class="item Slider">
      <template v-for="item in categories">
        <div class="Slider-item">
          <img :src="item.pictureUrl" alt="" />
          <div>{{ item.title }}</div>
        </div>
      </template>
    </div>
    <!-- 热门精选 -->
    <div class="hot-list">
      <template v-for="(item, index) in houseList" :key="item.houseId">
        <home-cover-v9
          v-if="item.discoveryContentType === 9"
          :house-data="item.data"
          @click="itemClick(item.data)"
        />
        <home-cover-v3
          v-else-if="item.discoveryContentType === 3"
          :house-data="item.data"
          @click="itemClick(item.data)"
        />
      </template>
    </div>
    <button @click="changeHouseList">
      点击加载更多 {{ houseList.length }}
    </button>
    <!-- 滚动时450px 顶部的 搜索框 -->
    <scrollSearch v-if="isshowBar" />
  </div>
</template>

<script>
export default { name: 'home' }
</script>
<script setup>
import { useCityStore } from '@/stores/modules/city'
import { watch, computed, ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import { formatMonthDay, formatDiif } from '@/utils/format-date'
import { useHomeStore } from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
import { scrollHooks } from '@/hooks/home-scroll'
import useMainStore from '@/stores/modules/main'
import homeCoverV9 from '@/components/home-cover-v9/home-cover-v9.vue'
import homeCoverV3 from '@/components/home-cover-v3/home-cover-v3.vue'
import scrollSearch from '@/components/scroll-search/scroll-search.vue'
const router = useRouter()
const cityStore = useCityStore()

// // 初始化 入住 离店 时间处理
const mainStore = useMainStore()
const { inDay, endDay, deailShow } = storeToRefs(mainStore)

// const startDate = computed(() => formatMonthDay(inDay.value))
// const endDate = computed(() => formatMonthDay(endDay.value))
// const stayCount = ref(formatDiif(inDay.value, endDay.value))

const changeRegion = () => {
  router.push('/city')
}
// const confirm = (value) => {
//   mainStore.inDay = value[0]
//   mainStore.endDay = value[1]
//   stayCount.value = formatDiif(value[0], value[1])
//   showCalendar.value = false
// }

// 获取热门建议bingHotSuggests
const homeStore = useHomeStore()
homeStore.bingHotSuggests()
homeStore.getCategories()
homeStore.getHouseList()
const { hotSuggests, categories, houseList } = storeToRefs(homeStore)

const changeHouseList = () => {
  console.log('加载更多')
  homeStore.getHouseList()
}
// 加载更多
const homeRef = ref()

const { isReach, scrollTop } = scrollHooks(homeRef)
watch(isReach, (newisReach) => {
  if (newisReach) {
    homeStore.getHouseList().then(() => {
      console.log('object')
      isReach.value = false
    })
  }
})
const isshowBar = computed(() => scrollTop.value >= 480)
const currentId = ref()
//点击 跳转详情页
const itemClick = (item) => {
  // console.log(item.houseId)
  // 控制 deail页面 视觉效果
  if (currentId.value === item.houseId) {
    deailShow.value = true
  } else {
    deailShow.value = false
  }
  router.push('/deail/' + item.houseId)
  currentId.value = item.houseId
  // console.log(currentId.value, ' currentId.value')
}

// 跳转回home时，保留原来的位置
onActivated(() => {
  console.log(scrollTop.value, 'scroll')
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 55px;
  ::-webkit-scrollbar {
    width: 0px !important;
  }
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-bottom: 1px solid #f2f2f2;
  .title {
    font-size: 16px;
    color: var(--primary-color);
    font-weight: 700;
  }
}
.banner {
  img {
    width: 100%;
  }
}
.region {
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 5px 20px;
  .left {
    flex: 1;
  }
  .right {
    display: flex;
    align-items: center;
    img {
      height: 20px;
      width: 20px;
    }
  }
}
.item {
  height: 45px;
  padding: 0 22px;
  .in {
    display: block;
    font-size: 14px;
    color: #999;
  }
  .in-day {
    margin-top: 3px;
    color: #333;
    font-size: 15px;
    font-weight: 500;
  }
}
.day {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .day-left {
    font-size: 16px;
  }
  .day-right {
  }
}
.calendar {
}

.pirc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  margin: 10px 0;
}
.input-page {
  color: var(--text-color);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.hot-suggests {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  .hot-area {
    margin: 5px 8px 0 0;
    border-radius: 14px;
    font-size: 12px;
    padding: 4px 8px;
    line-height: 1;
  }
}
.serachbtm {
  display: flex;
  align-items: center;
  margin: 10px 20px;
  border-radius: 20px;
  background-image: var(--theme-linear-gradient);
  .textbtm {
    margin: 0 auto;
    color: #fff;
    font-size: 18px;
  }
}
.Slider {
  display: flex;
  overflow-x: auto;
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .Slider-item {
    text-align: center;
    width: 75px;
    margin-bottom: 8px;
    margin-right: 5px;
    flex-shrink: 0;
    font-size: 14px;
    img {
      width: 32px;
      height: 32px;
    }
  }
}
.hot-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f5f7f9;
  padding: 0 10px;
}
</style>
