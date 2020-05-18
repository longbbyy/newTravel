<template>
  <div class="home">
    <home-head></home-head>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommend></recommend>
    <week></week>
  </div>
</template>

<script>
import homeHead from './components/homeheade.vue'
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/homeicons.vue'
import recommend from './components/recomend.vue'
import week from './components/week.vue'

export default {
  components: { homeHead, homeSwiper, homeIcons, recommend, week }
}
</script>

<style lang="scss">
</style>
