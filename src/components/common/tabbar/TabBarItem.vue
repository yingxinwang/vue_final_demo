<template>
  <div class="TabBarItem" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
import { registerRuntimeCompiler } from 'vue';
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#1296db'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // 两种方法都可以
      // indexOf找到了$route.path返回索引值？
      // return this.$route.path.indexOf(this.path) !== -1;
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.isActive?{color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.TabBarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: #888888;
}

/* .TabBarItem img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
} */

/* .active {
  color: #1296db;
} */
</style>