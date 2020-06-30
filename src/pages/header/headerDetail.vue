<template>
  <div class="headerDetail">
    <div class="main">
      <h1 class="name">{{seller.name}}</h1>
      <start
        :score="seller.score"
        :size="48"
        class="headerStart"
      ></start>
      <div class="content">
        <div class="title">
          <div class="line"></div>
          <h2 class="text">优惠信息</h2>
          <div class="line"></div>
        </div>
        <div class="supports">
          <infoItem
            :itemSupport="item"
            :key="index"
            class="supportItem"
            v-for="(item,index) in seller.supports"
          ></infoItem>
        </div>
        <div class="title">
          <div class="line"></div>
          <h2 class="text">商家信息</h2>
          <div class="line"></div>
        </div>
        <p class="bulletin">{{seller.bulletin}}</p>
      </div>
    </div>
    <div class="button">
      <i class="icon-close"></i>
    </div>
  </div>
</template>
<script>
import { res } from '../JS/index'
import start from './start'
import infoItem from './info'
export default {
  components: {
    start,
    infoItem
  },
  data () {
    return {
      seller: res.seller
    }
  },
  created () {
    console.log(res.seller)
  }
}
</script>
<style lang="scss" scoped>
.headerDetail {
  position: relative;
  min-height: 100vh;
  padding-bottom: 64px;
  box-sizing: border-box;
  background-color: rgba(7, 17, 27, 0.8);
  .main {
    padding-top: 32px;
    .name {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      line-height: 16px;
      text-align: center;
    }
    .headerStart {
      margin-top: 16px;
      text-align: center;
    }
    .content {
      width: 80%;
      margin: 0 auto;
      .title {
        display: flex;
        margin-top: 28px;
        position: relative;
        margin-bottom: 24px;
        .line {
          flex: 1;
          border-bottom: 1px solid #fff;
          opacity: 0.2;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        .text {
          margin: 0 12px;
          color: #fff;
          font-size: 14px;
        }
      }
      .supports {
        margin: 0 12px;
      }
      .supportItem {
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .bulletin {
        font-size: 12px;
        font-weight: 200;
        color: #fff;
        line-height: 24px;
      }
    }
  }
  .button {
    position: absolute;
    bottom: 32px;
    width: 100%;
    text-align: center;
    .icon-close {
      font-size: 32px;
      color: #fff;
    }
  }
}
</style>
