<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img :src="img" alt="" />
      </div>
      <div class="font">
        <span>{{ denglu }}</span
        ><span>{{ zhuce }}</span>
      </div>
    </div>
    <div class="dingdan">
      <p class="wode">我的订单</p>
      <p class="quanbu">全部订单 <span class="iconfont icon-qianjin"></span></p>
    </div>
    <hr />
    <ul class="list">
      <li>
        <span class="iconfont icon-daifukuan"></span>
        <p>待付款</p>
      </li>
      <li>
        <span class="iconfont icon-daishouhuo1"></span>
        <p>待收货</p>
      </li>
      <li>
        <span class="iconfont icon-weixiu"></span>
        <p>退换修</p>
      </li>
    </ul>
    <div class="yanshen"></div>
    <ul class="szlist">
      <li class="li">
        <span
          style="color: #fdbf2d"
          class="iconfont icon-huiyuanzhongxin left"
        ></span
        ><span class="fonts">会员中心</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
      <li class="xian"></li>
      <li class="li">
        <span style="color: #51bbe0" class="iconfont icon-daifukuan left"></span
        ><span class="fonts">我的优惠券</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
    </ul>
    <div class="yanshen"></div>
    <ul class="szlist">
      <li class="li">
        <span
          style="color: #f96c5e"
          class="iconfont icon-fuwuzhongxin left"
        ></span
        ><span class="fonts">服务中心</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
      <li class="xian"></li>
      <li class="li">
        <span style="color: #ff8c45" class="iconfont icon-store left"></span
        ><span class="fonts">小米之家</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
    </ul>
    <div class="yanshen"></div>
    <ul class="szlist">
      <li class="li">
        <span style="color: #ffb302" class="iconfont icon-haidao_ left"></span
        ><span class="fonts">我的F码</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
      <li class="xian"></li>
      <li class="li">
        <span style="color: #f5a623" class="iconfont icon-gift_icon left"></span
        ><span class="fonts">礼物码兑换</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
    </ul>
    <div class="yanshen"></div>
    <ul class="szlist">
      <li class="li" @click="set()">
        <span style="color: #818c99" class="iconfont icon-shezhi left"></span
        ><span class="fonts">设置</span
        ><span class="iconfont icon-qianjin right"></span>
      </li>
    </ul>
    <div class="dibu"></div>
  </div>
</template>

<script>
import { getToken} from '../../utils/auth';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      img: "https://m.mi.com/static/img/avatar.76a75b8f17.png",
      denglu: "登录",
      zhuce: "/注册",
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    // 判断是否登录
    token(){
      if(getToken){
        console.log(getToken);
      }
    },
    set(){
       this.$router.push("/set")
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
   let username = localStorage.getItem("username")
   if(username!=null){
     this.denglu= `${username}`
     this.zhuce=""
   }else{
     this.denglu="登录"
     this.zhuce="注册"
   }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
     this.token()
  },
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
  width: 100%;
  height: 85px;
  background: url("https://m.mi.com/static/img/bg.63c8e19851.png") center 0
    #f37d0f;
  background-size: auto 100%;
  padding: 15px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.87);
}

.font {
  color: #fff;
  font-size: 12px;
  float: left;
  margin-top: 22px;
  margin-left: 15px;
}
.dingdan {
  padding: 15px;
}
.quanbu {
  float: right;
  font-size: 15px;
}

.wode {
  float: left;
  font-size: 17px;
}
.list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 30px;
}
.list span {
  font-size: 30px;
  color: gray;
}
.list p {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.87);
}
.yanshen {
  height: 10px;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.szlist p {
  width: 100px;
}

.szlist .left {
  float: left;
  font-size: 25px;
  line-height: 30px;
  padding: 0 10px;
}
.szlist .xian {
  width: 80%;
  margin-left: 20%;
  height: 2px;
  border-bottom: 2px solid #e3e3e3;
}
.szlist .right {
  float: right;
  font-size: 20px;
  line-height: 35px;
}
.szlist .fonts {
  font-size: 13px;
  line-height: 35px;
}
.szlist {
  display: flex;
  flex-direction: column;
}
.li {
  box-sizing: border-box;
  height: 35px;
  font-size: 13px;
}
.dibu {
  width: 100%;
  height: 100px;
  background: #f5f5f5;
}
.logo{
   width: 60px;
   height: 60px;
   border-radius:50% ;
   background: #F5B070;
   float: left;
   overflow: hidden;
}
.header img {
  width: 50px;
  float: left;
  margin: 5px;
}
</style>