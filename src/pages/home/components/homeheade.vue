<template>
  <div class="header">
    <div class="left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="input">
      <span class="iconfont">&#xe632;</span>
      内容
    </div>
    <div class="right">
      {{this.$store.state.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
.header {
  // height: 0.86rem;
  line-height: 0.86rem;
  display: flex;
  background-color: $bgColor;
  color: #fff;
  .left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .input {
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    line-height: 0.64rem;
    padding-left: 0.2rem;
    height: 0.64rem;
    background-color: #fff;
    color: #ccc;
    border-radius: 0.1rem;
  }
  .right {
    width: 1.02rem;
    float: right;
    text-align: center;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
