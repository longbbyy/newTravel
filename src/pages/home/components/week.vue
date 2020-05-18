<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul class="list">
      <li
        :key="item.id"
        class="item"
        v-for="item in list"
      >
        <div class="item-img">
          <img
            :src="item.url"
            alt
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 0,
          url: 'https://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_256x160_0b11ae8b.jpg',
          title: '东方明珠',
          desc: '感受云端漫步，品味老上海风情'
        },
        {
          id: 1,
          url: 'https:////img1.qunarzz.com/sight/p0/1708/ad/ad1d9eb4f8bbda42a3.img.jpg_256x160_37cb0605.jpg',
          title: '豫园',
          desc: '奇秀甲于东南,东南名园冠'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/varirable.scss';
@import '~@/assets/style/mixin.scss';
.recommend {
  .title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }
  .list {
    height: 1.8rem;
    .item-img {
      overflow: hidden;
      height: 0;
      padding-bottom: 62%;
      img {
        width: 100%;
      }
    }
    .item-info {
      padding: 0.1rem;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        @include elipse;
      }
      .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        @include elipse;
      }
    }
  }
}
</style>
