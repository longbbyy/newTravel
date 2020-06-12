<template>
  <div
    :class="startType"
    class="start"
  >
    <span
      :class="itemClass"
      :key="index"
      class="start-item"
      v-for="(itemClass,index) in itemClasses"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  data () {
    return {}
  },
  computed: {
    startType () {
      return 'start-' + this.size
    }
  }
}
</script>

<style lang="scss" scoped>
.start {
  font-size: 0;
  .start-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.start-48 {
    .start-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url('./start48_on@2x.png');
      }
      &.half {
        background-image: url('./start48_half@2x.png');
      }
      &.off {
        background-image: url('./start48_off@2x.png');
      }
    }
  }
  &.start-36 {
    .start-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url('./start36_on@2x.png');
      }
      &.half {
        background-image: url('./start36_half@2x.png');
      }
      &.off {
        background-image: url('./start36_off@2x.png');
      }
    }
  }
  &.start-24 {
    .start-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url('./start24_on@2x.png');
      }
      &.half {
        background-image: url('./start24_half@2x.png');
      }
      &.off {
        background-image: url('./start24_off@2x.png');
      }
    }
  }
}
</style>
