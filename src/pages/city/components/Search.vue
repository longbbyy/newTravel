<template>
  <div class="searchMain">
    <div class="search">
      <input
        class="search-input"
        placeholder="请输入城市名或拼音"
        type="text"
        v-model="keyword"
      />
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          :key="item.id"
          class="search-item border-bottom"
          v-for="item in list"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (var i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(this.list)
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
.searchMain {
  .search {
    height: 0.72rem;
    padding: 0.1rem;
    background: skyblue;
    .search-input {
      height: 0.72rem;
      width: 100%;
      box-sizing: border-box;
      padding: 0.1rem;
      line-height: 0.72rem;
      text-align: center;
      border-radius: 0.06rem;
      color: #666;
    }
  }
  .search-content {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    top: 1.78rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      background-color: #fff;
      color: #666;
    }
  }
}
</style>
