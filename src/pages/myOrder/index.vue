<template>
  <div class="myOrder">
    <!-- header部分 -->
    <transition name="topbar">
      <van-nav-bar
        class="fenlei_top"
        v-show="topbarShow"
        title="商品订单"
        left-arrow
        :fixed="true"
        :placeholder="true"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </transition>

    

    <!-- 切换栏 全部 -->
    <van-tabs v-model="activeName" :border="true" animated @click="changetabbar">

      <van-tab title="全部" name="allOrder">
        <!-- 空状态展示 -->
        <van-empty
          v-show="emptyImgShow"
          class="custom-image"
          image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          description="您的订单空空如也"
        />

        <!-- 一个个的订单 -->
        <van-card
          v-show="allOrderShow"
          v-for="item in orders"
          :key="item._id"
          num="1"
          :price="item.price"
          title="小米100测试机"
          thumb="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617008568.53329550.jpg"
        >
          <template #tags>
            <van-tag plain type="warning" color="rgba(0,0,0,.5)" text-color="rgba(0,0,0,.5)">订单编号：{{ item.no }}</van-tag>
            <van-tag plain type="warning" color="rgba(0,0,0,.5)" text-color="rgba(0,0,0,.5)">创建时间：{{ item.createdAt | dateFormat('yyyy-mm-dd h:m:s') }}</van-tag>
          </template>
          <!-- <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template> -->
        </van-card>

        <!-- 底部合计 -->
        <div class="van-ellipsis" v-show="allOrderShow">
          <span>{{ ordercreatedAt | dateFormat('yyyy-mm-dd h:m:s') }}</span>
          <span>共{{ orderNum }}件商品</span>
          <span>应付金额：{{ shouldpay }}</span>
        </div>
        <div class="van-hairline--top" v-show="allOrderShow"></div>

        <van-button type="warning" v-show="allOrderShow">立即付款</van-button>
        <van-button class="cancleorder" type="default" v-show="allOrderShow">取消订单</van-button>

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
      </van-tab>

      <!-- 待付款 -->
      <van-tab title="待付款" name="toBePaid">
        <!-- 空状态展示 -->
        <van-empty
          v-show="daifukuanShow"
          class="custom-image"
          image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          description="您的待付款订单空空如也"
        />

        <!-- 一个个的订单 -->
        <van-card
          v-show="daifukuanOrderShow"
          v-for="item in orders"
          :key="item._id"
          num="1"
          :price="item.price"
          title="小米100测试机"
          thumb="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617008568.53329550.jpg"
        >
          <template #tags>
            <van-tag plain type="warning" color="rgba(0,0,0,.5)" text-color="rgba(0,0,0,.5)">订单编号：{{ item.no }}</van-tag>
            <van-tag plain type="warning" color="rgba(0,0,0,.5)" text-color="rgba(0,0,0,.5)">创建时间：{{ item.createdAt | dateFormat('yyyy-mm-dd h:m:s') }}</van-tag>
          </template>
          <!-- <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template> -->
        </van-card>

        <!-- 底部合计 -->
        <div class="van-ellipsis" v-show="allOrderShow">
          <span>{{ ordercreatedAt | dateFormat('yyyy-mm-dd h:m:s') }}</span>
          <span>共{{ orderNum }}件商品</span>
          <span>应付金额：{{ shouldpay }}</span>
        </div>
        <div class="van-hairline--top"></div>

        <van-button type="warning" v-show="allOrderShow">立即付款</van-button>
        <van-button class="cancleorder" type="default" v-show="allOrderShow">取消订单</van-button>

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
      </van-tab>

      <!-- 待收货 -->
      <van-tab title="待收货" name="toBeReceived">
        <!-- 空状态展示 -->
        <van-empty
          v-show="daishouhuoShow"
          class="custom-image"
          image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          description="您的待收货订单空空如也"
        />
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reqallOrders } from '../../api/order';
import {reqGetProList} from "../../api/cart";

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  filters: {
    dateFormat: function (yuanStr, format='yyyy-mm-dd') {
      let date = new Date(yuanStr);
      let year = date.getFullYear();
      let mon = date.getMonth() + 1;
      let day = date.getDate();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();

      if (format.toLowerCase() === 'yyyy-mm-dd') {
          return `${year}-${mon}-${day}`;
      } else if (format.toLowerCase() === 'yyyy-mm-dd h:m:s') {
          return `${year}-${mon}-${day} ${h}:${m}:${s}`;
      }
    }
  },
  data() {
    //这里存放数据,返回值为一个对象
    return {
      emptyImgShow: true,
      allOrderShow: false,
      daifukuanShow: true,
      daifukuanOrderShow: false,
      daishouhuoShow: true,
      topbarShow: true,
      activeName: 'allOrder',
      orders: [],
      ordercreatedAt: 0,
      orderNum: 0,
      shouldpay: 0,
      proList: [],
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      console.log('点击了返回按钮');
      this.$router.push('/cart');
    },

    onClickRight() {
      console.log('点击了搜索');
      // 跳转到搜索路由
      this.$router.push('/search');
    },

    // 获取所有的订单数据
    async getOrders() {
      const result = await reqallOrders();
      console.log(result);
      this.orders = result.data.orders;

      if (result.data.orders.length != 0) {
        this.allOrderShow = true;
        this.emptyImgShow = false;
      
        this.ordercreatedAt = result.data.orders[0].createdAt;
        this.orderNum = result.data.orders.length;
        this.shouldpay = result.data.orders.reduce((sum, cur) => {
          return sum += cur.price;
        }, 0);
      }
    },

    // 获取所有未支付的订单详情
    async getNoPayOrders() {
      const result = await reqallOrders();
      this.orders = result.data.orders.filter(v => v.isPayed == false);

      if (this.orders.length != 0) {
        this.daifukuanShow = false;
        this.daifukuanOrderShow = true;
      }
    },

    onSubmit() {

    },

    async getProList() {
      let res = await reqGetProList();
      console.log(res.data.products);
      this.proList = res.data.products;
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

    // 切换标签时会触发
    changetabbar(name, title) {
      console.log(name, title);
      if (name == "allOrder") {
        this.getOrders();
      }

      if (name == "toBePaid") {
        this.getNoPayOrders();
      }
    },

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getOrders();
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
};
</script>

<style scoped>
  .myOrder {
    padding-top: 45px;
  }

  /* 空状态图片样式 */
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }

  /* topbar样式 */
  .fenlei_top /deep/ .van-nav-bar  {
    background: #F2F2F2;
  }
  .fenlei_top /deep/ .van-nav-bar .van-icon {
    color: rgb(168, 159, 159);
  }

  /* 全部 待收款 待收货 样式 */
  .van-tabs--line /deep/ .van-tabs__wrap {
    height: 44px;
    position: fixed;
    top: 45px;
    left: 0px;
    width: 100%;
    z-index: 2;
  }

  .van-tag--plain::before /deep/ {
    border: none;
  }

  /* 商品总计行 */
  .van-ellipsis {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .van-ellipsis > span:nth-of-type(1) {
    margin-left: 25px;
    color: rgba(0,0,0,.5);
    font-size: 14px;
  }
  .van-ellipsis > span:nth-of-type(2) {
    margin-left: 30px;
    margin-right: 5px;
    color: rgba(0,0,0,.5);
    font-size: 14px;
  }
  .van-ellipsis > span:nth-of-type(3) {
    margin-left: 10px;
    color: rgba(0,0,0,.5);
    font-size: 14px;
  }

  /* 立即付款按钮样式 */
  .van-button.van-button--warning {
    float: right;
    width: 88px;
    height: 35px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  /* 取消付款按钮样式 */
  .van-button.cancleorder {
    float: right;
    width: 88px;
    height: 35px;
    margin-top: 5px;
  }

  .recommend-top-img {
    width: 100%;
  }
  .recommend-top-img img {
    width: 100%;
  }

  .myOrder .cnxh-list ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 55px;
  }
  .myOrder .cnxh-list ul li {
    border-top: 1px solid #fff;
    width: 49.7%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .myOrder .cnxh-list ul li img {
    width: 100%;
  }
  .myOrder .cnxh-list ul li .desc {
    color: #3c3c3c;
    font-size: 14px;
    background: #fff;
    padding: 10px 0 10px 10px;
    height: 30px;
  }
  .myOrder .cnxh-list ul li .price {
    color: #ff6700;
    font-size: 16px;
    background: #fff;
    padding: 0 0 10px 10px;
  }
</style>