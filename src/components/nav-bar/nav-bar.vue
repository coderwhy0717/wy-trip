<template>
  <div class="nav-bar">
    <slot name="left">
      <div class="left" @click="change">
        <van-icon name="arrow-left" /><span>旅途</span>
      </div>
    </slot>
    <slot name="center">
      <div class="center">房屋详情</div>
    </slot>
    <slot name="right">
      <div class="right"></div>
    </slot>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const change = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  .left {
    width: 100px;
    text-align: left;
    padding-left: 15px;
    color: var(--primary-color);
  }
  .center {
    flex: 1;
    font-size: 15px;
    text-align: center;
  }
  .right {
    width: 100px;
  }
}
</style>
