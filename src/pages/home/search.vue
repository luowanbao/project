<template>
  <div class="search">
    <!-- nav -->
    
    <header>
      <span class="iconfont icon-fanhui" @click="back"></span>
      <input
        type="text"
        placeholder="搜索商品名称"
        v-model="value"
        @input="search"
        @click="show = true"
      />
      <span class="iconfont icon-iconfront-"></span>
    </header>
    <!--  content-->
    <!-- 遮罩层 -->
    <div class="content">
      <h4>搜索发现</h4>
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d12dcb2bc95ddb35daa5d0c53105b0.jpg?w=984&h=160&bg=FFFFFF"
        alt=""
      />

      <ul class="list1">
        <li>【新品】Redmi Note 10<van-tag type="danger">功能</van-tag></li>
        <li>换新至高补贴3000元<van-tag type="danger">功能</van-tag></li>
        <li>小米11</li>
        <li>洗衣机</li>
        <li>耳机</li>
      </ul>
      <!-- list2 -->
      <ul class="list2">
        <li>扫拖机器人</li>
        <li>全部商品</li>
        <li>小米手机</li>
        <li>空调</li>
      </ul>
    </div>
    
    <ul class="list3" v-show="falg">
      <li v-for="item in arr" :key="item._id" @click="xiangqing(item._id)">{{ item.name }}</li>
    </ul>
    <div class="box1" v-show="falg"></div>
  </div>
</template>

<script>
import { reqProducts } from "../../api/product";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      value: "",
      list: [],
      params: {
        per: 5,
      },
      falg:false,
      show: false,
      arr:[]
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    // 跳转详情页
    xiangqing(id){
      this.$router.push({
          path: "/detail",
          query: {
            id: id,
          },
        });
    },
    back() {
      this.$router.push("./home");
    },
   async search() {
     if(this.value!=""){
       console.log(1111);
          this.falg=true
     }else{
       this.falg=false
     }
     let {data} = await reqProducts({ per:1000,page:1})
     let list = data.products
       console.log(list);
       this.arr=[]
        list.forEach(v=>{
         let x= v.name.includes(this.value)
        if(x==true){
          console.log(this.arr);
           
            if (this.arr.length < 10) {
             this.arr.push(v)
            }
        }
        })
    },
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
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
.search{
overflow:scroll;overflow-y:hidden; 
}
.search header {
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f2f2f2;
}
.search header .icon-fanhui {
  font-size: 20px;
}
.search header .icon-iconfront- {
  font-size: 26px;
}
.search header input {
  width: 276px;
  height: 26px;
  border: none;
  outline: none;
  text-indent: 1em;
}
.content h4 {
  color: #3c3c3c;
  font-size: 14px;
  padding: 20px 16px;
  font-weight: 700;
}
.content img {
  width: 341px;
  height: 55px;
  display: block;
  margin-bottom: 10px;
}
.content .list1 li {
  color: #3c3c3c;
  font-size: 12px;
  width: 114px;
  height: 16px;
  margin-bottom: 20px;
  margin-left: 25px;
}
div /deep/ .van-tag--danger {
  position: absolute;
  left: 140px;
}
.content .list1 {
  width: 180px;
  float: left;
}
.content .list2 li {
  color: #3c3c3c;
  font-size: 12px;
  width: 114px;
  height: 16px;
  margin-bottom: 33px;
  margin-left: 8px;
  float: left;
}
.list3 {
  position: absolute;
  top: 41px;
  left: 0;
  margin: 0 auto;
  z-index: 1;
  width: 100%;
}
.list3 li {
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
  color: #333;
  font-size: 14px;
  border-bottom: 1px solid gray;

  background: #fff;
}
div /deep/.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  /* position: absolute; */
  margin-top: 90px;
}

.block {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
  .red{
    width: 100%;
    height: 300px;
    background: black;
    z-index:199 !important;
    opacity: 0.3;
    position: absolute;
    bottom: 0px;
  }
  .box1{
    background: black;
    width: 100%;
    height: 500px;
    opacity: 0.3;
  }
</style>
