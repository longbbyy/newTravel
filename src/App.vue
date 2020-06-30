<template>
  <div id="app">
    <!-- <vheader :seller="seller"></vheader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rateing">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sell">商家</router-link>
      </div>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import vheader from '@/pages/header/header'
import { res } from './pages/JS/index'
export default {
  components: {
    // vheader
  },
  data () {
    return {
      seller: {},
      goods: {},
      rateings: {}
    }
  },
  methods: {
    getInfo () {
      this.seller = res.seller
      this.goods = res.goods
      this.rateings = res.ratings
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
@import './assets/commons/css/mixin.scss';
.tab {
  display: flex;
  justify-content: flex-start;
  height: 40px;
  line-height: 40px;
  @include borderPx(rgba(7, 17, 27, 0.1));
  .tab-item {
    flex: 1;
    text-align: center;
    & > a {
      text-decoration: none;
      display: block;
      font-size: 28px;
      color: rgb(77, 85, 93);
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
