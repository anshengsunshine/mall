<template>
  <div class="bottom_bar">
    <div class="bar_item bar_left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar_item bar_right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style lang="less" scoped>
.bottom_bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  display: flex;
  text-align: center;
  background-color: #fff;

  .bar_item {
    flex: 1;
    display: flex;
    div {
      flex: 1;
    }
  }
  .bar_left {
    .text {
      font-size: 13px;
    }
    .icon {
      display: block;
      width: 22px;
      height: 22px;
      margin: 10px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") 0 100%;
      background-size: 100%;
    }
    .service {
      background-position: 0 -52px;
    }
    .shop {
      background-position: 0 -98px;
    }
    .select {
      background-position: 0 0px;
    }
  }
  .bar_right {
    display: flex;
    font-size: 15px;
    color: #fff;
    line-height: 58px;
    .cart {
      background-color: #ffe817;
      color: #333;
    }
    .buy {
      background-color: #f69;
    }
  }
}
</style>