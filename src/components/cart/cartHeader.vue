<!--
 * @Author: your name
 * @Date: 2021-06-05 16:00:06
 * @LastEditTime: 2021-06-05 16:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\project\src\components\cart\cartHeader.vue
-->

<template>
  <div class="">
    <slot name="left"></slot>
    购物车
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {};
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
</style>
