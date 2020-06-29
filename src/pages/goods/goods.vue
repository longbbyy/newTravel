<template>
  <div class="goods">
    <div class="menu-wrapper"></div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.goods {
  position: fixed;
  width: 100%;
  top: 181px;
  bottom: 46px;
  display: flex;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    background-color: #eee;
  }
}
</style>
