<template>
  <div class="wrapper">
    <swiper
      :options="swiperOptions"
      ref="mySwiper"
    >
      <swiper-slide
        :key="index"
        v-for="(item,index) in swiperList"
      >
        <img
          :src="item.url"
          alt
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      swiperList: [
        { id: 0, url: 'https://imgs.qunarzz.com/sight/p0/1902/1c/1c8bf3c4ab1b7633a3.img.jpg_990x390_6c2514b1.jpg' },
        { id: 1, url: 'https://imgs.qunarzz.com/sight/p0/1902/97/97fb722e46e82bdda3.img.jpg_990x390_afb19586.jpg' },
        { id: 2, url: 'https://imgs.qunarzz.com/sight/p0/1902/e2/e2db9b5f9f75a63ba3.img.jpg_990x390_1091d6a9.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  background-color: #eee;
  img {
    width: 100%;
  }
}
</style>
