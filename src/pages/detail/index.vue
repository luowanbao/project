<template>
  <div class="details">
    <div class="header">
      <div id="icon" :class="scrollB ? 'scrollL' : 'scrollR'">
        <span class="iconfont icon-fanhui" @click="goBack"></span>
        <span class="iconfont icon-fenxiang1"></span>
      </div>
      <div id="middle" :class="scrollB ? 'scrollB' : 'scrollN'">
        <van-tabs v-model="active">
          <van-tab title="商品"></van-tab>
          <van-tab title="评价"></van-tab>
          <van-tab title="详情"></van-tab>
          <van-tab title="推荐"></van-tab>
        </van-tabs>
      </div>
    </div>
    <img class="bigImg" :src="productObj.coverImg" alt="" />
    <div class="products">
      <p class="price">
        <span>￥</span><i>{{ productObj.price }}</i>
      </p>
      <div class="events">
        <div class="eventsLeft">预计得600米金</div>
        <div class="eventsRight">
          更多
          <span class="iconfont icon-qianjin"></span>
        </div>
      </div>
      <div class="update">
        <div class="updateLeft">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84d5f1a65f4223e8fe1b076e93876441.png"
            alt=""
          />
          <p>来这里发现属于你的新品</p>
        </div>
        <div class="updateRight">
          <span class="iconfont icon-qianjin"></span>
        </div>
      </div>
      <div class="hr"></div>
      <div class="title">
        <h2>{{ productObj.name }}</h2>
        <i
          >「享24期分期免息，低至8.3元/天；买赠价值169元真无线耳机；+1元得小米定制T恤；+1元得生生不息果冻包」</i
        >
        <div class="dis">
          高中生认证立减100元
          <span class="iconfont icon-qianjin"></span>
        </div>
      </div>
      <div class="hr"></div>
    </div>
    <div class="ranking">
      <div class="rankLeft">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/049ec9bcc093365914620c46965bf9ab.png"
          alt=""
        />
        <p>入选【小米手机热销榜】</p>
      </div>
      <div class="rankRight">
        <span class="iconfont icon-qianjin"></span>
      </div>
    </div>
    <div class="option">
      <van-cell is-link @click="showPopup">
        已选
        <div class="van-ellipsis">{{ productObj.name }}</div>
      </van-cell>
      <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '70%' }"
      >
        <div class="selected">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png"
            alt=""
          />
          <div class="selectedRigth">
            <div class="price">
              ￥<span>{{ productObj.price }}</span>
            </div>
            <h2>{{ productObj.name }}</h2>
          </div>
        </div>
        <div class="rele" v-show="flag">
          <div class="release">
            <p>版本</p>
            <div @click="change1(1)" :class="config1 ? 'config' : 'configF'">
              8GB+256GB
            </div>
            <div @click="change1(2)" :class="config2 ? 'config' : 'configF'">
              12GB+256GB
            </div>
            <div @click="change1(3)" :class="config3 ? 'config' : 'configF'">
              12GB+512GB
            </div>
          </div>
          <div class="release2">
            <p>颜色</p>
            <div @click="change2(1)" :class="config4 ? 'config' : 'configF'">
              陶瓷黑
            </div>
            <div @click="change2(2)" :class="config5 ? 'config' : 'configF'">
              陶瓷白
            </div>
          </div>
          <div class="release3">
            <p>套餐</p>
            <div @click="change3(1)" :class="config6 ? 'config' : 'configF'">
              标配
            </div>
            <div @click="change3(2)" :class="config7 ? 'config' : 'configF'">
              套餐版(赠充电器)
            </div>
          </div>
        </div>
        <div class="subNum">
          <p>购买数量</p>
          <van-stepper
            v-model="value"
            theme="round"
            button-size="22"
            disable-input
          />
        </div>
        <van-button
          class="trueJoin"
          type="danger"
          color="linear-gradient(to right, #ff7c00, #ff5934)"
          >加入购物车</van-button
        >
      </van-popup>
    </div>
    <div class="option2">
      <van-cell is-link @click="showPopup2">
        送至
        <span class="iconfont icon-dingwei">明天14:00前付款，预计后天送达</span>
      </van-cell>
      <van-popup
        v-model="show2"
        round
        position="bottom"
        :style="{ height: '60%' }"
      >
        <div class="address">
          <h2>收货地址</h2>
          <p>您还没有收货地址哦~</p>
          <van-button
            class="trueJoin"
            type="danger"
            color="linear-gradient(to right, #ff7c00, #ff5934)"
            >选择新地址</van-button
          >
        </div>
      </van-popup>
    </div>
    <div class="footer">
      <van-tabbar v-model="active" active-color="#000" inactive-color="#000">
        <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="service-o">客服</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" @click="goCart"
          ><span>购物车</span></van-tabbar-item
        >
        <van-button
          type="danger"
          color="linear-gradient(to right, #ff7c00, #ff5934)"
          @click="showPopup"
          >加入购物车</van-button
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reqIdDetail } from "../../api/product";

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      productObj: {},
      active: "a",
      id: "",
      scrollB: false,
      // scrollN: true,
      show: false,
      show2: false,
      // showPS: false,
      // showFP: false,
      value: 1,
      config1: false,
      config2: false,
      config3: false,
      config4: false,
      config5: false,
      config6: false,
      config7: false,
      flag: true,
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    async getDetail(id) {
      const result = await reqIdDetail(id);
      console.log(result);
      this.productObj = result.data;
      if (this.productObj.productCategory != "60bb1ae57da3a233e89afa54") {
        this.flag = false;
      }
    },
    //回退
    goBack() {
      this.$router.back();
    },
    //跳转购物车
    goCart() {
      this.$router.push("/cart");
    },
    //事件监听
    montorScroll() {
      const scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);
      scrollTop > 70 ? (this.scrollB = true) : (this.scrollB = false);
      // console.log(this.scrollB);
    },
    //弹出层
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    //麻烦的按钮点击事件
    change1(num) {
      if (num == 1) {
        this.config1 = true;
        this.config2 = false;
        this.config3 = false;
      } else if (num == 2) {
        this.config2 = true;
        this.config1 = false;
        this.config3 = false;
      } else if (num == 3) {
        this.config3 = true;
        this.config1 = false;
        this.config2 = false;
      }
    },
    change2(num) {
      if (num == 1) {
        this.config4 = true;
        this.config5 = false;
      } else if (num == 2) {
        this.config5 = true;
        this.config4 = false;
      }
    },
    change3(num) {
      if (num == 1) {
        this.config6 = true;
        this.config7 = false;
      } else if (num == 2) {
        this.config7 = true;
        this.config6 = false;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.query.id;
    this.getDetail(this.id);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.addEventListener("scroll", this.montorScroll);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener("scroll", this.montorScroll);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.hr {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 16px 0 16px 0;
}
.details {
  height: 1000px;
}

.icon-fanhui {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  position: fixed;
  top: 8px;
  left: 16px;
  z-index: 1;
  /* opacity: 0.3; */
  border-radius: 18px;
}
.icon-fenxiang1 {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  position: fixed;
  top: 8px;
  right: 16px;
  z-index: 1;
  /* opacity: 0.3; */
  border-radius: 18px;
}
.header #middle {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  /* display: none; */
}
.van-tabs {
  width: 70%;
  margin-left: 15%;
  /* display: none; */
}

.bigImg {
  width: 100%;
  height: 410px;
}

.footer {
  height: 40px;
}
.van-button--danger {
  width: 200px;
  border-radius: 40px;
}

.van-button--normal {
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  margin-right: 7px;
}

.scrollB {
  /* display: block; */
  transition: all 0.5s;
  opacity: 1;
}
.scrollN {
  /* display: none; */
  opacity: 0;
  transition: all 0.5s;
}

.scrollL {
  background: #fff;
  color: #000;
  transition: all 0.5s;
}
.scrollR {
  background: #000;
  color: #fff;
  transition: all 0.5s;
}

.products {
  padding: 15px;
}
.products .price {
  color: #ff6700;
}
.products .price i {
  font-size: 24px;
  font-weight: 900;
}
.products .events {
  width: 100%;
  height: 40px;
  background: #fff2ef;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.events .eventsLeft {
  width: 100px;
  height: 20px;
  border: 2px solid #ff5934;
  border-radius: 5px;
  color: #ff5934;
  font-size: 13px;
  text-align: center;
  line-height: 20px;
}
.events .eventsRight {
  color: #ff5934;
  font-size: 14px;
}
.events .eventsRight span {
  font-size: 14px;
  color: #ff3954;
}

.update {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.update .updateLeft {
  width: 300px;
  height: 30px;
}
.update .updateLeft img {
  width: 70px;
  height: 22px;
  float: left;
  margin-top: 3px;
  margin-right: 5px;
}
.update .updateLeft p {
  font-size: 12px;
  color: #000;
}
.update .updateRight span {
  color: #bcbcbc;
}

.title h2 {
  font-size: 20px;
  font-weight: 600;
  margin-top: 14px;
  margin-bottom: 14px;
}
.title i {
  font-size: 12px;
}
.title .dis {
  width: 150px;
  height: 20px;
  line-height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  font-size: 12px;
  margin-top: 15px;
  padding-left: 5px;
}
.title .dis span {
  font-size: 12px;
}

.ranking {
  width: 100%;
  height: 50px;
  background: #fff3eb;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.ranking .rankLeft {
  width: 300px;
}
.ranking .rankLeft img {
  width: 70px;
  height: 18px;
  float: left;
  margin: 15px 10px 0 10px;
}
.ranking .rankLeft p {
  font-size: 14px;
}
.ranking .rankRight {
  margin-right: 17px;
}
.ranking .rankRight span {
  color: #bcbcbc;
}

.van-cell__value span {
  font-size: 13px;
  font-weight: 600;
  margin-left: 10px;
}

.selected {
  padding: 10px;
  width: 100%;
  height: 80px;
}
.selected img {
  width: 80px;
  height: 80px;
  float: left;
  margin: 0 10px 0 10px;
}
.selected .selectedRigth {
  padding-top: 15px;
  width: 500px;
  height: 80px;
}
.selected .selectedRigth .price {
  color: #ff3954;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}
.selected .selectedRigth h2 {
  font-size: 14px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.release {
  width: 100%;
  height: 70px;
  overflow: hidden;
  margin-bottom: 10px;
}
.release p {
  font-weight: 700;
  margin: 10px 0 10px 10px;
  font-size: 14px;
}
.release div {
  width: 100px;
  height: 25px;
  background: #f6f6f6;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  border-radius: 15px;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
}

.release2 {
  width: 100%;
  height: 70px;
  overflow: hidden;
  margin-bottom: 10px;
}
.release2 p {
  font-weight: 700;
  margin: 10px 0 10px 10px;
  font-size: 14px;
}
.release2 div {
  width: 100px;
  height: 25px;
  background: #f6f6f6;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  border-radius: 15px;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
}

.release3 {
  width: 100%;
  height: 70px;
  overflow: hidden;
  margin-bottom: 10px;
}
.release3 p {
  font-weight: 700;
  margin: 10px 0 10px 10px;
  font-size: 14px;
}
.release3 div {
  width: 100px;
  height: 25px;
  background: #f6f6f6;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  border-radius: 15px;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
}

.subNum {
  display: flex;
  justify-content: space-between;
  padding: 0 14px 0 14px;
  height: 30px;
  line-height: 30px;
}
.subNum p {
  font-size: 14px;
}

.trueJoin {
  /* margin-top: 50px; */
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

/* .van-cell__value--alone span {
  display: inline-block;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */

.config {
  background: #fff3eb;
  border: 1px solid #ff5934;
  color: #ff5934;
}
.configF {
  background: #f6f6f6;
  border: 1px solid #f6f6f6;
  color: #000;
}

.address h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
}
.address p {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}

.van-ellipsis {
  width: 250px;
  float: right;
  margin-right: 30px;
  font-weight: 600;
}
</style>