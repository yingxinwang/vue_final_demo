<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods"
      :key="item"
      :goods-item="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./goodsListItem";

export default {
  name: "goodsList",
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>