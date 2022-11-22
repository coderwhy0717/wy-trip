<template>
  <div class="house-cpn3">
    <div class="login">
      <span class="btn-login">立即登录</span>
    </div>
    <div class="selection-house">
      <div class="stn-time" @click="mainStore.showCalendar = true">
        <div class="left">
          {{ formatMonthDay(mainStore.inDay) }}
          <span class="left-l">
            {{ nextWeek(mainStore.inDay) }} 入住<van-icon name="arrow" />
          </span>
        </div>
        <div class="center">
          共{{ formatDiif(mainStore.inDay, mainStore.endDay) }}晚
        </div>
        <div class="left">
          {{ formatMonthDay(mainStore.endDay) }}
          <span class="right-r">
            {{ nextWeek(mainStore.endDay) }} 离开<van-icon name="arrow" />
          </span>
        </div>
      </div>
      <div class="current-house">
        <div class="left">
          <img :src="currentHouse.defaultPictureURL" alt="" />
          <div class="cover">当前房源</div>
        </div>
        <div
          class="message"
          :style="{ color: currentHouse.allowBooking ? '' : '#999999' }"
        >
          <div class="title">
            <span>{{ currentHouse.houseName }}</span>
            <span><van-icon name="arrow" /></span>
          </div>
          <div class="tao">{{ currentHouse.houseSummary }}</div>
          <!-- 有颜色的标签 -->
          <div
            v-if="currentHouse.houseTags[0]"
            class="day"
            :style="{
              color: currentHouse.houseTags[0].tagText.color,
              background: currentHouse.houseTags[0].tagText.background.color
            }"
          >
            {{ currentHouse.houseTags[0].tagText.text }}
          </div>

          <!-- 取消订单提示信息... -->
          <div class="cancel" v-if="currentHouse.rules[0]">
            <img :src="currentHouse.rules[0].icon" alt="" />
            <span
              :style="{
                color: currentHouse.allowBooking
                  ? currentHouse.rules[0].color
                  : '#333'
              }"
            >
              {{ formatMonthDay(beforDay) }}{{ currentHouse.rules[0].title }}
            </span>
            <!-- <span>{{ formatMonthDay(beforDay) }}12:00前可免费取消</span> -->
          </div>

          <div class="cancel ccl" v-if="currentHouse.disallowBookingReason">
            <img :src="currentHouse.disallowBookingReason.icon" alt="" />
            <span :style="{ color: currentHouse.allowBooking ? '' : '#333' }">
              {{ currentHouse.disallowBookingReason.title }}
            </span>
          </div>

          <div class="price">
            <div class="box"></div>
            <div class="right-box">
              <div class="price-p">
                <div class="price-pa">{{ currentHouse.productPrice }}</div>
                <div
                  class="price-pb"
                  :style="{ color: currentHouse.allowBooking ? '' : '#999999' }"
                >
                  ￥{{ currentHouse.finalPrice }} {{ currentHouse.priceMark }}
                </div>
              </div>
              <div
                class="btn-price"
                :style="{
                  background: currentHouse.allowBooking
                    ? ''
                    : `var(--f999-linear-gradient)`
                }"
              >
                预订
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main.js'
import { formatMonthDay, formatDiif, nextWeek } from '@/utils/format-date'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
defineProps({
  currentHouse: {
    type: Object,
    default: () => ({})
  }
})
const mainStore = useMainStore()
const { inDay, beforDay } = storeToRefs(mainStore)
watch(
  () => inDay.value,
  (newValue) => {
    // store 里初始化是获取本月的  如果是选择日期到下个月了等 就把下个月时间替换传给beforDay
    beforDay.value = new Date(newValue)
    beforDay.value.setDate(newValue.getDate() - 1)
  }
)
</script>

<style lang="less" scoped>
.house-cpn3 {
  border-top: 10px solid #f1f3f5;
  padding: 10px 15px;
  .login {
    height: 50px;
    background-color: #fff7f7;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    .btn-login {
      padding: 4px 10px;
      border-radius: 3px;
      font-weight: 700;
      background-color: #ff6e16;
      color: #fff;
      font-size: 12px;
    }
  }
  .selection-house {
    .stn-time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #efefef;
      height: 44px;
      margin-top: 10px;
      .left {
        color: #333;
        font-size: 14px;
        font-weight: 700;
        span {
          font-size: 10px;
          color: #666;
        }
      }
      .center {
        font-size: 11px;
        border: 1px solid #ccc;
        border-radius: 50px;
        padding: 0 6px;
        line-height: 20px;
        color: #333;
      }
    }
  }
  .current-house {
    position: relative;
    display: flex;
    align-items: center;
    height: 130px;
    padding: 10px 0 16px;
    overflow: hidden;
    .left {
      width: 82px;
      height: 100%;
      margin-right: 10px;
      position: relative;
      img {
        width: 82px;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      .cover {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 12px;
        text-align: center;
        color: #fff;
        border-radius: 0 0 8px 8px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .message {
      padding-bottom: 10px;
      flex: 1;
      font-size: 12px;
      line-height: 1.3;
      height: 100%;
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        span {
          font-weight: 700;
        }
      }
      .tao {
        margin-bottom: 4px;
      }
      .day {
        display: inline-block;
        padding: 2px 4px;
        font-size: 10px;
        color: #f66;
        line-height: 1;
        border-radius: 4px;
        margin-bottom: 2px;
        background: hsla(0, 100%, 70%, 0.1);
      }
      .cancel {
        img {
          width: 10px;
          height: 10px;
        }
      }
      .ccl {
        position: absolute;
        left: 0;
        bottom: 10px;
      }
      .price {
        display: flex;
        align-items: center;
        height: 50%;
        .box {
          flex: 1;
        }
        .right-box {
          display: flex;
        }
        .price-p {
          font-size: 10px;
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;

          .price-pa {
            color: #999999;
            height: 12px;
            text-align: right;
            text-decoration: line-through;
          }
          .price-pb {
            font-size: 14px;
            font-weight: 600;
            color: #ff9645;
          }
        }
      }

      .btn-price {
        width: 53px;
        height: 28px;
        color: #fff;
        text-align: center;
        line-height: 28px;
        border-radius: 5px;
        margin-left: 5px;
        background: var(--theme-linear-gradient);
        font-weight: 600;
      }
    }
  }
}
</style>
