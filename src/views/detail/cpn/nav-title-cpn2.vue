<template>
  <div class="nav-title" v-if="topModule">
    <h2 class="header">
      {{ topModule.houseName }}
    </h2>
    <!-- 小标签 -->
    <div class="lab" @click="show = !show">
      <template v-for="(item, index) in topModule.houseTags" :key="index">
        <span
          v-if="item.tagText"
          class="label"
          :style="{
            color: item.tagText?.color,
            background: item.tagText.background.color
          }"
          >{{ item.tagText?.text }}</span
        >
      </template>
    </div>
    <!-- 平台严选 -->
    <div class="label2">
      <img
        src="https://pic.tujia.com/upload/festatic/publicImages/TOC_2809_pro_banner.png"
        alt=""
      />
    </div>

    <!-- 评价 超赞 评论 -->
    <div class="comment" @click="changeComment" v-if="topModule.commentBrief">
      <div class="left">
        <span class="left-l">
          {{ topModule.commentBrief.overall.toFixed(1) }}
        </span>
        <span class="left-e">
          {{ topModule.commentBrief.scoreTitle }}
        </span>
        <span class="left-f"
          >"{{ topModule.commentBrief.commentBrief }} 52040560"</span
        >
      </div>
      <div class="right">
        {{ topModule.commentBrief.totalCount }} 条评论
        <van-icon name="arrow" />
      </div>
      <!-- 背景 -->
      <div class="cover-dt"></div>
    </div>
    <!-- 地理位置  -->
    <div class="location" @click="changeLocation">
      <div class="left summaryText-no" v-if="topModule.nearByPosition">
        <div class="left-l summaryText-no">
          {{ topModule.nearByPosition.address }}
        </div>
        <div class="left-e" v-if="topModule.nearByPosition.nearByPosition">
          <img :src="topModule.nearByPosition.nearByPosition[0].icon" alt="" />
          <span class="summaryText-no">{{
            topModule.nearByPosition.nearByPosition[0].title
          }}</span>
        </div>
      </div>
      <div class="right">地图·周边<van-icon name="arrow" /></div>
      <div class="cover-dt"></div>
    </div>
    <div class="coverShow">
      <van-popup
        v-model:show="show"
        closeable
        position="bottom"
        :style="{ height: 'auto' }"
        safe-area-inset-bottom
        round
      >
        <div class="coverShow-v">
          <h3>标签说明</h3>
          <div class="labitem">
            <template v-for="(item, index) in topModule.houseTags" :key="index">
              <div v-if="item.tagText">
                <span
                  class="label"
                  :style="{
                    color: item.tagText?.color,
                    background: item.tagText.background.color
                  }"
                >
                  {{ item.tagText?.text }}
                </span>
                <div class="content">{{ item.tagDesc }}</div>
              </div>
            </template>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  topModule: {
    type: Object,
    default: () => ({})
  }
})
const show = ref(false)
const changeComment = () => {
  console.log('评论')
}
const changeLocation = () => {
  console.log('地理位置地图')
}
</script>

<style lang="less" scoped>
.nav-title {
  padding: 10px 15px;
  .label {
    font-size: 10px;
    margin: 6px 10px 0 0;
    padding: 1px 5px;
    border-radius: 5px;
  }

  .header {
    line-height: 1.2;
    font-size: 20px;
    font-weight: 700;
    text-align: justify;
  }
  .lab {
    display: flex;
    flex-flow: row wrap;
    margin: 1px 0 10px;
  }

  .label2 {
    height: 28px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .comment {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 2px 10px;
    font-size: 12px;
    border-radius: 5px;
    .left {
      display: flex;
      align-items: center;
      .left-l {
        font-weight: 700;
        font-size: 18px;
      }
      .left-e {
        font-weight: 600;
        margin: 2px 10px 0 2px;
      }
      .left-f {
        color: #666;
        margin-top: 2px;
      }
    }
    .right {
      color: var(--primary-color);
    }
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 10px;
    border-radius: 5px;
    font-size: 14px;
    .left {
      .left-l {
        font-weight: 700;
      }
      .left-e {
        font-size: 12px;
        img {
          width: 10px;
          height: 10px;
          margin: 0 1px;
        }
      }
    }
    .right {
      white-space: nowrap;
      font-size: 12px;
      color: var(--primary-color);
    }
  }
  .coverShow {
    --van-popup-background-color: #f4f6f9;

    .coverShow-v {
      margin: 10px 20px;
      h3 {
        font-weight: 600;
        margin: 0 0 10px 3px;
      }
    }
    .labitem {
      background-color: #fff;
      padding: 15px 12px;
      border-radius: 20px;
      margin-bottom: 40px;
      .content {
        font-size: 12px;
        color: #333;
        padding: 2px 0 8px;
      }
    }
  }
}
</style>
