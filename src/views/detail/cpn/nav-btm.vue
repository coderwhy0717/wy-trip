<template>
  <div class="nav-btms">
    <div class="left">
      <img
        src="https://pic.tujia.com/upload/festatic/mp/ndetail_chart.png"
        alt=""
      />
      <div>聊天</div>
    </div>
    <div class="center">
      <div>
        <span class="price">￥{{ currentHouse.finalPrice }}</span>
        <span>&nbsp;&nbsp;{{ currentHouse.priceMark }}&nbsp;&nbsp;</span>
        <span class="produc">{{ currentHouse.productPrice }}</span>
      </div>
      <div class="center-f">
        <span class="promo" v-if="promoPrice">已减{{ promoPrice }}元</span>
        <span @click="show = !show">
          <span class="ming">明细 </span>
          <img
            src="https://pic.tujia.com/upload/festatic/publicImages/order-detail-icon.png"
            alt=""
          />
        </span>
      </div>
    </div>
    <div class="right">
      <div class="right-item">
        <img
          src="https://pic.tujia.com/upload/festatic/mp/detailv2_shand.png"
          alt=""
        />
        <span>优选价预订</span>
      </div>
    </div>
    <van-popup
      v-model:show="show"
      closeable
      close-icon-position="bottom-center"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <div class="mingxi">
        <h2>价格明细</h2>
        <div class="content">
          <div class="one">
            <div class="title">平均房费</div>
            <div>
              {{ currentHouse.productPrice ?? currentHouse.finalPrice }}
            </div>
          </div>
          <template
            v-for="(item, index) in currentHouse.promoTags"
            :key="index"
          >
            <div class="one">
              <div class="title">
                {{ item.tagText.text }}
              </div>
              <div>-￥{{ item.promoPrice }}</div>
            </div>
          </template>
        </div>
        <div class="to">
          平均每晚&nbsp;<span class="tospan"
            >￥{{ currentHouse.finalPrice }}</span
          >
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  currentHouse: {
    type: Object,
    default: () => ({})
  }
})
const promoPrice = computed(() => {
  if (!props.currentHouse.promoTags) props.currentHouse.promoTags
  let pricearr = props.currentHouse.promoTags.map((item) => item.promoPrice)
  if (pricearr.length > 0) {
    let price = pricearr.reduce((per, n) => per + n)
    console.log(price, 'price')

    return price
  }
})
const show = ref(false)
</script>

<style lang="less" scoped>
.nav-btms {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 60px;
  font-size: 10px;
  //   穿透
  :deep(.van-popup__close-icon) {
    left: 0;
    right: 0;
    bottom: 30px;
    z-index: 999;
    text-align: center;
    font-size: 30px;
    color: #666;
  }

  .mingxi {
    padding: 10px 15px;
    h2 {
      font-size: 18px;
      font-weight: 600;
      padding: 10px 0;
    }
    .content {
      border-top: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      padding: 8px 0;
      .one {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        .title {
          font-size: 12px;
          color: #666;
        }
      }
    }
    .to {
      text-align: right;
      margin-top: 10px;
      color: #666;
      span {
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-color);
      }
    }
  }
  .left {
    width: 50px;
    text-align: center;
    border-right: 1px solid #e3e3e3;
    img {
      width: 17px;
      height: 17px;
      margin-bottom: 3px;
    }
  }
  .center {
    flex: 1;
    padding: 0 10px;
    .price {
      font-size: 16px;
      color: var(--primary-color);
      font-weight: 600;
    }
    .produc {
      color: #666;
      text-decoration: line-through;
    }
    .center-f {
      .promo {
        background: rgba(255, 150, 69, 0.1);
        color: #ff9645;
        margin: 0 12px;
      }
      .ming {
        color: var(--primary-color);
      }
      img {
        width: 6px;
        height: 6px;
        margin-bottom: 5px;
      }
    }
  }
  .right {
    width: 150px;
    height: 100%;
    background: var(--theme-linear-gradient);
    .right-item {
      line-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 14px;
        height: 18px;
        margin: 0 5px -2px 0;
      }
      span {
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>
