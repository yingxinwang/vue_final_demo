<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import homeSwiper from "./childComponents/homeSwiper";

import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: { NavBar, homeSwiper },
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