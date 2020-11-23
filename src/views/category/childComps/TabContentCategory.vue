<template>
  <div>
    <grid-view
      :cols="3"
      :lineSpace="15"
      :v-margin="20"
      v-if="subcategories.list"
    >
      <div
        class="item"
        v-for="(item, index) in subcategories.list"
        :key="index"
      >
        <a :href="item.link">
          <img class="item_img" :src="item.image" alt="" />
          <div class="item_text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";
export default {
  name: "TabContentCategory",
  components: {
    GridView,
  },
  props: {
    subcategories: {
      type: Object,
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;

  .item_img {
    width: 80%;
  }

  .item_text {
    margin-top: 15px;
  }
}
</style>