<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="item_icon"></slot></div>
    <div v-else>
      <slot name="item_icon_active"></slot>
    </div>
    <!-- <div :class="{ active: isActive }"> -->
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      console.log(this.path);
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab_bar_item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
