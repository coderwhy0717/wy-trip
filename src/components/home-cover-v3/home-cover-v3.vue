<template>
  <div class="home-cover-v3">
    <img :src="houseData.image.url" alt="" />
    <div class="content">
      <div class="location">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAeFBMVEUAAABnZ2dnZ2dmZmZoaGhqampra2tmZmZnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d2dnZmZmZmZmZnZ2dnZ2dmZmZnZ2doaGh2dnZnZ2dmZmb////ExMT09PTz8/OwsLCqqqqpqamjo6OQkJCJiYmAgIB1dXVzc3Pb29u6urrw6XOgAAAAGHRSTlMA+W+aJyEX5NnLuKyGTwZ68u3fvmZdDXR4g75jAAAA5klEQVQ4y5WT2RKCMAxF29oWFAF3U9wV9P//0EFCWFJwOG83cx5uJ6mYho136S62YoBEzaFirhKfEG+gYRNzYQldln1hBn1mXUEBR7UFLYEjdcuIwEfUCIaGxf1zLygZ3uJxds6dH7zJAif5yZWccswLMkKcXF3FFXNIxgonGRoZ5hUZ9VsvaFwwSzICnLzQeGEOWFO4/YQbsKYp1Dyzd/aklJJhJfiQlm12ZLvGuzkjWuyBs/93IGryFVJb3tJ/RpH/v2xJ2CbCy4F+1GHwU4bVWVgxiAnKjRoxgl7DWotR9BGFKXwBpr0w2bTaHhMAAAAASUVORK5CYII="
          alt=""
        />
        <span>{{ houseData.location }}</span>
      </div>
      <div class="title">{{ houseData.houseName }}</div>
      <div class="summaryText">{{ houseData.summaryText }}</div>
      <!-- 价格 -->
      <div class="pric">
        <span class="finalPrice">
          {{ houseData.finalPrice }}
        </span>
        <span class="productPrice"> ￥{{ houseData.productPrice }} </span>
        <p class="priceTipBadge" :style="{ background: bgccolor }">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMAgPT53jQjDwXbxGRYEgro5JqFcmxPPiQc2dLMtrGnoHhcWUgsGAvo+fYAAACVSURBVCjPpdE3DsNADETR0UblnJwz739EszAsrExX+hUxryQ2VmY5hOK+Irr/zpkhLsKqfEckwLAn+sLLg3OdQ5HyskBqJoaEEnQUgK2SEuAbUQgYKZIBp/oPZDTL8CArw42cDI2KRZhVA2jSa/CpckCrWlwDKIwewHFTHcDZLg/qzQJhcX6QgRuPMnDPi1YWYt7j0xvCHiGEC7+oAQAAAABJRU5ErkJggg=="
            alt=""
          />
          <span :style="{ color: houseData.priceTipBadge.color }">
            {{ houseData.priceTipBadge.text }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  houseData: {
    type: Object,
    default: () => ({})
  }
})
// console.log(props.houseData.priceTipBadge.gradient.startColor)
const bgccolor = computed(
  () =>
    `linear-gradient(90deg,#${props.houseData.priceTipBadge.gradient.endColor} , ${props.houseData.priceTipBadge.gradient.startColor})`
)
</script>

<style lang="less" scoped>
.home-cover-v3 {
  width: calc(50% - 10px);
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 10px;
  img {
    width: 100%;
    border-radius: 6px 6px 0 0;
  }
  .content {
    padding: 0 5px 0 10px;
    .location {
      display: flex;
      align-items: center;
      font-size: 11px;
      img {
        width: 12px;
        height: 12px;
        margin-right: 3px;
      }
    }
    .summaryText {
      display: inline-block;
    }

    .summaryText {
      width: 95px;
    }
    .pric {
      display: flex;
      align-items: center;
      .finalPrice {
        font-size: 14px;
        color: var(--primary-color);
      }
      .productPrice {
        font-size: 10px;
        margin-left: 2px;
        color: #999;
        text-decoration: line-through;
      }
      .priceTipBadge {
        display: flex;
        align-items: center;
        font-size: 11px;
        border-radius: 20px;
        padding: 0px 8px;
        margin-left: 5px;
        img {
          width: 8px;
          height: 8px;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
