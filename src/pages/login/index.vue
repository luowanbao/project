<template>
  <div class="login">
    <div class="headers">
      <div class="headerLeft">
        <van-cell is-link title="选择语言" @click="show = true" />
        <van-action-sheet
          v-model="show"
          :actions="actions"
          @select="onSelect"
        />
      </div>
      <div class="headerRight">
        <span class="iconfont icon-huiyuanzhongxin"></span>
        <span class="iconfont icon-shenglvehao"></span>
      </div>
    </div>
    <div class="nav">
      <div class="img">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd10118%2F560%2Fw1080h1080%2F20210528%2F447b-kquziii0966349.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625628894&t=02c4d4d75532c4192f2952138a072f62"
          alt=""
        />
      </div>
      <p>让每个人都能享受科技的乐趣</p>
    </div>
    <h3>小米账号登录</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label=""
        placeholder="邮箱/手机号码/小米ID"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label=""
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登 录</van-button
        >
      </div>
    </van-form>
    <div class="content">
      <p>手机号登录</p>
      <p>|</p>
      <p @click="goReg">立即注册</p>
    </div>
    <div class="ii">
      <i>其他方式登录</i>
    </div>
    <div class="allIcon">
      <span class="iconfont icon-weixin"></span>
      <span class="iconfont icon-weixin"></span>
      <span class="iconfont icon-weixin"></span>
      <span class="iconfont icon-weixin"></span>
      <span class="iconfont icon-weixin"></span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "vant";

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      username: "",
      password: "",
      show: false,
      actions: [
        { name: "中文（简体）" },
        { name: "中文（繁體）" },
        { name: "English" },
      ],
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    goReg() {
      this.$router.push("/reg");
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
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
.login {
  /* width: 100%; */
  /* height: 100%; */
  padding: 10px 24px 24px 24px;
}
.headers {
  /* width: 100%; */
  /* margin: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a4a4a4;
  font-size: 14px;
}
.headers .headerLeft {
  color: #a4a4a4;
}
.headers .headerRight span {
  margin-right: 18px;
}
.nav {
  padding-top: 20px;
  text-align: center;
}
.nav .img img {
  width: 70px;
  height: 70px;
}
.nav p {
  margin: 15px 0 20px 0;
  color: #a4a4a4;
  font-size: 14px;
  font-weight: 600;
}
h3 {
  font-size: 21px;
  font-weight: 900;
  padding: 25px 0 20px 0;
}
.van-form .van-cell {
  height: 55px;
  line-height: 35px;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  background: #f0f0f0;
}
.van-form .van-button {
  height: 50px;
  font-size: 16px;
}
.content {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.content p {
  margin-right: 10px;
  font-size: 14px;
}
.ii {
  text-align: center;
  padding-top: 30px;
  font-size: 12px;
  color: #d6d6d6;
}
.allIcon {
  text-align: center;
  padding-top: 10px;
}
.allIcon span {
  font-size: 28px;
  margin-right: 28px;
}
.allIcon span:nth-child(5) {
  margin-right: 0;
}
</style>