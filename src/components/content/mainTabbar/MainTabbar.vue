<template>
  <tab-bar>
    <tab-bar-item path="/all">
      <template #item-icon>
        <img src="~@/assets/img/tabbarPic/all.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbarPic/all-blue.png" alt="" />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/class">
      <template #item-icon>
        <img src="~@/assets/img/tabbarPic/class.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbarPic/class-blue.png" alt="" />
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template #item-icon>
        <img src="~@/assets/img/tabbarPic/shop-cart.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbarPic/shop-cart-blue.png" alt="" />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <template #item-icon>
        <img src="~@/assets/img/tabbarPic/mine.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~@/assets/img/tabbarPic/mine-blue.png" alt="" />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "@/components/common/tabbar/TabBar.vue";
import tabBarItem from "@/components/common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabbar",
  components: {
    tabBar,
    tabBarItem
  },
};
</script>

<style scoped>
.TabBarItem img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>