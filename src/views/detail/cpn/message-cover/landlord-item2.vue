<template>
  <div class="landlord-item2" @click="changeClick">
    <DetailMessageCover titleName="房东介绍" extendString="查看房东主页">
      <div class="landlord">
        <img
          v-if="landlordModule.topScroll"
          class="imga"
          :src="landlordModule.topScroll"
          alt="v4"
        />
        <div class="landlord-message">
          <div class="left">
            <img :src="landlordModule.hotelLogo" alt="" />
            <img
              v-if="landlordModule.landlordLevelUrl"
              class="imgs-i"
              :src="landlordModule.landlordLevelUrl"
              alt=""
            />
          </div>
          <div class="right">
            <div class="right-r">
              <div class="title">
                {{ landlordModule.hotelName }}
              </div>
              <template
                v-for="(item, index) in landlordModule.hotelTags"
                :key="index"
              >
                <span :style="{ color: item.tagText.color }">{{
                  item.tagText.text
                }}</span>
                <i class="ic"></i>
              </template>
            </div>
            <div class="btn">
              <span>联系房东</span>
            </div>
          </div>
        </div>
        <div v-if="landlordModule.hotelSummary" class="message-zong-box">
          <template
            v-for="(item, index) in landlordModule.hotelSummary"
            :key="index"
          >
            <div class="message-zong">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">
                <template
                  v-for="(iten, indexn) in assemble(item.tip, item.highLight)"
                  :key="indexn"
                >
                  <span
                    :class="{ hig: iten === item.highLight ? true : false }"
                  >
                    {{ iten }}
                  </span>
                  <span v-if="!iten">-</span>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </DetailMessageCover>
  </div>
</template>

<script setup>
import DetailMessageCover from '@/components/detail-message-cover/detail-message-cover.vue'
import { assemble } from '@/hooks/home-scroll'
defineProps({
  landlordModule: {
    type: Object,
    default: () => ({})
  }
})

const changeClick = () => {
  console.log('点击跳转查看房东主页页面')
}
</script>

<style lang="less" scoped>
.landlord-item2 {
  .landlord {
    .imga {
      width: 100%;
      height: 30px;
      border-radius: 5px;
      margin: 10px 0 5px;
    }
    .landlord-message {
      display: flex;
      .left {
        position: relative;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        margin: 10px 10px 10px 0;
        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid #eee;
        }
        .imgs-i {
          position: absolute;
          right: 0;
          bottom: -3px;
          width: 27px;
          height: 27px;
          border: 0px solid #eee;
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        .right-r {
          line-height: 1.2;
          .title {
            width: 200px;
            font-size: 16px;
            font-weight: 600;
          }
          span {
            font-size: 10px;
          }
          .ic {
            display: inline-block;
            height: 10px;
            border-left: 1px solid #9b9b99;
            margin: 0 6px;
            margin-bottom: -1.5px;
            &:last-child {
              display: none;
            }
          }
        }
        .btn {
          margin-top: 3px;
          span {
            font-size: 12px;
            padding: 4px 12px;
            border-radius: 5px;
            background: var(--theme-linear-gradient);
            color: #fff;
          }
        }
      }
    }
    .message-zong-box {
      display: flex;
      padding: 20px 0 20px;
      border-bottom: 0.5px solid #eee;
    }
    .message-zong {
      flex: 1;

      font-size: 10px;
      line-height: 1.2;
      .title {
        color: #9b9b99;
        font-size: 10px;
      }
      .introduction {
        font-weight: 700;
        font-size: 18px;
        color: #333;
      }
      .tip {
        color: #666;
        .hig {
          display: inline-block;
          margin: 0 3px;
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>
