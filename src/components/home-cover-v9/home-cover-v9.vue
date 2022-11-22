<template>
  <div class="home-cover-v9">
    <img :src="houseData.image.url" alt="" />
    <div class="content">
      <div class="summaryText">{{ houseData.summaryText }}</div>
      <div class="title">{{ houseData.houseName }}</div>
      <!-- 价格 -->
      <div class="pric">
        <van-rate v-model="rete" readonly color="#fff" allow-half />
        <span class="finalPrice">￥{{ houseData.finalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  houseData: {
    type: Object,
    defalut: () => ({})
  }
})
const rete = computed(() => Number(props.houseData.commentScore))
</script>

<style lang="less" scoped>
.home-cover-v9 {
  width: calc(50% - 10px);
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 10px;
  img {
    width: 100%;
    border-radius: 6px;
    position: relative;
    vertical-align: middle;
  }
  .content {
    position: absolute;
    bottom: 3px;
    color: #fff;
    padding: 10px 10px 0 10px;
    .pric {
      display: flex;
      align-items: center;
      justify-content: space-between;
      --van-rate-icon-size: 12px;
      .finalPrice {
        font-family: 'PingFangSC-Medium';
        font-size: 16px;
      }
    }
  }
}
</style>
