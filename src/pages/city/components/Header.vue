<template>
  <div class="header">
    城市选择
    <div class="iconfont header-back">&#xe624;</div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
.header {
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  position: relative;
  .header-back {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.64rem;
  }
}
</style>
