<template>
  <div class="cart_list_item">
    <div class="item_selector">
      <check-button :is-checked="itemInfo.checked" @click.native="checkClick" />
    </div>
    <div class="item_img">
      <img :src="itemInfo.img" alt="商品图片" />
    </div>
    <div class="item_info">
      <div class="item_title">{{ itemInfo.title }}</div>
      <div class="item_desc">商品描述{{ itemInfo.desc }}</div>
      <div class="info_bottom">
        <div class="item_price left">￥{{ itemInfo.price }}</div>
        <div class="item_count left">{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
  },
};
</script>

<style lang="less" scoped>
.cart_list_item {
  display: flex;
  padding: 5px;
  width: 100%;
  font-size: 0;
  border-bottom: 1px solid #ccc;

  .item_selector {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14%;
  }

  .item_title,
  .item_desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item_img {
    padding: 5px;
    img {
      display: block;
      border-radius: 5px;
      width: 80px;
      height: 100px;
    }
  }

  .item_info {
    position: relative;
    padding: 5px 10px;
    overflow: hidden;
    font-size: 17px;
    color: #333;

    .item_desc {
      margin-top: 15px;
      font-size: 14px;
      color: #666;
    }

    .info_bottom {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      .item_price {
        color: orangered;
      }
    }
  }
}
</style>