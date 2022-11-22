<template>
  <div class="price">
    <h4>{{ introductionModule.title }}</h4>
    <div class="box" @click="isshow = true">
      <div
        class="text"
        :class="{ title3: !isshow }"
        :style="{
          whiteSpace: isshow ? 'pre-line' : '',
          height: isshow ? 'auto' : '57px'
        }"
      >
        {{ introductionModule.introduction }}
      </div>
      <van-icon name="arrow-down" class="icon" v-if="!isshow" />
    </div>
    <!-- 最底部 -->
    <div class="price-footer">
      <div class="p-f-content">
        <div class="box-img" @click="show = !show">
          <img class="img" :src="ensureModule.icon" alt="" />
          <img
            src="https://pic.tujia.com/upload/festatic/crn/icon-bf-i.png"
            alt=""
          />
        </div>
        <div class="text-f" @click="changeimg(bgc)">
          <div>查看证照信息</div>
          <div>民宿预订频道由途家提供服务</div>
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="show"
      closeable
      round
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div class="popupa">
        <div class="title-img">
          <img :src="ensureModule.subIcon" alt="" />
        </div>
        <div class="box-text">
          <template
            v-for="(item, index) in ensureModule.titleTips"
            :key="index"
          >
            <div class="b-ti">{{ item.title }}</div>
            <div class="b-text">{{ item.introduction }}</div>
          </template>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ImagePreview } from 'vant'
defineProps({
  introductionModule: {
    type: Object,
    default: () => ({})
  },
  ensureModule: {
    type: Object,
    default: () => ({})
  },
  bgc: {
    type: Array,
    default: () => []
  }
})
const isshow = ref(false)
const show = ref(false)
const changeimg = (arr) => {
  ImagePreview({
    images: arr,
    startPosition: 0
  })
}
</script>

<style lang="less" scoped>
.price {
  border-top: 10px solid #f1f3f5;
  margin-bottom: 61px;
  h4 {
    margin: 10px 0 0 10px;
    font-weight: 600;
    font-size: 15px;
  }
  .box {
    display: flex;
    position: relative;
    margin-bottom: 15px;
    padding: 0 10px;
    .icon {
      position: absolute;
      right: 10px;
      bottom: 2px;
      background-color: #fff;
      font-size: 10px;
      color: #666;
    }
  }
  .text {
    padding: 10px 0 0;
    font-size: 12px;
    text-align: justify;
    overflow: hidden;
    line-height: 1.3;
  }
  .price-footer {
    background-color: #f1f3f5;
    .p-f-content {
      text-align: center;
      .box-img {
        padding: 40px 0 20px;
        img {
          width: 14px;
          height: 14px;
        }
        .img {
          width: 123px;
          height: 17px;
          margin-right: 5px;
        }
      }
    }

    .text-f {
      font-size: 12px;
      padding-bottom: 30px;
      color: #7688a7;
      div {
        line-height: 2;
      }
    }
  }
  .popupa {
    padding: 10px 20px 0px;

    .title-img {
      position: relative;
      z-index: 1;
      line-height: 25px;
      padding-bottom: 15px;
      background-color: #fff;
      img {
        width: 139px;
        height: 19px;
      }
    }
    .box-text {
      height: 70vh;
      margin: -15px 0 30px;
      overflow: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .b-ti {
        margin: 25px 0 10px;
        font-weight: 600;
        font-size: 18px;
      }
      .b-text {
        font-size: 13px;
        color: #333;
        line-height: 1.6;
        white-space: pre-line;
      }
    }
  }
}
</style>
