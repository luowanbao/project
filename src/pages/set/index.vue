<template>
  <div id="app">
    <van-nav-bar
      title="个人中心"
      left-arrow
      class="header"
      @click-left="clickLeft"
      @click-right="xiangqing()"
    >
      <template #right>
        <van-icon name="search" size="20" />
      </template>
    </van-nav-bar>
    <ul class="list">
      <li>
        <span class="font" @click="adderss()">地址管理</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
      <li>
        <span class="font">经营证照</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
      <li>
        <span class="font">协议规则</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
      <li>
        <span class="font">小米商城用户协议</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
      <li>
        <span class="font">小米商城隐私政策</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
      <li>
        <span class="font">小米账号使用协议</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
      <li>
        <span class="font">小米账号隐私政策</span
        ><span class="iconfont icon-qianjin"></span>
      </li>
    </ul>
    <div class="footer" @click="login()">退出账号</div>
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
  methods: {
    // 跳转到地址管理
    adderss(){
      this.$router.push("/setAddress")
    },
    clickLeft() {
      this.$router.go(-1);
    },
    xiangqing() {
      this.$router.push("/search");
    },
    // 退出账号，返回到登录页面
    login(){
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      this.$router.push("/login")
    }
  },
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
.header {
  color: #9b9b9b;

  background: #f2f2f2;
}
#app /deep/.van-icon {
  color: #9b9b9b !important;
}
#app /deep/.van-nav-bar__text {
  color: #9b9b9b !important;
}
#app /deep/.app-header-title {
  color: #7d6666 !important;
}
.list li {
  height: 40px;
  width: 100%;
  padding-left: 20px;
  line-height: 40px;
  border-bottom: 1px solid #e2e2e2;
  color: #3c3c3c;
  display: flex;
  justify-content: space-between;
}
.iconfont {
  font-size: 18;
  color: #e2e2e2;
 margin-right: 25px;
}
.footer{
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #F4F4F4;
  margin-left: 0px;
  position: absolute;
  bottom: 0px;
}
</style>