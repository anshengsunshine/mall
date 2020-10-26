<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    setTimeout(this.__initScroll, 20);
    console.log(this.__initScroll)
  },
  methods: {
    __initScroll() {
      // 1.初始化BScroll对象
      if (!this.$refs.wrapper) return;
      console.log(this.$refs.wrapper);

      this.scroll = new BScroll(this.$refs.wrapper, {
        // probeType: this.probeType,
        // click: true,
        // pullUpLoad: this.pullUpLoad,
      });
      console.log(this.scroll);

      //   // 2.将监听事件回调
      //   this.scroll.on("scroll", (pos) => {
      //     this.$emit("scroll", pos);
      //   });

      //   // 3.监听上拉到底部
      //   this.scroll.on("pullingUp", () => {
      //     console.log("上拉加载");
      //     this.$emit("pullingUp");
      //   });
    },
  },
  //   mounted() {
  //     this.scroll = new BScroll(this.$refs.wrapper, {
  //       probeType: 3,
  //       pullUpLoad: true,
  //     });
  //     console.log(this.scroll);
  //     //   this.scroll.on("scroll", (position) => {
  //     //     console.log(position);
  //     //   });
  //     //   this.scroll.on("pullingUp", () => {
  //     //     console.log("上拉加载更多");
  //     //   });
  //   },
};
</script>

<style>
</style>