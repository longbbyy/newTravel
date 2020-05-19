<template>
  <div class="search">
    <input
      class="search-input"
      placeholder="请输入城市名或者拼音"
      type="text"
    />
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: #ccc;
  .search-input {
    width: 100%;
    box-sizing: border-box;
    height: 0.72rem;
    padding: 0.1rem;
    text-align: center;
    line-height: 0.72rem;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
