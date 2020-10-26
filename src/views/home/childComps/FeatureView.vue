<template>
  <div class="feature">
    <div class="feature_item" v-for="(item, index) in features" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    features: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.feature {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;

  .feature_item {
    flex: 1;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
  }
}
</style>