<template>
  <div class="fenlei">
    <van-nav-bar
      title="分类"
      left-text="返回"
      right-text="按钮"
      left-arrow
      :fixed="true"
      :placeholder="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="手机" />
      <van-sidebar-item title="智能手表" />
      <van-sidebar-item title="耳机" />
      <van-sidebar-item title="电视" />
      <van-sidebar-item title="灯具" />
    </van-sidebar>

    <van-divider :dashed="false" :style="{ color: '#3c3c3c', borderColor: '#3c3c3c', padding: '0 16px' }" class="fengecontent">
      {{ currenttitle }}
    </van-divider>

    <van-grid :border="false" center :column-num="3" :gutter="6" direction="center">
      <van-grid-item v-for="item in categoryProducts" :key="item._id">
        <van-image :src="item.coverImg" />
        <div class="proname">{{ item.name }}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reqAllproducts } from '../../api/fenlei';
import { Toast } from 'vant';

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      activeKey: 0,
      params: {
        page: 1,
        per: 20,
        product_category: '60bb1ae57da3a233e89afa54'
      },
      categoryProducts: [],
      currenttitle: '手机',
    }
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    /* 
      60bb1ae57da3a233e89afa54
      60bb1ae57da3a233e89afa55
      60bb1ae57da3a233e89afa56
      60bb1ae57da3a233e89afa57
      60bb1ae57da3a233e89afa58
    */

    // 获取所有的 商品数据
    async reqAllproducts() {
      /* let params = {
        page: 1,
        per: 10,
        product_category: '60bb1ae57da3a233e89afa54'
      } */

      const result = await reqAllproducts(this.params);
      console.log(result);
      const allProducts = result.data.products;
      console.log(allProducts);
      this.categoryProducts = allProducts;

      // let phoneArr = allProducts.filter(v => v.productCategory.name=="灯具");
      // console.log(phoneArr);
    },

    onChange(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.params.product_category = '60bb1ae57da3a233e89afa54';
          this.currenttitle = '手机';
          break;
        case 1:
          this.params.product_category = '60bb1ae57da3a233e89afa55';
          this.currenttitle = '智能手表';
          break;
        case 2:
          this.params.product_category = '60bb1ae57da3a233e89afa56';
          this.currenttitle = '耳机';
          break;
        case 3:
          this.params.product_category = '60bb1ae57da3a233e89afa57';
          this.currenttitle = '电视';
          break;
        case 4:
          this.params.product_category = '60bb1ae57da3a233e89afa58';
          this.currenttitle = '灯具';
          break;
      
        default:
          this.params.product_category = '60bb1ae57da3a233e89afa54';
          this.currenttitle = '手机';
          break;
      }
      this.reqAllproducts();
    },

    onClickLeft() {
      Toast('返回');
    },

    onClickRight() {
      Toast('按钮');
    },

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.reqAllproducts()
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
  .fenlei {
    /* display: flex; */
    /* flex-direction: column; */
    padding-bottom: 50px;
    position: relative;
    /* padding-top: 50px; */
    margin-bottom: 50px;
  }

  .van-sidebar {
    width: 52px;
    float: left;
    position: fixed;
    left: 0;
    top: 50px;
  }

  .van-sidebar-item--select {
    color: #FB7D34;
  }

  .fengecontent {
    margin-left: 48px;
  }

  .van-grid {
    width: 300px;
    float: right;
    position: absolute;
    left: 60px;
    top: 90px;
    padding-bottom: 50px;
  }

  .proname {
    font-size: 1px;
    color: rgba(0,0,0,.54);
    font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif
  }
</style>