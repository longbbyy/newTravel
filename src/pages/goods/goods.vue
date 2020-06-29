<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li
          :key="index"
          class="menu-item"
          v-for="(item,index) in goods"
        >
          <span class="text">
            <span
              :class="classMap[item.type]"
              class="icon"
              v-show="item.type>0"
            ></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li
          :key="index"
          class="food-list"
          v-for="(item,index) in goods"
        >
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li
              :key="index"
              class="food-item"
              v-for="(food,index) in item.foods"
            >
              <div class="icon">
                <img
                  :src="food.icon"
                  alt
                />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name}}</h2>
                <p class="desc">{{ food.description}}</p>
                <div class="extra">
                  <span>月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating}}%</span>
                </div>
                <div class="price">
                  <span>￥{{ food.price }}</span>
                  <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { res } from '../JS/index'
export default {
  components: {},
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: res.goods,
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  created () {
    console.log(this.goods)
  }
}
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
.goods {
  position: absolute;
  width: 100%;
  top: 181px;
  bottom: 46px;
  display: flex;
  overflow: hidden;
  .menu-wrapper {
    width: 80px;
    background-color: #f3f5f7;
    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      line-height: 14px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.2);
      margin: 0 auto;
      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.discount {
          background-image: url('../header/discount_1@2x.png');
        }
        &.decrease {
          background-image: url('../header/decrease_1@2x.png');
        }
        &.guarantee {
          background-image: url('../header/guarantee_1@2x.png');
        }
        &.invoice {
          background-image: url('../header/invoice_1@2x.png');
        }
        &.special {
          background-image: url('../header/special_1@2x.png');
        }
      }
      .text {
        font-size: 12px;
        display: table-cell;
        width: 56px;
        vertical-align: middle;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
  }
}
</style>
