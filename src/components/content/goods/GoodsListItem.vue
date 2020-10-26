<template>
  <div class="goods_item">
    <img :src="goodsItem.show.img" :alt="goodsItem.title" @load="imageLoad" />
    <div class="goods_info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
  },
};
</script>

<style lang="less" scoped>
.goods_item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods_info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    overflow: hidden;
    p {
      margin-bottom: 3px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("~assets/img/common/collect.svg");
      background-size: 14px 14px;
    }
  }
}
</style>
