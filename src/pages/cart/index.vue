<!--
 * @Author: your name
 * @Date: 2021-06-05 15:53:18
 * @LastEditTime: 2021-06-08 21:26:29
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

    <div class="cart-list" v-if="flagShow">
      <ol>
        <li class="item" v-for="item in cartList" :key="item._id">
          <div class="proDesc">
            <!-- <input type="checkbox" :value="item.product._id" @click="change" /> -->
            <van-checkbox
              v-model="item.checked"
              checked-color="#FF5722"
              icon-size="24px"
              :id="item.product._id"
              aria-checked="true"
            ></van-checkbox>
            <a href="" class="img" @click.prevent="goDetail(item.product._id)">
              <img :src="item.product.coverImg" alt="" />
            </a>
            <div class="info">
              <div class="txt1">{{ item.product.name }}</div>
              <div class="txt2">
                <span>售价：</span><span>{{ item.product.price }}元</span>
              </div>
              <div class="caozuo">
                <van-stepper
                  v-model="item.quantity"
                  disable-input
                  @plus="add(item.product._id, 1)"
                  @minus="reduce(item.product._id, -1)"
                />
                <van-icon
                  name="delete-o"
                  size="25"
                  color="#999"
                  @click="delPro(item._id)"
                />
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div class="kong-cart" v-if="!flagShow">
      <a href="" @click.prevent="goShop">
        <van-icon name="shopping-cart-o" size="45" color="#E2E1E2" />
        <span class="txt1">购物车还是空的</span>
        <div class="txt2">去逛逛</div>
      </a>
    </div>

    <div class="point" v-if="flagShow">
      <div>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</div>
    </div>
    <div class="recommend-top-img">
      <img src="@/assets/img/cnxh.jpg" alt="" />
    </div>
    <div class="cnxh-list">
      <ul>
        <li v-for="item in proList" :key="item._id" @click="detail(item._id)">
          <img :src="item.coverImg" alt="" />
          <span class="desc">{{ item.name }}</span>
          <span class="price">{{ item.price }}元</span>
        </li>
      </ul>
    </div>

    <div class="cartFotter">
      <div class="price">
        <p class="small-word">
          共<span>0</span>件&nbsp;&nbsp;<span>金额：</span>
        </p>
        <p class="big-word">
          <strong>{{ sumPrice }}</strong
          ><span class="small-word">&nbsp;&nbsp;元</span>
        </p>
      </div>
      <div class="jxgw" @click="goFenlei">继续购物</div>
      <div class="qjs" @click="goSettlement">去结算</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CartHeader from "../../components/cart/cartHeader.vue";
