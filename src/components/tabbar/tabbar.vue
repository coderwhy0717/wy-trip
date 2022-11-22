<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="red" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="like" to="/favor">收藏</van-tabbar-item>
      <van-tabbar-item icon="description" to="/order">订单</van-tabbar-item>
      <van-tabbar-item to="/message">
        <span>消息</span>
        <template #icon>
          <van-icon name="comment" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="less" scoped>
.tabbar {
}
</style>
