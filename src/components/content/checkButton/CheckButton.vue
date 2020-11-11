<template>
  <div class="check_btn" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.check_btn {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check {
  border-color: red;
  background-color: red;
}
</style>