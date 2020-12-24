<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommand-views :recommends="recommends"></home-recommand-views>
    <home-feature-view></home-feature-view>
    <tab-control :titles="['', '', '']"></tab-control>
  </div>
</template>

<script>
import homeSwiper from "./childComponents/homeSwiper";
import homeRecommendViews from "./childComponents/homeRecommendViews";
import homeFeatureView from "./childComponents/homeFeatureView";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/tabControl";

import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    homeSwiper,
    homeRecommendViews,
    homeFeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  /* background-color: var(--color-tint); */
  background-color: #45a9df;
  color: #fff;
}
</style>