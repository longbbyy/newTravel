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
        <div class="support-count" v-if="seller.supports">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
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
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  background-color: #000;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
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
    }
  }
}
</style>
