<template>
  <div
    :class="type"
    class="start"
  >
    <span
      :class="item"
      :key="index"
      class="itemStart"
      v-for="(item,index) in classMap"
    ></span>
  </div>
</template>
<script>
const LENGTH = 5
export default {
  props: ['size', 'score'],
  data () {
    return {}
  },
  computed: {
    type () {
      return 'start-' + this.size
    },
    classMap () {
      const result = []
      const score = Math.floor(this.score * 2) / 2
      const m = score % 1
      const interge = Math.floor(score)
      for (var i = 0; i < interge; i++) {
        result.push('on')
      }
      if (m) {
        result.push('half')
      }
      while (result.length < LENGTH) {
        result.push('off')
      }
      return result
    }
  }
}
</script>
<style lang="scss" scoped>
.start {
  font-size: 0;
  &.start-48 {
    .itemStart {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-right: 22px;
      &.on {
        background-image: url('../start/star48_on@2x.png');
      }
      &.off {
        background-image: url('../start/star48_off@2x.png');
      }
      &.half {
        background-image: url('../start/star48_half@2x.png');
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.start-36 {
    .itemStart {
      display: inline-block;
      width: 18px;
      height: 18px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-right: 6px;
      &.on {
        background-image: url('../start/star48_on@2x.png');
      }
      &.off {
        background-image: url('../start/star48_off@2x.png');
      }
      &.half {
        background-image: url('../start/star48_half@2x.png');
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.start-24 {
    .itemStart {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-right: 3px;
      &.on {
        background-image: url('../start/star48_on@2x.png');
      }
      &.off {
        background-image: url('../start/star48_off@2x.png');
      }
      &.half {
        background-image: url('../start/star48_half@2x.png');
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
