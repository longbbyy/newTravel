<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul class="list">
      <li
        :key="item.id"
        class="item"
        v-for="item in list"
      >
        <img
          :src="item.url"
          alt
        />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
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
  },
  computed: {}
}
</script>

<style lang="scss" scope>
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
    .item {
      display: flex;
      img {
        width: 2.56rem;
        height: 1.6rem;
        padding: 0.1rem;
      }
      .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;
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
        .item-button {
          line-height: 0.44rem;
          margin-top: 0.16rem;
          background-color: #ff9300;
          border-radius: 0.06rem;
          color: #fff;
        }
      }
    }
  }
}
</style>
