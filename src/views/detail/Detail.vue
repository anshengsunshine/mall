<template>
  <div id="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
  },
  created() {
    this.iid = this.$route.params.iid;
  },
  data() {
    return {
      iid: null,
    };
  },
};
</script>

<style>
</style>