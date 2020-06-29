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
    <transition name="fade">
      <div
        class="detail"
        v-show="detailShow"
      >
        <div class="detail-wrapper clearfix">
          <div class="main">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="start-wrapper">
              <start
                :score="seller.score"
                :size="48"
                class="start"
              ></start>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul
              class="support"
              v-if="seller.supports"
            >
              <li
                :key="index"
                class="support-item"
                v-for="(item,index) in seller.supports"
              >
                <span
                  :class="classMap[item.type]"
                  class="icon"
                ></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{ seller.bulletin }}</p>
            </div>
          </div>
        </div>
        <div class="detail-close">
          <i
            @click="showDetail"
            class="icon-close"
          ></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import start from '../start/start.vue'

export default {
  name: 'vheader',
  components: {
    start
  },
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
      this.detailShow = !this.detailShow
    }
  },
  mounted () {
    console.log(this.seller)
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
    transition: all 3s;
    &.fade-enter-active,
    &.fade-leave-active {
      height: 100%;
    }
    &.fade-enter,
    &.fade-leave-to {
      height: 0;
    }
    .detail-wrapper {
      width: 100%;
      min-height: 100%;
      .main {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          height: 16px;
          line-height: 16px;
          font-size: 16px;
          text-align: center;
          font-size: 700;
        }
        .start-wrapper {
          text-align: center;
          margin-top: 16px;
          margin-bottom: 28px;
        }
        .title {
          width: 80%;
          margin: 30px auto 24px auto;
          display: flex;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
          .text {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .support {
          width: 80%;
          margin: 0 auto;
          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 100% 100%;
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
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
        .bulletin {
          width: 80%;
          margin: 0 auto;
          .content {
            padding: 0 12px;
            font-size: 12px;
            line-height: 24px;
          }
        }
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
