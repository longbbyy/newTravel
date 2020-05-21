<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="botton-wrapper">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            :key="item.id"
            @click="handleCityChange(item.name)"
            class="botton-wrapper"
            v-for="item in hot"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div
        :key="key"
        :ref="key"
        class="area"
        v-for="(item,key) in cities"
      >
        <div class="title">{{ key }}</div>
        <div
          :key="innerItem.id"
          class="item-list"
          v-for="innerItem in item"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityChange (city) {
      this.$store.dispatch('changeCity', city)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
.list {
  position: absolute;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .area {
    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      color: #666;
      font-size: 0.26rem;
    }
    .button-list {
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      .botton-wrapper {
        float: left;
        width: 33%;
        .button {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }
    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>
