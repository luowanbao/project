<!--
 * @Author: your name
 * @Date: 2021-06-08 14:18:46
 * @LastEditTime: 2021-06-08 15:07:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\pages\waitPay\index.vue
-->
<template>
  <div class="waitPay">
    <div class="page-wrap">
      <div class="waitP">
        <h3>等待付款</h3>
      </div>
      <div class="info">
        <div class="warp">
          <div>
            <span class="txt1">订单编号：</span
            ><span class="orderNo">{{ order.no }}</span>
          </div>
          <div>
            <span class="txt1">付款总额：</span
            ><span class="sumPrice">{{ order.price }}</span>
          </div>
        </div>
      </div>
      <div class="ui-line"></div>
      <van-notice-bar mode="link" @click="warn"
        >技术是开发它的人的共同灵魂。</van-notice-bar
      >
      <div class="ui-line"></div>
    </div>
    <div class="btn">
      <div class="left" @click="goOrderList">查看订单</div>
      <div class="right" @click="goHome">返回首页</div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      order: null,
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    warn() {
      location.href = "//s1.mi.com/m/we/detail/anti-fraud.html";
    },
    goOrderList() {
      this.$router.push({
        path: "/myOrder",
      });
    },
    goHome() {
      this.$router.push({
        path: "/home",
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let myOrderInfo = this.$store.state.myOrderInfo;
    console.log(myOrderInfo.order);
    this.order = myOrderInfo.order;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.waitPay .ui-line {
  height: 10px;
  background: #f5f5f5;
}
.waitPay .van-notice-bar {
  height: 48px;
}
.waitPay .page-wrap .waitP {
  background: #8bc34a;
  text-align: center;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.waitPay .page-wrap .waitP h3 {
  color: #fff;
  font-size: 36px;
  font-weight: 900;
}
.waitPay .page-wrap .info {
  height: 60px;
  overflow: hidden;
}
.waitPay .page-wrap .info .warp {
  height: 40px;
  margin: 10px 20px;
}
.waitPay .page-wrap .info .warp div {
  height: 20px;
}

.waitPay .page-wrap .info .txt1 {
  color: #3c3c3c;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.waitPay .page-wrap .info .orderNo,
.waitPay .page-wrap .info .sumPrice {
  color: #3c3c3c;
  font-size: 14px;
}
.waitPay .btn {
  height: 50px;
  border-top: 1px solid #f5f5f5;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.waitPay .btn div:first-child {
  width: 50%;
  border-right: 1px solid #f5f5f5;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.waitPay .btn div:last-child {
  width: 50%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
