<template>
  <div class="order">
    <h2>order</h2>
    <div v-time="geshi">{{ time }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const geshi = 'YYYY/MM/DD HH:mm:ss'
const time = ref(new Date())
setInterval(() => {
  time.value = new Date()
}, 1000)

console.log(time)

// const vTime = {
//   mounted() {
//     console.log('mounted')
//   }
// }
</script>

<style lang="less" scoped>
.order {
}
</style>
