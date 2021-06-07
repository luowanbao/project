<template>
  <div class="reg">
    <div class="headers">
      <div class="headerLeft">
        <span class="iconfont icon-fanhui"></span>
      </div>
      <div class="headerRight">
        <span class="iconfont icon-huiyuanzhongxin"></span>
        <span class="iconfont icon-shenglvehao"></span>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

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
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.reg {
  /* width: 100%; */
  /* height: 100%; */
  padding: 24px;
}
.headers {
  /* width: 100%; */
  /* margin: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343434;
  font-size: 15px;
}
.headers .headerLeft {
  color: #343434;
}
.headers .headerRight span {
  margin-right: 18px;
}
</style>