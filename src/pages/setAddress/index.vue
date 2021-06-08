<template>
  <div id="app">
    <van-nav-bar
      title="收货地址"
      left-arrow
      class="header"
      @click-left="clickLeft"
    >
    </van-nav-bar>
    <ul>
      <li v-for="v in list" :key="v._id" class="li" @click="amend(v._id)">
        <p class="p">
          <span>{{ v.receiver }}</span
          ><span>{{ v.mobile }}</span
          ><span @click.stop="delt(v._id)">删除</span>
        </p>
        <div class="box">
          <div>
            <p>{{ v.regions }}</p>
            <p>{{ v.address }}</p>
          </div>
          <span class="iconfont icon-qianjin"></span>
        </div>
      </li>
    </ul>
    <div class="footer" @click="newaddress()">新建地址</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { DzlistApi, deletApi } from "../../api/mine";
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      list: [],
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    amend(id) {
      this.$router.push({
         path: '/newAddress',
          query: {
            id: id
          }
      })
      console.log(1111);
    },
    delt(id) {
      Dialog.confirm({
        title: "删除",
        message: "你确定要删除这条地址吗？",
      })
       .then(()  => {
         console.log(id),
          deletApi(id).then((res)=>{
            if (res.status == 200) {
            Toast("删除成功");
            this.list.forEach((v,i)=>{
              if (v._id==id) {
                this.list.splice(i,1)
              }
            })
          }
          })
        })
        .catch(() => {
          console.log("点击取消了");
        });
    },
    clickLeft() {
      this.$router.go(-1);
    },
    newaddress() {
      this.$router.push("/newAddress");
    },
    // 进来显示之前添加的地址
    async Dzlist() {
      let res = await DzlistApi();
      if (res.status == 200) {
        this.list = res.data.addresses;
        this.list.forEach((v) => {
          v.mobile = v.mobile.replace(/(?<=\d{3})\d{4}(?=\d{4})/, "****");
        });
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.Dzlist();
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
.header {
  color: #9b9b9b;

  background: #f2f2f2;
}
#app /deep/.van-icon {
  color: #9b9b9b !important;
}
.footer {
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  background: #ff6700;
  margin-left: 0px;
  position: absolute;
  bottom: 0px;
}
.p {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.p span:nth-child(1) {
  color: #ff6600;
}
.p span:nth-child(3) {
  color: gray;
}
.box {
  margin-top: 15px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-start;
  font-size: 12px;
  line-height: 18px;
}
.box span:nth-child(2) {
  margin-left: 210px;
  position: relative;
  top: 6px;
  color: gray;
}
.li {
  width: 100%;
  height: 80px;
  margin-top: 20px;
}
</style>