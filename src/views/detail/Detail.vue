<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import { getDetail, Goods, Shop } from "network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    // 1.获取到路由中的参数 --> iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求该商品详情的数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;

      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
    });
  },
};
</script>

<style>
</style>