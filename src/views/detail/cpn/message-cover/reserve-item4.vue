<template>
  <div class="reserve">
    <DetailMessageCover title-name="预订须知">
      <div class="head">
        <template v-for="(item, index) in rulesModule.orderRules">
          <div class="h-item">
            <span class="title">{{ item.title }}</span>
            <div
              :class="{ cha: item.link }"
              :style="{
                background: item.icon ? item.color : '',
                color: item.icon ? '#fff' : '',
                borderRadius: '3px',
                padding: item.icon ? '0 5px 0' : ''
              }"
            >
              <div>{{ item.introduction ?? item.icon }}</div>
              <a :href="item.link.navigateUrl" v-if="item.link" class="cha-cha">
                查看说明 >
              </a>
            </div>
          </div>
        </template>
      </div>
      <div class="center">
        <div class="a"></div>
        <div class="ca-item">
          <template
            v-for="(item, index) in rulesModule.cancelRules"
            :key="index"
          >
            <div class="c-item">
              <div>{{ item.introduction }}</div>
              <span
                v-if="item.tip"
                :style="{
                  background: item.backColor,
                  color: item.tipColor,
                  borderRadius: '5px',
                  padding: '0 5px'
                }"
              >
                {{ item.tip }}
              </span>
            </div>
          </template>
        </div>
      </div>
      <div class="hint">
        <div>{{ rulesModule.checkInRules[0].title }}</div>
        <div class="right">
          <div class="r-head">
            <template
              v-for="(item, index) in rulesModule.checkInRules[0].items"
              :key="index"
            >
              <div class="r-h-item">
                <img
                  v-if="!item.isDeleted"
                  src="https://pic.tujia.com/upload/festatic/mp/check_green.png"
                  alt=""
                />
                <img
                  v-else
                  src="https://pic.tujia.com/upload/festatic/mp/error_red.png"
                  alt=""
                />
                <span>{{ item.introduction }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="hint-2">
        <template
          v-for="(item, index) in rulesModule.checkinOtherInfo"
          :key="index"
        >
          <div v-if="index === 0">{{ item.items[0].introduction }}</div>

          <div class="text" v-else-if="index === 1" @click="isshow = true">
            <div
              class="summaryText-no text-t"
              :style="{
                height: isshow ? 'auto' : '20px',
                whiteSpace: isshow ? 'pre-line' : 'none'
              }"
            >
              {{ item.items[0].introduction }}
            </div>
            <van-icon name="arrow-down" class="icon" v-if="!isshow" />
          </div>
          <!-- <template
              v-if="isshow"
              v-for="(iten, inden) in textDispose(item.items[0].introduction)"
              :key="inden"
            >
              <div class="text-t">{{ iten }}</div>
            </template> -->
        </template>
      </div>
      <div class="footer">
        <img
          src="https://pic.tujia.com/upload/festatic/mp/small_bulbs.png"
          alt=""
        />
        &nbsp;遵守入住规则有助于获得更愉快的入住体验
      </div>
    </DetailMessageCover>
  </div>
</template>

<script setup>
import DetailMessageCover from '@/components/detail-message-cover/detail-message-cover.vue'
// import { textDispose } from '@/utils/format-date'
import { ref } from 'vue'
defineProps({
  rulesModule: {
    type: Object,
    default: () => ({})
  }
})
const isshow = ref(false)
</script>

<style lang="less" scoped>
.reserve {
  .head {
    .h-item {
      display: flex;
      font-size: 12px;
      margin-top: 20px;
      .title {
        font-size: 12px;
        display: inline-block;
        width: 65px;
        color: #666;
      }
      .cha {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .cha-cha {
          font-weight: 600;
          color: #666;
        }
      }
    }
  }
  .center {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    .a {
      margin-top: 20px;
      text-align: right;
      flex: 0.85;
      border-right: 1px dashed #000;
    }
    .ca-item {
      width: 70%;
      .c-item {
        margin-top: 20px;
      }
    }
  }
  .hint {
    display: flex;
    font-size: 12px;
    margin-top: 20px;
    color: #666;

    .right {
      flex: 1;
      color: #333;

      .r-head {
        margin-left: 20px;
        display: grid;
        grid-template-columns: 50% 50%;
        width: 100%;
        .r-h-item {
          margin-bottom: 5px;
        }
        img {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }
      }
    }
  }
  .hint-2 {
    text-align: justify;
    font-size: 10px;
    margin: 5px 0 0 20%;
    color: #666;
    .text {
      display: flex;
      align-items: center;
      line-height: 20px;
      overflow: hidden;
      .text-t {
        line-height: 1.3;
      }
      .icon {
        margin-left: 2px;
      }
    }
  }
  .footer {
    background-color: #f8fafc;
    color: #bfbfbf;
    margin: 8px auto 20px;
    font-size: 12px;
    width: 270px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 2px 10px;
    img {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
