<template>
  <div class="home">
    <!-- header -->
    <header>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAATKADAAQAAAABAAAAMgAAAABQW5lOAAADMUlEQVRoBe2bPYgTQRTH/5NcFBU9ULQQtREUET3FQsXGyuLQRhDBxtqP4xBUsDsbQYRDPRGsBNsT4RoRVBA7PxpBQe1EPT/AIqJ3553J879JhjRmfS+3I9lkHmxmNvPftzO/vJmd3Z0A0UwEnBzHCwi2mo7KTjxHV3NwmK2lSR74we0Tt8naJkwdPqLAeo7hjXOsbUYmp7EEU3hLj6tVLgsYdXIsuwqoTjo/UZnwHnMbJ8AJN4bv83Enw1jHn+qd2ofDw4Ja3BnCfv68B1DFLVQwKSdwQU5h+f+sWt6ANdkIu1MV5/ALr+Uk9jYLwubyC8xzEawkuPsciw/7r0Km+QeW0BH08fOmDGEgJKzEd3cAS1oiWITfhCa8JAS07gFWh7QdQzgYkFcXRZinVMGwz4ZIuy3CwA65h1dN3US0DaLJYKk3h58cXnehhM/6g1KU0/TmsKy2VbCGyo3MD3A8GmS+P+XI1kXCXlPlXA240VrUfokNGG9Z3FW8bP90fz3Sw3/uS2UEC/AV+7l/mfDW+u/VqWA3tUGAdWSXdCOYdddxB0uxhQ1/oAblhQ47fTbrtCOB+Ua6iyijiKPcL/vvVKlgfajpRUcDS+C4a7WnFedVoJqiEs7wDiCAdTywRptvm9s+FeZKmQtgHM/e8+r5ygTN9TCwBqgnJmAIA8w6rVDVmU8ONlG4TSWuP2W9xyhKnrS2NocPnGJYbJVFrNUGAcaTj7Nxm7WV4FTzLLWXUvVCYDZbaJPr1KHGsMW60zdUAo3+m8kneD8SwEIBy76qwmerFhPeLQSw/AAr1N4sWRD0eIS52is4PTDp9S6pR+WVRZ/JMs1Pl7S22nGqG8C6F1gAWInLCMwINgKLwIwEjPIYYRGYkYBRHiMsAjMSMMpjhEVgRgJGeYywCMxIwCiPERaBGQkY5THCIjAjAaM8RlgEZiRglMcIi8CMBIzyGGFtAJtRHyPQarW6+qk1fp363L450z6TktrepgMzfVzHvI//DNuQ4rRZJHjW3EnNHeFLrh2pCl/o+P+NEib8bst0BZ5yofAhlv97dbVwHXUJd1v6ahS4K/jCJeqDVOuWqRfx6A+5CpLYo3H97gAAAABJRU5ErkJggg=="
        alt=""
      />
      <input type="text" placeholder="搜索商品名称" />
      <van-icon name="search" class="ico1" />
      <van-icon name="contact" class="ico2" />
    </header>
    <!-- tab切换 -->
    <van-tabs v-model="active">
      <van-tab title="推荐"> </van-tab>
      <van-tab title="手机">内容 2</van-tab>
      <van-tab title="智能">内容 3</van-tab>
      <van-tab title="电视">内容 4</van-tab>
      <van-tab title="家电">内容 5</van-tab>
      <van-tab title="笔记本">内容 5</van-tab>
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
      active: "a",
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {},
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
* {
  margin: 0;
  padding: 0;
}
.home header {
  padding: 2px 10px;
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
}
.home header img {
  width: 25px;
  height: 16px;
  font-display: block;
  margin-top: 12px;
  margin-right: 8px;
}
.van-icon-search {
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  position: absolute;
  left: 38px;
  top: 3px;
}
.van-icon-contact {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
}
.home header input {
  width: 260px;
  height: 32px;
  outline: none;
  border: none;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  text-indent: 2em;
}
.van-tabs {
  width: 100%;
}
</style>
