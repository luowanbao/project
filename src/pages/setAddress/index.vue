<template>
  <div id="app">
     <van-nav-bar
      title="收货地址"
      left-arrow
      class="header"
      @click-left="clickLeft"
    >
     <ul>
       <li></li>
     </ul>
    </van-nav-bar>
    <div class="footer" @click="login()">新建地址</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import {DzlistApi} from "../../api/mine"
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {
    
  },
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
     token(){
       localStorage.setItem("token","aaaaaaaaaa")
     },
     clickLeft() {
      this.$router.go(-1);
    },
    // 进来显示之前添加的地址
  async  Dzlist(){
       let res=  await DzlistApi()
       console.log(res);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.token()
    this.Dzlist()
  },
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
.footer{
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  background: #FF6700;
  margin-left: 0px;
  position: absolute;
  bottom: 0px;
}
</style>