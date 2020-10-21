<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  padding: 12px 0 15px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;

  .recommend-item {
    flex: 1;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>