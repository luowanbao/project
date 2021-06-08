<!--
 * @Author: your name
 * @Date: 2021-06-07 16:41:33
 * @LastEditTime: 2021-06-08 18:50:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\project\src\pages\settlement\index.vue
-->
<template>
  <div class="settlement">
    <van-nav-bar title="用户结算" left-arrow @click-left="onClickLeft" />

    <van-notice-bar left-icon="volume-o" :scrollable="false" mode="closeable">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item
          ><div
            style="height: 40px; padding: 5px 0; color: cf7433; font-size: 12px"
          >
            受天气影响，您选购的商品到货时间预计延迟1~2天，<br />请您谅解，我们将尽快为您送达。
          </div></van-swipe-item
        >
        <van-swipe-item
          ><div
            style="height: 40px; padding: 5px 0; color: cf7433; font-size: 12px"
          >
            广东省部分地区因国家疫情防控影响，商品到货存在一<br />定延期，给您带来不便，敬请谅解。
          </div></van-swipe-item
        >
      </van-swipe>
    </van-notice-bar>

    <van-contact-card type="add" @click="onAdd" v-if="!addrFlag" />

    <van-contact-card
      type="edit"
      @click="onEdit"
      :name="name"
      :tel="address.mobile"
      v-if="addrFlag"
    />

    <div class="ui-line"></div>

    <div class="cheangStyle">
      <div>
        <label
          ><span class="iconfont icon-zhifubao"><i>支付宝</i></span></label
        >
        <input
          name="Fruit"
          type="radio"
          value=""
          style="width: 20px; height: 25px"
          checked="checked"
        />
      </div>
      <div>
        <label
          ><span class="iconfont icon-weixinzhifu"><i>微信支付</i></span></label
        >
        <input
          name="Fruit"
          type="radio"
          value=""
          style="width: 20px; height: 25px"
        />
      </div>
      <div>
        <label
          ><span class="iconfont icon-yinlian"><i>银联支付</i></span></label
        >
        <input
          name="Fruit"
          type="radio"
          value=""
          style="width: 20px; height: 25px"
        />
      </div>
      <div>
        <label
          ><span class="iconfont icon-xinyongka"><i>信用卡分期</i></span></label
        >
        <input
          name="Fruit"
          type="radio"
          value=""
          style="width: 20px; height: 25px"
        />
      </div>
      <div>
        <label
          ><span class="iconfont icon-huabei"><i>花呗分期</i><span></span></span
        ></label>
        <input
          name="Fruit"
          type="radio"
          value=""
          style="width: 20px; height: 25px"
        />
      </div>
    </div>

    <div class="ui-line"></div>
    <div class="yunfei">
      <strong class="txt1">运费</strong>
      <span class="txt2">快递配送（运费 10 元）</span>
    </div>
    <div class="fapiao">
      <van-collapse v-model="activeNames" border:false>
        <van-collapse-item title="电子普通发票" name="2" value="个人">
          <div class="fapiao-cont">
            <p class="txt1">发票类型</p>
            <div class="txt2">电子普通发票</div>
            <p class="txt3">提示：该订单商品只提供电子发票</p>
            <p class="txt3">
              电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。推荐使用电子发票，不怕丢失，更方便、环保。
            </p>
            <div class="line"></div>
            <p class="txt1">选择发票抬头</p>
            <div class="taitou">
              <div class="txt4">个人</div>
              <div class="txt4" style="border: 1px solid #e0e0e0">单位</div>
            </div>
            <p class="txt5">提示：电视和会员年卡同时购买只提供电子发票</p>

            <div class="ts-fapiao">
              <van-cell is-link title="个人" @click="show = true" />
              <van-action-sheet
                v-model="show"
                title="个人抬头"
                @select="onSelect"
              >
                <div class="content">个人抬头</div>
              </van-action-sheet>
            </div>
            <div class="shezhi">
              <input type="checkbox" />
              <span class="txt6">设置为默认抬头</span>
            </div>
            <div class="line"></div>
            <p class="txt1">收票人手机</p>
            <div class="line"></div>
            <!-- <input type="text"> -->
            <van-cell-group>
              <van-field
                v-model="value1"
                right-icon="question-o"
                placeholder="请输入"
                @click-right-icon="help"
              />
            </van-cell-group>
            <p class="txt1">收件人邮箱</p>
            <input
              type="text"
              placeholder="用于接受电子发票（选填）"
              style="
                height: 30px;
                width: 318px;
                margin-left: 5px;
                margin-bottom: 40px;
                border: none;
                outline: none;
              "
            />
            <div class="fapiao-desc">
              <p>发票须知：</p>
              <p>1.发票金额为实际支付金额，不包含优惠券、礼品卡等；</p>
              <p>2.电子发票可以在订单完成后，在订单详情中下载和查看；</p>
              <p>
                3.小米有品商品的发票由小米有品开具，第三方商品的发票由相关企业单独开具；
              </p>
              <p>
                <a href="https://s1.mi.com/m/ghd/2017/djh0626text/"
                  >查看更多发票常见问题>></a
                >
              </p>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="youhq">
      <van-collapse v-model="activeNames" border:false>
        <van-collapse-item title="优惠券" name="3">
          <div class="youhq-cont">
            <p class="txt1">使用优惠券码</p>
            <input type="text" placeholder="请输入优惠券码" /><button>
              确定
            </button>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="ui-line"></div>
    <ul class="product">
      <li v-for="item in this.$store.state.listProJs" :key="item._id">
        <img :src="item.product.coverImg" alt="" />
        <span>{{ item.product.name }}</span>
        <strong style="font-weight: 600">{{ item.product.price }}</strong>
      </li>
    </ul>
    <div class="ui-line"></div>
    <div class="price">
      <p>
        <strong>商品价格：</strong
        ><span>{{ this.$store.state.sumPriceProJs }}</span>
      </p>
      <p><strong>配送费用：</strong><span>0</span></p>
    </div>
    <div class="ui-line" style="margin-bottom: 50px"></div>
    <div class="footer">
      <div class="left">
        共<span>{{ this.$store.state.countProJs }}</span
        >件 <span>合计：</span
        ><strong style="font-weight: 600">{{
          this.$store.state.sumPriceProJs
        }}</strong>
      </div>
      <div class="right" @click="goPayment">去付款</div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import {
  reqProAddress,
  reqAddOrder,
  reqGetAddrById,
  reqDelMany,
} from "../../api/cart";
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      activeNames: ["1"],
      show: false,
      value1: "176****5018",
      list: [],
      address: null,
      addrFlag: false,
      name: "",
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/cart",
      });
    },
    onAdd() {
      this.$router.push({
        path: "/newAddress",
      });
    },
    onEdit() {
      this.$router.push({
        path: "setAddress",
        query: {
          flag: true,
        },
      });
    },
    // else {
    //     this.$router.push({
    //       path: "/newAddress",
    //     });
    //   }
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    onSelect() {
      this.show = false;
    },
    help() {
      Dialog.alert({
        message:
          "收票人手机默认为您的小米账号密保手机，电子发票开具后会短信通知您，通过短信中链接即可登录查看或下载发票。如该手机号已不再使用，建议尽快到个人资料页更改密保手机",
      }).then(() => {
        // on close
      });
    },
    async getAddressList() {
      let res = await reqProAddress();
      console.log(res.data.addresses);
      if (res.data.addresses.length > 0) {
        console.log(res.data);
        let arr = res.data.addresses;
        let list = arr.find((item) => item.isDefault == true);
        console.log(list);
        this.address = list;
        this.name = list.receiver.slice(0, -6);
        this.addrFlag = true;
      }
    },
    async getAddrById(id) {
      this.addrFlag = true;
      let res = await reqGetAddrById(id);
      console.log(res.data);
      this.name = res.data.receiver.slice(0, -6);
      this.address = res.data;
    },

    async goPayment() {
      console.log(this.address.receiver);
      let receiver = this.address.receiver;
      let regions = this.address.regions;
      let address = this.address.address;
      console.log(receiver, regions, address);
      console.log(this.list);

      let orderDetails = [];
      this.list.forEach((item) => {
        let obj = {
          quantity: item.quantity,
          product: item.product._id,
          price: item.product.price,
        };
        orderDetails.push(obj);
      });
      console.log(orderDetails);
      let info = { receiver, regions, address, orderDetails };
      localStorage.setItem("userInfo", JSON.stringify(info));
      this.$store.commit("userInfo", info);
      console.log(info);
      // 调用接口 插入订单库
      let res = await reqAddOrder(info);
      console.log(res.data.info);
      let myOrderInfo = res.data.info;
      this.$store.commit("myOrderInfo", myOrderInfo);
      localStorage.setItem("myOrderInfo", JSON.stringify(myOrderInfo));
      if (res.data.code == "success") {
        // 点击去付款删除购车商品
        console.log(this.$store.state.listProJs);
        let ids = [];
        this.$store.state.listProJs.forEach((item) => {
          ids.push(item._id);
        });
        console.log(ids);
        let res2 = await reqDelMany({ ids });
        console.log(res2);
        this.$router.push({
          path: "/waitPay",
        });
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.$store.state.listProJs);
    this.list = this.$store.state.listProJs;
    // this.getProDetail(id);
    let addrID = this.$route.query.id;
    if (addrID) {
      console.log(111);
      this.getAddrById("60bf2fa360acd41e185229bc");
    } else {
      console.log(222);
      this.getAddressList();
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.settlement ::v-deep .van-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.settlement .van-notice-bar {
  margin-top: 51px;
}
.settlement ::v-deep .van-nav-bar__content {
  height: 50px;
  background: #f2f2f2;
}
.settlement ::v-deep .van-nav-bar__left .van-icon {
  color: #a0a0a0;
  font-size: 20px;
}
.settlement ::v-deep .van-nav-bar__title {
  color: #666;
}
.settlement .van-notice-bar {
  height: 50px;
}
.settlement .notice-swipe {
  height: 50px;
}
.settlement .van-contact-card {
  padding: 5px 16px;
}
.settlement .ui-line {
  height: 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
}
.settlement .cheangStyle {
  width: 330px;
  padding: 0 22px;
  background: #fff;
}
.settlement .cheangStyle div {
  height: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  align-items: center;
}
.settlement .cheangStyle div .iconfont {
  font-size: 25px;
}
.settlement .cheangStyle div .iconfont i {
  font-size: 14px;
  color: #666;
}
.settlement .cheangStyle div label {
  height: 100%;
}
/* .settlement .cheangStyle div input {
  margin-right: ;
} */
.settlement .cheangStyle div label span {
  height: 100%;
  display: flex;
  align-items: center;
}
.settlement .yunfei {
  height: 45px;
  width: 330px;
  /* padding: 0 22px; */
  margin: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.settlement .yunfei .txt1 {
  color: #3c3c3c;
  font-size: 13px;
}
.settlement .yunfei .txt2 {
  color: #bdbdbd;
  font-size: 13px;
}
.settlement .fapiao {
  width: 330px;
  /* padding: 0 22px; */
  margin: 0 22px;
  border-bottom: 1px solid #eeeeee;
}
.settlement .fapiao ::v-deep .van-cell {
  padding: 10px 0;
  height: 100%;
}
.settlement .fapiao .fapiao-cont {
  width: 330px;
  background: #f5f5f5;
  margin-left: -20px;
}
.settlement .fapiao .fapiao-cont .txt1 {
  margin-left: 5px;
  color: #6a6a6a;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
}
.settlement .fapiao .fapiao-cont .txt2 {
  margin-left: 5px;
  color: #3c3c3c;
  font-size: 13px;
  height: 26px;
  width: 100px;
  border: 1px solid #ff6600;
  text-align: center;
  line-height: 26px;
}
.settlement .fapiao .fapiao-cont .txt3 {
  margin-left: 5px;
  color: #bdbdbd;
  font-size: 12px;
  padding: 5px 0 0 0;
  margin-bottom: 20px;
}
.settlement .fapiao .fapiao-cont .line {
  height: 1px;
  background: #eee;
}
.settlement .fapiao .fapiao-cont .taitou {
  display: flex;
}
.settlement .fapiao .fapiao-cont .taitou {
  display: flex;
}
.settlement .fapiao .fapiao-cont .taitou .txt4 {
  border: 1px solid #ff6600;
  color: #3c3c3c;
  text-align: center;
  line-height: 26px;
  height: 26px;
  width: 56px;
  margin: 0 5px;
}
.settlement .fapiao .fapiao-cont .txt5 {
  font-size: 12px;
  color: #bdbdbd;
  margin-left: 5px;
  margin-top: 10px;
}
.settlement .fapiao .fapiao-cont .ts-fapiao {
  width: 323px;
  margin-left: 5px;
  border: 1px solid #e0e0e0;
}
.content {
  padding: 16px 16px 160px;
}
.settlement .fapiao .fapiao-cont .shezhi {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #6a6a6a;
  font-size: 13px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.settlement .fapiao .fapiao-cont .van-cell-group {
  width: 323px;
  margin-left: 5px;
}
.settlement .fapiao .fapiao-cont .fapiao-desc {
  color: #bdbdbd;
  font-size: 12px;
  margin-left: 5px;
}
.settlement .fapiao .fapiao-cont .fapiao-desc a {
  color: #bdbdbd;
  font-size: 12px;
}
.settlement .youhq {
  width: 330px;
  margin: 0 22px;
  border-bottom: 1px solid #eeeeee;
}
.settlement .youhq .youhq-cont {
  width: 330px;
  background: #f5f5f5;
  margin-left: -22px;
  border-bottom: none;
  padding-bottom: 10px;
}
.settlement .youhq ::v-deep .van-cell {
  padding: 10px 0;
  height: 100%;
}
.settlement .youhq .youhq-cont .txt1 {
  margin-left: 5px;
  color: #6a6a6a;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
}
.settlement .youhq .youhq-cont input {
  margin-left: 6px;
  outline: none;
  height: 27px;
}
.settlement .youhq .youhq-cont button {
  margin-left: 5px;
  outline: none;
  height: 33px;
  width: 58px;
}
.settlement .product {
  /* height: 56px; */
  background: #fff;
}
.settlement .product li {
  height: 56px;
  width: 330px;
  margin-left: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settlement .product li img {
  width: 41px;
  height: 41px;
  margin-right: 20px;
}

.settlement .product li span {
  margin-right: 20px;
}
.settlement .product li span,
.settlement .product li strong {
  color: #3c3c3c;
  font-size: 12px;
}
/* .settlement .product li img {
  width: 41px;
  height: 41px;
} */

.settlement .price {
  height: 56px;
  background: #fff;
}
.settlement .price p:first-child {
  margin-top: 5px;
  margin-left: 20px;
  height: 25px;
  line-height: 25px;
  color: #3c3c3c;
  font-size: 12px;
}
.settlement .price p {
  margin-left: 20px;
  height: 25px;
  line-height: 25px;
  color: #3c3c3c;
  font-size: 12px;
}
.settlement .footer {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background: #fff;
}
.settlement .footer .left {
  line-height: 50px;
  text-align: center;
  height: 50px;
  width: 50%;
  color: #ff4d14;
}
.settlement .footer .right {
  line-height: 50px;
  text-align: center;
  height: 50px;
  width: 50%;
  color: #fff;
  background: #ff4d14;
}
</style>