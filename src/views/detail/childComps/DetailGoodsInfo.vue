<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods_info">
    <div class="info_desc clear_fix">
      <div class="start left"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end right"></div>
    </div>
    <div class="info_key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info_list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default: {},
    },
  },
  watch: {
    detailInfo() {
      // 获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      // 判断所有的图片都加载完了，那么进行一次回调就可以了
      if (++this.counter === this.imagesLength) {
        this.$emit("detailImageLoad");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.goods_info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  .info_desc {
    padding: 0 15px;
    .start,
    .end {
      position: relative;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
    }
    .start::before,
    .end::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 5px;
      height: 5px;
      background-color: #333;
    }
    .end::after {
      right: 0;
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
    }
  }
  .info_key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info_list img {
    width: 100%;
  }
}
</style>