<template>
  <div id="category">
    <nav-bar class="nav_bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab_content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <tab-control :titles="['综合','新品','数量']" @itemClick="tabClick"></tab-control>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";

import TabMenu from "./childComps/TabMenu";
import TabContent from "./childComps/TabContent";
import TabContentCategory from "./childComps/TabContentCategory";
import TabContentDetail from "./childComps/TabContentDetail";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

import { POP, SELL, NEW } from "common/const";
import { tabControlMixin } from "common/mixin";


export default {
  name: "category",
  components: {
    NavBar,
    Scroll,
    TabControl,
    TabMenu,
    TabContent,
    TabContentCategory,
    TabContentDetail
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  crated() {
    // 1.请求分类数据
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail(){
      if(this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods:{
    _getCategory(){
      getCategory().then(res => {
        console.log(res)
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for(let i = 0;i<this.categories.length;i++){
          this.categoryData[i] = {
            subcategories:{},
            categoryDetail:{
              'pop':[],
              'new':[],
              'sell':[]
            }
          }
        }
        // 3. 请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index){
      this.currentIndex = index;
      const mailKey = this.categories[index].mailKey;
      getSubcategory(mailKey).then(res=>{
        this.categoryData[index].subcategories = res.data;
        this.categoryData = {...this.categoryData};
        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      })
    },
    _getCategoryDetail(type){
      // 1.获取请求的miniWallKey
      const miniWallKey = this.categories[this.currentIndex].miniWallKey;
      // 2.发送请求，传入miniWallKey和type
      getCategoryDetail(miniWallKey,type).then(res=>{
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    /**
     * 事件响应相关的办法
    */
   selectItem(index){
     this._getSubcategories(index)
   }
  }
};
</script>

<style lang="less" scoped>
#category {
  height: 100vh;

  .nav_bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }

  #tab_content {
    height: 100%;
    flex: 1;
  }
}
</style>
