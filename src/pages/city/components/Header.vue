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
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: skyblue;
  font-size: 0.32rem;
  .header-back {
   position: absolute;
   left: 0;
   top: 0;
   width: 0.64rem;
   text-align: center;
   font-size: 0.4rem;
  }
}
</style>
