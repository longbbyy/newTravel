<template>
  <div class="infoItem">
    <div
      :class="classMap[itemSupport.type]"
      class="img"
    ></div>
    <div class="desc">{{itemSupport.description}}</div>
  </div>
</template>
<script>
export default {
  props: {
    itemSupport: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invioce', 'guarantee']
    }
  },
  created () {
    console.log(this.supports)
  }
}
</script>
<style lang="scss" scoped>
.infoItem {
  height: 16px;
  font-size: 0;
  .img {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: 6px;
    vertical-align: middle;
    &.decrease {
      background-image: url('./decrease_1@2x.png');
    }
     &.discount {
      background-image: url('./discount_1@2x.png');
    }
     &.special {
      background-image: url('./special_1@2x.png');
    }
     &.invioce {
      background-image: url('./invoice_1@2x.png');
    }
     &.guarantee {
      background-image: url('./guarantee_1@2x.png');
    }
  }
  .desc {
    display: inline-block;
    font-size: 12px;
    font-weight: 200;
    color: #fff;
    line-height: 12px;
    vertical-align: middle;
  }
}
</style>
