<template>
  <div class="back_top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style lang="less" scoped>
.back_top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  img {
    width: 43px;
    height: 43px;
  }
}
</style>