import {
    debounce
} from "./utils";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            newRefresh: null,
        }
    },
    mounted() {
        // 1.监听item中图片加载完成
        // 对this.$refs.scroll.refresh做防抖操作
        this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
        // 对监听的事件进行保存
        this.itemImgListener = () => {
            this.newRefresh();
        };
        this.$bus.$on("itemImageLoad", this.itemImgListener);
    },
}