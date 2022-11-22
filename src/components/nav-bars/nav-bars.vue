<template>
  <div class="nav-bars">
    <template v-for="(item, index) in names" :key="index">
      <div
        class="item"
        :class="{ btmXian: index === currentindex }"
        @click="changeClick(item, index)"
      >
        {{ item }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  names: {
    type: Array,
    default: () => []
  },
  scrollTop: {
    type: Number,
    default: 0
  }
})

const currentindex = ref(0)
const emit = defineEmits(['changeClick'])
const changeClick = (item, index) => {
  // currentindex.value = index
  emit('changeClick', { item, index })
}
const bac = (index) => {
  console.log('object')
  currentindex.value = index
}
defineExpose({
  bac,
  currentindex
})
</script>

<style lang="less" scoped>
.nav-bars {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background-color: #fff;

  .item {
    height: 100%;
    line-height: 42px;
    margin: 0 3.75px;
    font-size: 14px;
  }
  .btmXian {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
  }
}
</style>
