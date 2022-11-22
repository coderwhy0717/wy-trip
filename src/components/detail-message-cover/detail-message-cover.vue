<template>
  <div class="detail-message-cover">
    <h2>{{ titleName }}</h2>
    <slot>
      <div>暂无内容...</div>
    </slot>
    <div v-if="extendString" class="bottom" @click="changeclick">
      {{ extendString }}<van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  titleName: {
    type: String,
    default: '默认标题'
  },
  extendString: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['changeshow'])
const changeclick = () => {
  emits('changeshow')
}
</script>

<style lang="less" scoped>
.detail-message-cover {
  padding: 0 16px;
  border-top: 10px solid #f1f3f5;
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    padding: 14px 0;
    border-bottom: 1px solid #eee;
  }
  .bottom {
    text-align: right;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 600;
    padding: 15px 0;
  }
}
</style>
