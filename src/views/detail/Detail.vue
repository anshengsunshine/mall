<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImages="topImages" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import { getDetail } from "network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    // 1.获取到路由中的参数 --> iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求该商品详情的数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 1.获取顶部的图片轮播数据
      this.topImages = res.result.itemInfo.topImages;
    });
  },
};
</script>

<style>
</style>