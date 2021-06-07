<template>
  <div class="reg">
    <div class="headers">
      <div class="headerLeft">
        <span class="iconfont icon-fanhui1"></span>
      </div>
      <div class="headerRight">
        <span class="iconfont icon-hulianwang"></span>
        <span class="iconfont icon-anquan1"></span>
        <span class="iconfont icon-doubt"></span>
      </div>
    </div>
    <h3>注册小米账号</h3>
    <p class="count">系统会根据您选择的国家/地区的法律法规存储您的个人信息</p>
    <div class="photo">
      <van-uploader :after-read="afterRead" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="昵称"
        label=""
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
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
        placeholder="请输入6-18位密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登 录</van-button
        >
      </div>
    </van-form>
    <p class="countT">
      已同意并阅读小米账号<a href="">用户协议</a>和<a href="">隐私政策</a>
    </p>
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
    return {
      username: "",
      password: "",
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    //图片上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    //提交注册
    onSubmit(values) {
      console.log("submit", values);
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
.reg {
  padding: 24px;
  background: chartreuse;
}
.headers {
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

h3 {
  font-size: 21px;
  font-weight: 900;
  padding: 25px 0 15px 0;
}

.van-uploader {
  padding-top: 10px;
}

.count {
  background: chocolate;
  font-size: 14px;
  color: #2792ff;
  height: 45px;
  line-height: 25px;
}

.van-form .van-cell {
  height: 50px;
  line-height: 32px;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  background: #f0f0f0;
}
.van-form .van-button {
  height: 50px;
  font-size: 16px;
}

.countT {
  font-size: 14px;
  color: #666666;
  text-align: center;
  padding-top: 30px;
}
</style>