<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>

    <scroll
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommand-views :recommends="recommends"></home-recommand-views>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['', '', '']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import homeSwiper from "./childComponents/homeSwiper";
import homeRecommendViews from "./childComponents/homeRecommendViews";
import homeFeatureView from "./childComponents/homeFeatureView";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/tabControl";
import GoodsList from "@/components/content/goods/goodsList";
import scroll from "@/components/commson/scroll/scroll";
import BackTop from "@/components/content/backTop/backTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { debounce } from "@/common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    homeSwiper,
    homeRecommendViews,
    homeFeatureView,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
    debounce,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImageLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}

.home-nav {
  /* background-color: var(--color-tint); */
  background-color: #45a9df;
  color: #fff;
}
</style>