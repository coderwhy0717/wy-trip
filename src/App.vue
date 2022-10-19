<template>
  <div>
    app
  <router-view></router-view>
  <van-tabbar v-model="active" active-color="red">
  <van-tabbar-item icon="home-o" to="/home" >首页</van-tabbar-item>
  <van-tabbar-item icon="like" to="/favor" >收藏</van-tabbar-item>
  <van-tabbar-item icon="description" to="order">订单</van-tabbar-item>
  <van-tabbar-item to="message">
      <span>消息</span>
      <template  #icon>
        <van-icon name="comment" />
      </template>
  </van-tabbar-item>
</van-tabbar>

  </div>
</template>


<script setup>
import { ref } from 'vue';

  const active = ref(0)
</script>

<style lang="less" scoped>
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 50px;
    align-items: center;
    box-shadow: 0px 1px 5px 1px rgb(100,100,100,0.8);
    div {
      flex: 1;
      text-align: center;
      justify-content: center;
      border: 1px solid red;
    }
  }
</style>
