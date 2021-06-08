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

    <van-tabs v-model="activeName" :border="true" animated>
      <!-- <van-tab v-for="index in 3" :key="index" :title="'选项 ' + index">
        内容 {{ index }}
      </van-tab> -->
      <van-tab title="全部" name="allOrder">全部</van-tab>
      <van-tab title="待付款" name="toBePaid">待付款</van-tab>
      <van-tab title="待收货" name="toBeReceived">待收货</van-tab>
    </van-tabs>
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
      topbarShow: true,
      activeName: 'allOrder',
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
    },

    onClickRight() {
      console.log('点击了搜索');
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
  /* topbar样式 */
  .fenlei_top /deep/ .van-nav-bar  {
    background: #F2F2F2;
  }
  .fenlei_top /deep/ .van-nav-bar .van-icon {
    color: rgb(168, 159, 159);
  }
</style>