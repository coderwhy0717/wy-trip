<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home,favor">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <Tabbar />
    <loading />
    <Calendar />
  </div>
</template>
<!--  --port 4173 -->
<script setup>
import Tabbar from './components/tabbar/tabbar.vue'
import loading from './components/loading/loading.vue'
import Calendar from './components/calendar/calendar.vue'
</script>

<style lang="less" scoped>
// .tabs {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   display: flex;
//   height: 50px;
//   align-items: center;
//   box-shadow: 0px 1px 5px 1px rgb(100, 100, 100, 0.8);
//   div {
//     flex: 1;
//     text-align: center;
//     justify-content: center;
//     border: 1px solid red;
//   }
// }
</style>
