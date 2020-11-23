<template>
  <scroll id="tab_menu">
    <div class="menu_list">
      <div
        class="menu_list_item"
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "TabMenu",
  props: {
    categories: Array,
  },
  components: {
    Scroll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    },
  },
};
</script>

<style lang="less" scoped>
#tab_menu {
  width: 100px;
  height: 100%;
  background-color: #f6f6f6;
  box-sizing: border-box;
  // overflow-y: auto;

  .menu_list_item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu_list_item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
}
</style>