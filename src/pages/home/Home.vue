<template>
  <div class="home">
    <home-head></home-head>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommend></recommend>
  </div>
</template>

<script>
import homeHead from './components/homeheade.vue'
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/homeicons.vue'
import recommend from './components/recomend.vue'
export default {
  components: { homeHead, homeSwiper, homeIcons, recommend }
}
</script>

<style lang="scss">
</style>
