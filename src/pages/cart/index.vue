<!--
 * @Author: your name
 * @Date: 2021-06-05 15:53:18
 * @LastEditTime: 2021-06-05 17:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\project\src\pages\cart\index.vue
-->
<template>
  <div class="cart">
    <CartHeader class="cartlHeader">
      <img
        @click="goback"
        slot="left"
        class="left"
        src="@/assets/img/fanhui.png"
        alt=""
      />
      <img
        @click="search"
        slot="right"
        class="right"
        src="@/assets/img/sousuo.png"
        alt=""
      />
    </CartHeader>

    <div class="nologin" v-if="!flag">
      <a href="" @click.prevent="goLogin" class="link">
        <span class="txt1">登录后享受更多优惠</span>
        <span class="txt2">去登录</span>
      </a>
    </div>

    <div class="cart-list">
      <ol>
        <li class="item">
          <div class="proDesc">
            <input type="checkbox" />
            <a href="" class="img">
              <img src="../../assets/img/cs.jpg" alt="" />
            </a>
            <div class="info">
              <div class="txt1">MIX FOLD 小米折叠屏手机 12GB+256GB 黑色</div>
              <div class="txt2"><span>售价：</span><span>9999元</span></div>
              <div class="caozuo">
                <van-stepper v-model="value" disable-input />
                <van-icon name="delete-o" size="25" color="#999" />
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CartHeader from "../../components/cart/cartHeader.vue";
import { getToken } from "../../utils/auth";
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {
    CartHeader,
  },
  data() {
    //这里存放数据,返回值为一个对象
    return {
      flag: getToken(),
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    goback() {
      // this.$router.push({
      //   path: "/",
      // });
      alert("敬请期待！");
    },
    search() {
      alert("敬请期待！");
    },
    goLogin() {
      alert("敬请期待！");
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
.cartlHeader {
  height: 50px;
  line-height: 50px;
  color: #666;
  background: #f2f2f2;
  font-size: 15px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cartlHeader .left {
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.cartlHeader .right {
  display: block;
  width: 28px;
  height: 28px;
  margin-right: 10px;
}
.nologin {
  color: #212121;
  height: 54px;
}
.nologin .link {
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nologin .link .txt1 {
  color: #212121;
  font-size: 16px;
  margin-left: 10px;
}
.nologin .link .txt2 {
  color: #999;
  font-size: 14px;
  margin-right: 20px;
}
.nologin .link .txt2::after {
  content: ">";
  margin-left: 5px;
}
.cart .cart-list {
  background: skyblue;
}
.cart .cart-list ol {
  height: 100%;
}
.cart .cart-list ol .item {
  width: 100%;
  min-height: 100px;
}
.cart .cart-list ol .item .proDesc {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 0;
}
.cart .cart-list ol .item .img {
  display: block;
  width: 90px;
  height: 90px;
  margin: 0 10px 0 0;
}

.cart .cart-list ol .item .proDesc input {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 5px;
}
.cart .cart-list ol .item .proDesc img {
  display: block;
  width: 90px;
  height: 90px;
}

.cart .cart-list ol .item .info {
  min-height: 100px;
  width: 220px;
}
.cart .cart-list ol .item .info .txt1 {
  color: #666;
}
.cart .cart-list ol .item .info .txt2 {
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}
.cart .cart-list ol .item .info .caozuo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart .cart-list ol .item .info .van-stepper {
  height: 32px;
  margin-top: 5px;
}
</style>