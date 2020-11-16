<template>
  <div class="bottom_bar ignore">
    <div class="check_content" @click="checkClick">
      <check-button class="check_btn" :is-checked="isSelectAll" />
      <span>全选</span>
    </div>

    <div class="price">合计：{{ totalPrice }}</div>

    <div class="calculate">去计算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preVal, item) => {
            console.log(item);
            return preVal + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      // return !this.cartList.filter((item) => !item.checked).length;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style lang="less" scoped>
.bottom_bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;

  .check_content {
    display: flex;
    align-items: center;
    margin-left: 10px;

    .check_btn {
      display: flex;
      margin-right: 5px;
      width: 20px;
      height: 20px;
      line-height: 1;
    }
  }

  .price {
    margin-left: 20px;
    flex: 1;
  }

  .calculate {
    padding: 0 10px;
    width: 100px;
    background-color: #f00;
    color: #fff;
    text-align: center;
  }
}
</style>