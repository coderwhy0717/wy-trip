<template>
  <div class="roomer-item3" @click="changeClick">
    <detail-message-cover
      title-name="房客点评"
      :extend-string="`查看全部${commentModule.totalCount}条评价`"
    >
      <div class="roomer">
        <div class="header">
          <div class="header-h">
            <div class="h-left">
              <div class="overall">
                {{ commentModule.overall.toFixed(1) }}
              </div>
              <div class="gang"></div>
              <div class="current">
                <div class="tui">{{ commentModule.scoreTitle }}</div>
                <div class="pin">{{ commentModule.totalCount }}条评价</div>
                <van-rate
                  v-model="commentModule.overall"
                  readonly
                  color="var(--primary-color)"
                  allow-half
                />
              </div>
            </div>
            <div class="h-right">
              <template
                v-for="(item, index) in commentModule.subScoresFocus"
                :key="index"
              >
                <template
                  v-for="(iten, indexn) in assemble(item.text, item.focusText)"
                >
                  <span :class="{ hig: iten === item.focusText }">
                    {{ iten }}
                  </span>
                </template>
              </template>
            </div>
          </div>
          <div class="label">
            <template
              v-for="(item, index) in commentModule.commentTagVo"
              :key="index"
            >
              <div
                class="biao"
                :style="{
                  backgroundColor: item.backgroundColor,
                  color: item.color
                }"
              >
                {{ item.text }}
              </div>
            </template>
          </div>
        </div>
        <div class="footer">
          <div class="user-message">
            <div class="u-left">
              <div class="img">
                <img
                  :src="commentModule.comment.userAvatars"
                  @click="onChange([commentModule.comment.userAvatars])"
                  alt=""
                />
              </div>
              <div class="user-name">
                <div class="name">{{ commentModule.comment.userName }}</div>
                <div class="sj">
                  {{ commentModule.comment.checkInDate }} 入住
                  <span>{{ commentModule.comment.location }}</span>
                </div>
              </div>
            </div>
            <div class="s">
              <div class="score">
                {{ commentModule.comment.overall.toFixed(1) }}
              </div>
              <van-rate
                v-model="commentModule.comment.overall"
                readonly
                color="var(--primary-color)"
                allow-half
                size="10px"
                gutter="4px"
              />
            </div>
          </div>
          <div class="title3 current">
            {{ commentModule.comment.commentDetail }}
          </div>
          <div class="imgs" v-if="commentModule.comment.pictureList">
            <template
              v-for="(item, index) in commentModule.comment.pictureList.slice(
                0,
                4
              )"
              :key="index"
            >
              <img :src="item.url" alt="" @click="onChange(imgs, index)" />
            </template>
          </div>
        </div>
      </div>
    </detail-message-cover>
  </div>
</template>

<script setup>
import DetailMessageCover from '@/components/detail-message-cover/detail-message-cover.vue'
import { computed } from 'vue'
import { ImagePreview } from 'vant'
import { assemble } from '@/hooks/home-scroll'
const props = defineProps({
  commentModule: {
    type: Object,
    default: () => ({})
  }
})
const imgs = computed(() =>
  props.commentModule?.comment?.pictureList
    .map((item) => item.albumUrl)
    .slice(0, 4)
)

const onChange = (arr, index = 0) => {
  ImagePreview({
    images: arr,
    startPosition: index
  })
}
const changeClick = () => {
  console.log('点击跳转房客点评页面')
}
</script>

<style lang="less" scoped>
.roomer-item3 {
  .roomer {
    .header {
      .header-h {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        .gang {
          width: 66px;
          height: 6px;
          background: var(
            --tjc-theme-linear-gradient,
            linear-gradient(90deg, #fa8c1d, #fcaf3f)
          );
          -webkit-border-radius: 3px;
          border-radius: 3px;
          position: absolute;
          bottom: 16px;
          z-index: -1;
        }
        .h-left {
          display: flex;
          align-items: center;
          .overall {
            width: 65px;
            font-size: 48px;
            font-weight: 600;
            color: #333;
            margin-right: 10px;
          }
          .current {
            font-size: 10px;
            --van-rate-icon-size: 10px;
            .tui {
              font-size: 10px;
              color: #000;
            }
            .pin {
              font-size: 12px;
              color: #9b9b99;
            }
          }
        }
        .h-right {
          flex: 0.7;
          display: flex;
          flex-flow: row wrap;
          justify-content: right;
          span {
            font-size: 10px;
            color: #999;
          }
          .hig {
            display: inline-block;
            margin: 0 3px;
            color: #333;
            font-weight: 600;
          }
        }
      }
      .label {
        margin: 10px 0;
        display: flex;
        flex-flow: row wrap;
        .biao {
          border-radius: 15px;
          margin: 0 5px 5px 0;
          font-size: 11px;
          padding: 1px 8px;
        }
      }
    }
    .footer {
      background-color: #f7f9fb;
      padding: 10px;
      border-radius: 10px;
      .user-message {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .u-left {
          display: flex;
          align-items: center;
          .img {
            width: 33px;
            height: 33px;
            margin-right: 4px;
            border-radius: 50%;
            border: 1px solid #eee;
            img {
              width: 32px;
              height: 32px;
              object-fit: cover;
              border-radius: 50%;
            }
          }
          .user-name {
            margin-top: 1px;
            font-size: 12px;
            line-height: 1.3;
            .name {
              font-weight: 600;
            }
            .sj {
              color: #999;
            }
          }
        }
        .s {
          text-align: right;
          line-height: 0.8;
          .score {
            font-size: 18px;
            color: #333;
            font-weight: 600;
          }
        }
      }
      .current {
        font-size: 12px;
        color: #333;
        line-height: 16px;
        margin: 18px 0 10px;
      }
      .imgs {
        img {
          width: 75px;
          height: 75px;
          border-radius: 3px;
          object-fit: cover;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
