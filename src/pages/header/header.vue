<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          :src="seller.avatar"
          alt
          height="64"
          width="64"
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div
          class="support"
          v-if="seller.supports"
        >
          <span
            :class="classMap[seller.supports[0].type]"
            class="icon"
          ></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div
          @click="showDetail"
          class="support-count"
          v-if="seller.supports"
        >
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulleting-title"></span>
      <span class="bulletin-text">{{ seller.bulletin}}</span>
      <i
        @click="showDetail"
        class="icon-keyboard_arrow_right"
      ></i>
    </div>
    <div class="background">
      <img
        :src="seller.avatar"
        height="100%"
        width="100%"
      />
    </div>
    <div
      class="detail"
      v-show="detailShow"
    >
      <div class="detail-wrapper clearfix">
        <div class="main">
          <h1 class="name">{{ seller.name }}</h1>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  // props: ['seller']
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      flex: 1;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          background-image: url('./brand@2x.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .desc {
        margin-bottom: 10px;
        font-size: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.discount {
            background-image: url('./discount_1@2x.png');
          }
          &.decrease {
            background-image: url('./decrease_1@2x.png');
          }
          &.guarantee {
            background-image: url('./guarantee_1@2x.png');
          }
          &.invoice {
            background-image: url('./invoice_1@2x.png');
          }
          &.special {
            background-image: url('./special_1@2x.png');
          }
        }
        .text {
          line-height: 12px;
          font-size: 10px;
          vertical-align: top;
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        .count {
          vertical-align: top;
        }
        .icon-keyboard_arrow_right {
          margin-left: 2px;
          line-height: 24px;
        }
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2);
    .bulleting-title {
      display: inline-block;
      vertical-align: middle;
      width: 22px;
      height: 12px;
      background-image: url('./bulletin@2x.png');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text {
      margin: 0 4px;
      font-size: 10px;
      vertical-align: middle;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      right: 12px;
      top: 9px;
      font-size: 10px;
    }
  }
  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .main {
        margin-top: 64px;
        padding-bottom: 64px;
      }
      .name {
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        text-align: center;
        font-size: 700;
      }
    }
    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      font-size: 32px;
      margin: -64px auto 0 auto;
    }
  }
}
</style>
