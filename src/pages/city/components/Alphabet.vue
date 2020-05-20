<template>
  <ul class="list">
    <li
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
      @touchstart="handleTouchStart"
      class="item"
      v-for="item in letters"
    >{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (var key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  data () {
    return {
      tpuchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 89
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
.list {
  position: absolute;
  top: 1.78rem;
  bottom: 0;
  right: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: steelblue;
  }
}
</style>
