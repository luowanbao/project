<!--
 * @Author: your name
 * @Date: 2021-06-05 19:03:21
 * @LastEditTime: 2021-06-05 20:21:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-if="this.$route.meta.footerShow"></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  overflow-x: hidden;
}
</style>