import { getToken } from "../../utils/auth";
import { Toast } from "vant";
import {
  reqGetCartList,
  reqGetProList,
  reqAddCart,
  reqDelPro,
} from "../../api/cart";
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {
    CartHeader,
  },
  data() {
    //这里存放数据,返回值为一个对象
    return {
      flag: getToken(),
      flagShow: false,
      cartList: [],
      proList: [],
      // singleList: [],
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {
    sumPrice() {
      // let num = 0;
      return this.cartList
        .filter((item) => item.checked)
        .reduce((pre, cur) => {
          return pre + parseInt(cur.product.price) * parseInt(cur.quantity);
        }, 0);
    },
  },
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {
    cartList() {
      if (this.cartList.length == 0) {
        this.flagShow = false;
      } else {
        this.flagShow = true;
      }
    },
  },
  //方法集合
  methods: {
    goback() {
      this.$router.push({
        path: this.$store.state.fromPath,
      });
    },
    search() {
      this.$router.push({
        path: "/search",
      });
    },
    goLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    async getCartList() {
      let res = await reqGetCartList();
      console.log(res.data);
      this.cartList = res.data;
    },
    async getProList() {
      let res = await reqGetProList();
      console.log(res.data.products);
      this.proList = res.data.products;
    },
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },
    detail(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },
    goFenlei() {
      this.$router.push({
        path: "/fenlei",
      });
    },
    async add(product, quantity) {
      console.log(product, quantity);
      let res = await reqAddCart({ product, quantity });
      console.log(res);
    },
    async reduce(product, quantity) {
      let res = await reqAddCart({ product, quantity });
      console.log(res);
    },
    async delPro(id) {
      let res = await reqDelPro(id);
      console.log(res);
      let index = this.cartList.findIndex((item) => item._id == id);
      this.cartList.splice(index, 1);
    },
    goShop() {
      this.$router.push({
        path: "/home",
      });
    },
    goSettlement() {
      console.log(this.sumPrice);
      if (this.cartList.filter((item) => item.checked).length > 0) {
        this.$store.commit(
          "listProJs",
          this.cartList.filter((item) => item.checked)
        );
        this.$store.commit("sumPriceProJs", this.sumPrice);
        this.$store.commit(
          "countProJs",
          this.cartList.filter((item) => item.checked).length
        );
        localStorage.setItem(
          "listProJs",
          JSON.stringify(this.cartList.filter((item) => item.checked))
        );
        localStorage.setItem("sumPriceProJs", JSON.stringify(this.sumPrice));
        localStorage.setItem(
          "countProJs",
          JSON.stringify(this.cartList.filter((item) => item.checked).length)
        );
        this.$router.push({
          path: "/settlement",
        });
      } else {
        Toast("请勾选要结算的商品");
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getCartList();
    this.getProList();
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
  // beforeRouteEnter(to, from, next) {
  //   console.log(to, from, next);
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log(to, from, next);
  //   this.$router.push({
  //     path: from.path,
  //   });
  // },
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
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
  margin-top: 51px;
}
.nologin .link {
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
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
.cart {
  background: #f5f5f5;
}
.cart .cart-list {
  background: #f5f5f5;
  /* padding-bottom: 10px; */
  margin-top: 51px;
}
.cart .cart-list ol {
  height: 100%;
}
.cart .cart-list ol .item {
  width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  background: #fff;
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
  /* border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none; */
}
.cart .cart-list ol .item .proDesc .van-checkbox {
  margin: 0 5px 0 5px;
}
.cart .cart-list ol .item .proDesc img {
  border: 1px solid #eeeeee;
  display: block;
  width: 90px;
  height: 90px;
}

.cart .cart-list ol .item .info {
  min-height: 90px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart .cart-list ol .item .info .txt1 {
  color: #666;
  margin-bottom: 5px;
}
.cart .cart-list ol .item .info .txt2 {
  color: #999;
  font-size: 12px;
  margin-bottom: 5px;
}
.cart .cart-list ol .item .info .caozuo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart .cart-list ol .item .info .van-stepper {
  height: 26px;
}

.cart .kong-cart {
  background: #ebebeb;
  margin-top: 51px;
}
.cart .kong-cart a {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart .kong-cart a .txt1 {
  color: #999;
  font-size: 12px;
  margin-left: 5px;
}
.cart .kong-cart a .txt2 {
  border: 1px solid #c8c8c8;
  color: #666;
  font-size: 12px;
  padding: 5px;
  margin-left: 5px;
}

.cart .point {
  height: 35px;
  background: #fff;
}
.cart .point div {
  color: #999;
  font-size: 12px;
  text-align: center;
  line-height: 35px;
}
.cart .recommend-top-img {
  width: 100%;
}
.cart .recommend-top-img img {
  width: 100%;
}

.cart .cnxh-list ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 55px;
}
.cart .cnxh-list ul li {
  border-top: 1px solid #fff;
  width: 49.7%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.cart .cnxh-list ul li img {
  width: 100%;
}
.cart .cnxh-list ul li .desc {
  color: #3c3c3c;
  font-size: 14px;
  background: #fff;
  padding: 10px 0 10px 10px;
  height: 30px;
}
.cart .cnxh-list ul li .price {
  color: #ff6700;
  font-size: 16px;
  background: #fff;
  padding: 0 0 10px 10px;
}

.cart .cartFotter {
  height: 50px;
  width: 100%;
  background: skyblue;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
}
.cart .cartFotter .price {
  width: 33.33%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart .cartFotter .price .small-word {
  color: #999;
  font-size: 13px;
}
.cart .cartFotter .price .big-word {
  color: #ff6700;
  font-size: 20px;
  margin-top: 5px;
}

.cart .cartFotter .jxgw {
  width: 33.33%;
  height: 100%;
  background: #f4f4f4;
  color: #333;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
}
.cart .cartFotter .qjs {
  width: 33.33%;
  height: 100%;
  background: #ff6700;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
}
</style>