<template>
  <div class="facility" v-if="houseFacility">
    <DetailMessageCover
      @changeshow="show = true"
      titleName="房屋设施"
      extendString="查看全部设施"
    >
      <div class="itembox">
        <template
          v-for="(item, index) in houseFacility.facilitySort"
          :key="index"
        >
          <div class="item">
            <div class="left">
              <img :src="houseFacility.houseFacilitys[item].icon" alt="" />
              <div class="title">
                {{ houseFacility.houseFacilitys[item].groupName }}
              </div>
            </div>
            <!--  -->
            <div class="right">
              <template
                v-for="(iten, indexn) in houseFacility.houseFacilitys[
                  item
                ].facilitys.slice(0, 4)"
                :key="indexn"
              >
                <div class="items">
                  <img
                    v-if="!iten.deleted"
                    src="https://pic.tujia.com/upload/festatic/mp/check_green.png"
                    alt=""
                  />
                  <img
                    v-else
                    src="https://pic.tujia.com/upload/festatic/mp/error_red.png"
                    alt=""
                  />
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </DetailMessageCover>
    <div class="popup">
      <van-popup
        v-model:show="show"
        closeable
        close-icon-position="top-right"
        position="bottom"
        round
        :style="{ height: '80%' }"
      >
        <h3>房屋设施</h3>
        <div class="scroll-y">
          <template
            v-for="(item, index) in houseFacility.houseFacilitys"
            :key="index"
          >
            <div class="itembox-2">
              <div class="title">
                <img :src="item.icon" alt="" />
                <span>{{ item.groupName }}</span>
              </div>
              <div class="items-1">
                <template
                  v-for="(iten, indexn) in item.facilitys"
                  :key="indexn"
                >
                  <div class="items-2">
                    <img
                      v-if="!iten.deleted"
                      src="https://pic.tujia.com/upload/festatic/mp/check_green.png"
                      alt=""
                    />
                    <img
                      v-else
                      src="https://pic.tujia.com/upload/festatic/mp/error_red.png"
                      alt=""
                    />
                    <span>{{ iten.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script setup>
import DetailMessageCover from '@/components/detail-message-cover/detail-message-cover.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  itemdata: {
    type: Object,
    default: () => ({})
  }
})
const houseFacility = computed(
  () => props.itemdata?.facilityModule?.houseFacility
)
// console.log(houseFacility, 'houseFacility')
const show = ref(false)
</script>

<style lang="less" scoped>
.facility {
  .itembox {
    background-color: #f7f9fb;
    border-radius: 10px;
    padding: 18px 0;
    margin-top: 10px;
    .item {
      display: flex;
      align-items: center;
      overflow: hidden;
      .left {
        width: 90px;
        text-align: center;
        margin: 10px 0;
        .title {
          font-size: 11px;
          font-weight: 600;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        font-size: 11px;
        color: #333;
        img {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }
        .items {
          width: 50%;
          text-align: left;
          margin-top: 3px;
        }
      }
    }
  }
  .popup {
    --van-popup-background-color: #f4f6f9;

    h3 {
      font-size: 18px;
      font-weight: 600;
      padding: 13px 20px 0;
    }
    .scroll-y {
      overflow-y: auto;
      height: 93%;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .itembox-2 {
      margin: 10px 16px;
      background-color: #fff;
      border-radius: 10px;
      padding: 13px 10px;

      .title {
        display: flex;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }
        span {
          font-size: 14px;
          font-weight: 600;
        }
      }
      .items-1 {
        display: flex;
        flex-flow: row wrap;
      }
      .items-2 {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #666;
        width: 32%;
        margin-top: 5px;
        img {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
