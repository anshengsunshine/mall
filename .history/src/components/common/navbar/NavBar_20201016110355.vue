<template>
  <div id="nav_bar">
    <div name="left"></div>
    <div name="center"></div>
    <div name="right"></div>
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
