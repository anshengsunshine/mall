<template>
  <div id="category">
    <nav-bar class="nav_bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";

import TabMenu from "./childComps/TabMenu";
import TabContentCategory from "./childComps/TabContentCategory";
import TabContentDetail from "./childComps/TabContentDetail";

export default {
  name: "category",
  components: {
    NavBar,
    Scroll,
    TabControl,
    TabMenu,
    TabContentCategory,
    TabContentDetail,
  },
};
</script>

<style lang="less" scoped>
#category {
  height: 100vh;

  .nav_bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
}
</style>
