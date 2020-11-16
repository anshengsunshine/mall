<template>
  <div id="category">
    <nav-bar class="nav_bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "category",
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
