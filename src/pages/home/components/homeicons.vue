<template>
  <div class="homeIcons">
    <swiper :options="swiperOptions">
      <swiper-slide
        :key="index"
        v-for="(itemlist,index) in iconSwiperList"
      >
        <div
          :key="index"
          class="item"
          v-for="(item,index) in itemlist"
        >
          <div class="item-img">
            <img
              :src="item.url"
              alt
            />
          </div>
          <p class="desc">热门景点</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {},
      iconsList: [
        {
          id: 0,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png'
        },
        {
          id: 1,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'
        },
        {
          id: 2,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png'
        },
        {
          id: 3,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png'
        },
        {
          id: 4,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png'
        },
        {
          id: 5,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png'
        },
        {
          id: 6,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png'
        },
        {
          id: 7,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png'
        },
        {
          id: 8,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png'
        },
        {
          id: 9,
          url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png'
        }
      ]
    }
  },
  computed: {
    iconSwiperList () {
      var pages = []
      this.iconsList.forEach((item, index) => {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scope>
@import '~@/assets/style/varirable.scss';
@import '~@/assets/style/mixin.scss';
.homeIcons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  .item {
    position: relative;
    width: 25%;
    float: left;
    padding-bottom: 25%;
    height: 0;
    overflow: hidden;
    .item-img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $textColor;
      @include elipse;
    }
  }
}
</style>
