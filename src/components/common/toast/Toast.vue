<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(message, duration = 1000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #fff;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
