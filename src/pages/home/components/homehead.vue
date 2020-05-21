<template>
  <div class="header">
    <div class="iconfont left">&#xe624;</div>
    <div class="input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="right">
      {{this.$store.state.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  color: #fff;
  background-color: red;
  .left {
    width: 0.64rem;
    float: left;
    text-align: center;
    font-size: 0.4rem;
  }
  .input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
