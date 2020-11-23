<template>
  <grid-view>
    <good-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goodsItem="item"
    ></good-list-item>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodListItem from "components/content/goods/GoodsListItem";

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodListItem,
  },
  props: {
    categoryDetail: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>