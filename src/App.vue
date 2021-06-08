<!--
 * @Author: your name
 * @Date: 2021-06-05 19:03:21
 * @LastEditTime: 2021-06-08 15:01:20
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
  watch: {
    "$route.path": function (toPath, fromPath) {
      this.$store.commit("toPath", toPath);
      this.$store.commit("fromPath", fromPath);
    },
  },
  created() {
    let listProJs = localStorage.getItem("listProJs");
    let sumPriceProJs = localStorage.getItem("sumPriceProJs");
    let countProJs = localStorage.getItem("countProJs");
    let userInfo = localStorage.getItem("userInfo");
    let myOrderInfo = localStorage.getItem("myOrderInfo");
    this.$store.commit("listProJs", JSON.parse(listProJs));
    this.$store.commit("sumPriceProJs", sumPriceProJs);
    this.$store.commit("countProJs", countProJs);
    this.$store.commit("userInfo", JSON.parse(userInfo));
    this.$store.commit("myOrderInfo", JSON.parse(myOrderInfo));
  },
};
</script>

<style>
#app {
  overflow-x: hidden;
}
</style>
