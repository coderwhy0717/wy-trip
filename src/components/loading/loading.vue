<template>
  <!-- 网络请求图标 -->
  <div class="loading" v-if="mainStore.isloading">
    <div class="bg">
      <img
        src="https://fe.tujiacdn.com/pwa/static/fevueui/images/loading/full-screen-loading.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    background: url(https://fe.tujiacdn.com/pwa/static/fevueui/images/loading/loading-bg.png)
      0 0 / 100% 100%;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
