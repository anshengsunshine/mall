import {
    debounce
} from "./utils";
import BackTop from "components/content/backTop/BackTop";
import {
    BACK_POSITION,
    POP,
    SELL,
    NEW
} from "common/const";


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

// 回到顶部
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTopClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > BACK_POSITION
        }
    }
}

//分类页-商品列表
export const tabControlMixin = {
    data() {
        return {
            currentType: POP
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = POP
                    break;
                case 1:
                    this.currentType = NEW
                    break;
                case 2:
                    this.currentType = SELL
                    break;
            }
            console.log("aaaaaaaaaa---->", this.currentType)
        }
    }
}