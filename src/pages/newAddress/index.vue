<template>
  <div id="app">
    <van-nav-bar
      title="收货地址"
      left-arrow
      class="header"
      @click-left="clickLeft"
    >
    </van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      :address-info="addressInfo"
      show-search-result
      :search-result="searchResult"
      save-button-text="保存地址"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "vant";
import areaList from "../../assets/01";
import { newDzApi, oneddApi, putApi } from "../../api/mine";
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      areaList,
      searchResult: [],
      addressInfo: {
        name: "狗蛋",
        tel: "123456789",
        addressDetail: "莲花街",
        isDefault: true,
      },
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    clickLeft() {
      this.$router.go(-1);
    },
    async onSave(content) {
      // 获取表单信息
      let params = {
        receiver: `${content.name}`,
        mobile: `${content.tel}`,
        regions: `${content.province}-${content.city}-${content.county}`,
        address: `${content.addressDetail}`,
        idDefault: `${content.isDefault}`,
      };
      // 如果没有id发送创建请求
      if (this.$route.query.id == undefined) {
        let res = await newDzApi(params);
        if (res.status == 200) {
          Toast("创建成功");
          // this.$router.push("/setAddress")
          console.log(res);
        }
      } else {//否则发送修改请求
        // 没有请求头这时候要修改
        console.log( this.$route.query.id);
        let res = await putApi(this.$route.query.id, { params });
        console.log(res);
      }
    },
    // onDelete() {
    //   Toast('delete');
    // },
    async onedd(id) {
      let { data } = await oneddApi(id);
      console.log(data);
      this.addressInfo.name = data.receiver;
      this.addressInfo.tel = data.mobile;
      this.addressInfo.addressDetail = data.address;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // alert(this.$route.query.id);
    if (this.$route.query.id != undefined) {
      console.log(1111);
      this.onedd(this.$route.query.id);
    }
  },
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
.header {
  color: #9b9b9b;

  background: #f2f2f2;
}
#app /deep/.van-icon {
  color: #9b9b9b !important;
}
#app /deep/.van-button {
  background: #ff6700;
  color: #fff;
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-radius: 0;
  left: 0;
}
</style>