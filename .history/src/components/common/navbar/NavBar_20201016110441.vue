<template>
  <div id="nav_bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>
