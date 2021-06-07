<template>
  <div class="home ">
    <!-- header -->
    <header>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAATKADAAQAAAABAAAAMgAAAABQW5lOAAADMUlEQVRoBe2bPYgTQRTH/5NcFBU9ULQQtREUET3FQsXGyuLQRhDBxtqP4xBUsDsbQYRDPRGsBNsT4RoRVBA7PxpBQe1EPT/AIqJ3553J879JhjRmfS+3I9lkHmxmNvPftzO/vJmd3Z0A0UwEnBzHCwi2mo7KTjxHV3NwmK2lSR74we0Tt8naJkwdPqLAeo7hjXOsbUYmp7EEU3hLj6tVLgsYdXIsuwqoTjo/UZnwHnMbJ8AJN4bv83Enw1jHn+qd2ofDw4Ja3BnCfv68B1DFLVQwKSdwQU5h+f+sWt6ANdkIu1MV5/ALr+Uk9jYLwubyC8xzEawkuPsciw/7r0Km+QeW0BH08fOmDGEgJKzEd3cAS1oiWITfhCa8JAS07gFWh7QdQzgYkFcXRZinVMGwz4ZIuy3CwA65h1dN3US0DaLJYKk3h58cXnehhM/6g1KU0/TmsKy2VbCGyo3MD3A8GmS+P+XI1kXCXlPlXA240VrUfokNGG9Z3FW8bP90fz3Sw3/uS2UEC/AV+7l/mfDW+u/VqWA3tUGAdWSXdCOYdddxB0uxhQ1/oAblhQ47fTbrtCOB+Ua6iyijiKPcL/vvVKlgfajpRUcDS+C4a7WnFedVoJqiEs7wDiCAdTywRptvm9s+FeZKmQtgHM/e8+r5ygTN9TCwBqgnJmAIA8w6rVDVmU8ONlG4TSWuP2W9xyhKnrS2NocPnGJYbJVFrNUGAcaTj7Nxm7WV4FTzLLWXUvVCYDZbaJPr1KHGsMW60zdUAo3+m8kneD8SwEIBy76qwmerFhPeLQSw/AAr1N4sWRD0eIS52is4PTDp9S6pR+WVRZ/JMs1Pl7S22nGqG8C6F1gAWInLCMwINgKLwIwEjPIYYRGYkYBRHiMsAjMSMMpjhEVgRgJGeYywCMxIwCiPERaBGQkY5THCIjAjAaM8RlgEZiRglMcIi8CMBIzyGGFtAJtRHyPQarW6+qk1fp363L450z6TktrepgMzfVzHvI//DNuQ4rRZJHjW3EnNHeFLrh2pCl/o+P+NEib8bst0BZ5yofAhlv97dbVwHXUJd1v6ahS4K/jCJeqDVOuWqRfx6A+5CpLYo3H97gAAAABJRU5ErkJggg=="
        alt=""
      />
      <input type="text" placeholder="搜索商品名称" />
      <van-icon name="search" class="ico1" size="23" />
      <van-icon name="contact" class="ico2" size="23" />
    </header>
    <!-- tab切换 -->
    <div class="wrap">
      <van-tabs
        v-model="active"
        class="tab"
        sticky
        animated
        swipeable
        offset-top="45"
      >
        <van-tab title="推荐">
          <!-- 轮播 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item
              ><img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b888a50fe2bcafbb0bcbf3f736c2323b.jpg?thumb=1&w=720&h=360"
                alt=""
            /></van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a1705109526e8d0fee0a786372601d7.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/615061d000f087b56ced717eb9dc6a6f.png?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7aa87e387cca3831b97e6fa833dac44a.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
          </van-swipe>
          <!-- 列表 1-->
          <van-grid :border="false" :column-num="5" class="list1">
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a28a43e0599110b5f4370be43e7e75e.jpg?f=webp&w=216&h=228&bg=FFFFFF"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0434594382110f3bd15c90f040d5d542.jpg?f=webp&w=216&h=228&bg=FFFFFF"
              />
            </van-grid-item>
          </van-grid>
          <!-- 列表2 -->
          <van-grid :border="false" :column-num="5" class="list2">
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8"
              />
            </van-grid-item>
          </van-grid>
          <!-- pic1 -->
          <div class="pic1">
            <img
              class="img1"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29b39579739d82269d18f0e7c8f6c9da.jpg?f=webp&w=537&h=762&bg=57524C"
              alt=""
            />
            <img
              class="img2"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b9af94e5c05bb2b4849cbb113eddb9d.jpg?f=webp&w=537&h=378&bg=EBF8FF"
              alt=""
            />
            <img
              class="img3"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a12873ff30a6da401d74728878625c37.jpg?f=webp&w=537&h=378&bg=D2EDFF"
              alt=""
            />
          </div>
          <!-- pic2 -->
          <div class="pic2">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b2fff7f7b8de6d371601caf3a827eed.jpg?f=webp&w=1080&h=660&bg=F5F5F5"
              alt=""
            />
          </div>
          <!-- 展示商品 -->
          <ul class="zs1">
            <li v-for="item in list" :key="item._id">
              <img :src="item.coverImg" alt="" />
              <p>{{ item.name }}</p>
              <h4>￥{{ item.price }}</h4>
              <button>立即购买</button>
            </li>
          </ul>
          <!-- ti -->
          <div class="ti">
            更多小米手机产品<span class="iconfont icon-qianjin"></span>
          </div>
          <!-- pic3 -->
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46763407ec689716610a7342b920bb1a.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
            alt=""
            class="pic3"
          />
          <div class="ti1">
            更多小米电视产品<span class="iconfont icon-qianjin"></span>
          </div>
          <!-- zs2 -->
          <ul class="zs1">
            <li v-for="item in list2" :key="item._id">
              <img :src="item.coverImg" alt="" />
              <p>{{ item.name }}</p>
              <h4>￥{{ item.price }}</h4>
              <button>立即购买</button>
            </li>
          </ul>
          <div class="ti1">
            更多小米笔记本产品<span class="iconfont icon-qianjin"></span>
          </div>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5070349d6511ec431810d7528de020aa.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
            alt=""
            class="pic3"
          />
          <div class="ti1">
            更多米家家电产品<span class="iconfont icon-qianjin"></span>
          </div>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30f699fd686d90fb0d4e91090ebc38ed.jpg?f=webp&w=1080&h=420&bg=F6F6FF"
            alt=""
            class="pic4"
          />
          <div class="ti1">
            更多米家智能产品<span class="iconfont icon-qianjin"></span>
          </div>
          <!--  -->
          <ul class="pic5">
            <li>
              <img
                src="https://i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp?w=537&h=720&bg=C0A491"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a.webp?w=537&h=720&bg=E8CFCB"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i8.mifile.cn/v1/a1/b883172b-5aa3-7855-678f-c615109ee0a7.webp?w=537&h=720&bg=878F9B"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp?w=537&h=720&bg=9BB5C4"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp?w=537&h=720&bg=D9D8C3"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4.webp?w=537&h=720&bg=B5C5BE"
                alt=""
              />
            </li>
          </ul>
          <img
            class="pic6"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4c4a11536a720ee0f1b516e53e4d868.jpg?f=webp&w=1080&h=420&bg=873FFA"
            alt=""
          />
          <img
            src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bbb5bac8089d890338b5bf8ff742cbbc.png"
            alt=""
            class="pic7"
          />
        </van-tab>
        <van-tab title="手机" class="sj">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6cb8fc7a8a6136108adb4c8a79f8218.jpg?f=webp"
            alt=""
            class="a1"
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41803630a405f2e7ac241f9bea260f4.jpg?f=webp"
            alt=""
            class="a2"
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8825bae3253a196aa1e9f6a8e5247b45.jpg?f=webp"
            alt=""
            class="a3"
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88589308a12c8495fdc671320840a379.jpg?f=webp"
            alt=""
            class="a4"
          />
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20c641a195013740256f0de2a2d04f90.jpg?f=webp"
            alt=""
            class="a5"
          />
          <div class="line"></div>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/188d21cb0a7600f24a7eab2e2d720739.jpg?f=webp"
            alt=""
            class="a6"
          />

          <!-- goodslist -->
          <ul class="goods-list">
            <li v-for="item in list3" :key="item._id">
              <img :src="item.coverImg" alt="" />
              <p>{{ item.name }}</p>
              <h4>￥{{ item.price }}</h4>
              <button>立即购买</button>
            </li>
          </ul>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ab8e922b2a5948ad33b6984beaf216.jpg?f=webp"
            alt=""
            class="a7"
          />
          <ul class="goods-list">
            <li v-for="item in list4" :key="item._id">
              <img :src="item.coverImg" alt="" />
              <p>{{ item.name }}</p>
              <h4>￥{{ item.price }}</h4>
              <button>立即购买</button>
            </li>
          </ul>
        </van-tab>
        <van-tab title="智能">
          <!-- 轮播 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f4f8eebc71ef01ec3c63f1b685b3c2a.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37bd342303515c7a1a54681599e319a1.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb4a8b7d9e77567c7330776a866e717f.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f4f8eebc71ef01ec3c63f1b685b3c2a.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2b3ab270e5ae4c9e85d6607cdb97008.jpg?thumb=1&w=720&h=360"
                alt=""
              />
            </van-swipe-item>
          </van-swipe>
          <!-- list1 -->
          <van-grid :border="false" :column-num="5" class="list1">
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp"
              />
            </van-grid-item>
          </van-grid>
          <!-- list2 -->
          <van-grid :border="false" :column-num="5" class="list2">
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png"
              />
            </van-grid-item>
          </van-grid>
          <!-- pic -->
          <img
            class="b1"
            src="https://i8.mifile.cn/v1/a1/72411ddf-3df9-8d3a-7e5d-9429991710dc.webp"
            alt=""
          />
          <!-- 商品list -->
          <ul class="goods-list2">
            <li v-for="item in list5" :key="item._id">
              <img :src="item.coverImg" alt="" />
              <p>{{ item.name }}</p>
              <h4>￥{{ item.price }}</h4>
            </li>
          </ul>
        </van-tab>
        <van-tab title="电视" class="ds">
          <img
            class="c1"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0bcf1381f9a43f60b39b58e891f6daa.jpg?f=webp"
            alt=""
          />
          <div class="goods-wrap">
            <ul class="goods-list">
              <li v-for="item in list6" :key="item._id">
                <img :src="item.coverImg" alt="" />
                <p>{{ item.name }}</p>
                <h4>￥{{ item.price }}</h4>
                <button>立即购买</button>
              </li>
            </ul>
          </div>
          <!--  -->
          <div class="list-wrap">
            <ul class="goods-list2 goods2">
              <li v-for="item in list7" :key="item._id">
                <img :src="item.coverImg" alt="" />
                <p>{{ item.name }}</p>
                <h4>{{ item.price }}</h4>
                <button>立即购买</button>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="家电" class="jd">
          <img
            class="d1"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a56b920bc83820736d2260c58858bf4.jpg?f=webp"
            alt=""
          />
          <img
            class="d2"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/206eeb5a11b27d97cec3f2b2c053a083.jpg?f=webp"
            alt=""
          />
          <div class="jd-lists">
            <ul class="jd-list">
              <li v-for="item in list8" :key="item._id">
                <img :src="item.coverImg" alt="" />
                <p>{{ item.name }}</p>
                <h4>￥{{ item.price }}</h4>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="笔记本" class="bjb">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc92bd7fdb80c023c6887ae4f419e71.jpg?f=webp"
            alt=""
            class="e1"
          />
          <ul>
            <li></li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script scoped="">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reqProducts } from "../../api/product";

export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {
      active: "a",
      list: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      list7: [],
      list8: [],
      params: { per: 6, page: 5, product_category: "60bca58f95a4da29d418baab" },
      params2: {
        per: 6,
        page: 1,
        product_category: "60bca58f95a4da29d418baae",
      },
      params3: {
        per: 2,
        page: 1,
        product_category: "60bca58f95a4da29d418baab",
      },
      params4: {
        per: 4,
        page: 5,
        product_category: "60bca58f95a4da29d418baab",
      },
      params5: {
        per: 9,
        page: 1,
        product_category: "60bca58f95a4da29d418baac",
      },
      params6: {
        per: 2,
        page: 1,
        product_category: "60bca58f95a4da29d418baae",
      },
      params7: {
        per: 6,
        page: 1,
        product_category: "60bca58f95a4da29d418baae",
      },
      params8: {
        per: 9,
        page: 1,
        product_category: "60bca58f95a4da29d418baaf",
      },
    };
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {
    async getlist() {
      const result = await reqProducts(this.params);
      this.list = result.data.products;
      console.log(this.list[0].productCategory._id);

      console.log(result);
    },
    async getlist2() {
      const result = await reqProducts(this.params2);
      this.list2 = result.data.products;
      console.log(result);
    },
    async getlist3() {
      const result = await reqProducts(this.params3);
      this.list3 = result.data.products;
      console.log(result);
    },
    async getlist4() {
      const result = await reqProducts(this.params4);
      this.list4 = result.data.products;
      console.log(result);
    },
    async getlist5() {
      const result = await reqProducts(this.params5);
      this.list5 = result.data.products;
      console.log(result);
    },
    async getlist6() {
      const result = await reqProducts(this.params6);
      this.list6 = result.data.products;
      console.log(result);
    },
    async getlist7() {
      const result = await reqProducts(this.params7);
      this.list7 = result.data.products;
      console.log(result);
    },
    async getlist8() {
      const result = await reqProducts(this.params8);
      this.list8 = result.data.products;
      console.log(result);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getlist();
    this.getlist2();
    this.getlist3();
    this.getlist4();
    this.getlist5();
    this.getlist6();
    this.getlist7();
    this.getlist8();
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
* {
  margin: 0;
  padding: 0;
}
.home {
  overflow: hidden;
}

/* 推荐 */
.home header {
  padding: 2px 10px;
  position: relative;
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 100;
  /* margin-bottom: 70px; */
}
.wrap {
  height: 100%;
}
.tab {
  margin-top: 50px;
}
.home header img {
  width: 28px;
  height: 19px;
  font-display: block;
  margin-top: 13px;
  margin-left: 8px;
}
.van-icon-search {
  text-align: center;
  line-height: 45px;
  position: absolute;
  left: 72px;
  top: 6px;
}
.van-icon-contact {
  text-align: center;
  line-height: 35px;
  position: absolute;
  top: 11px;
  left: 340px;
}
.home header input {
  width: 260px;
  height: 32px;
  line-height: 32px;
  outline: none;
  border: none;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  text-indent: 2em;
  margin-left: 18px;
}
.van-tabs {
  width: 100%;
}
.van-tab__pane {
  width: 100%;
}
/* 轮播 */
.my-swipe img {
  width: 100%;
  height: 180px;
}
/* 列表 */
div /deep/.van-grid-item .van-grid-item__content {
  padding: 0;
}
/* pic1 */

.pic1 .img1 {
  width: 185px;
  height: 254px;
  float: left;
}
.pic1 .img2,
.pic1 .img3 {
  width: 185px;
  height: 126px;
  float: left;
  margin-left: 5px;
}
.pic1 .img2 {
  margin-bottom: 4px;
}
/* pic2 */
.pic2 img {
  width: 360px;
  height: 220px;
}
/* zs1 */
.zs1 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.zs1 li img {
  width: 172px;
  height: 140px;
  display: block;
  margin-bottom: 10px;
}
.zs1 li {
  width: 172px;
  text-align: center;
}
.zs1 li p {
  width: 172px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
}
.zs1 li h4 {
  width: 172px;
  color: #ea625b;
  font-size: 14px;
  margin-bottom: 10px;
}
.zs1 li button {
  background: #ea625b;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  padding: 5px 13px;
  outline: none;
  border: none;
  margin-bottom: 10px;
}
/* ti */
.ti {
  width: 100%;
  height: 50px;
  color: #66666699;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
  border-top: solid gray 1px;
}
/* pic3 */
.pic3 {
  width: 100%;
  height: 230px;
}
.ti1 {
  width: 100%;
  height: 50px;
  color: #66666699;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
}
.pic4 {
  width: 100%;
  height: 145px;
}
.pic5 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.pic5 img {
  width: 186px;
  height: 250px;
}
.pic6 {
  width: 100%;
  height: 145px;
  display: block;
  margin-top: 4px;
}
.pic7 {
  width: 100%;
  height: 55px;
  display: block;
  margin-bottom: 60px;
}
/* 手机 */
.sj {
  background-color: rgb(219, 230, 243);
}
.a1 {
  width: 100%;
  height: 408px;
}
.a2,
.a5 {
  width: 100%;
  height: 44px;
}
.a6 {
  width: 100%;
  height: 50px;
  display: block;
  margin-bottom: 8px;
}
.a3,
.a4 {
  width: 100%;
  height: 275px;
}
.line {
  width: 100%;
  height: 8px;
  border-bottom: 0.16rem solid rgb(219, 230, 243);
}
.goods-list li img {
  width: 176px;
  height: 176px;
  margin-bottom: 10px;
  border-radius: 10px 10px 0px 0px;
}
.goods-list li {
  margin-bottom: 10px;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  margin-bottom: 6px;
}
.goods-list li p {
  width: 176px;
  color: #3c3c3c;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list li h4 {
  width: 176px;
  text-align: center;
  color: #ff4a48;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}
.goods-list li button {
  background: rgb(245, 75, 75);
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  padding: 5px 13px;
  outline: none;
  border: none;
  margin-left: 50px;
  margin-bottom: 10px;
}
.goods-list li {
  border-radius: 10px;
  widows: 176px;
  background: #fff;
}

.a7 {
  width: 100%;
  height: 56px;
}
/* 智能 */
.b1 {
  width: 100%;
  height: 59px;
}
.goods-list2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.goods-list2 li img {
  width: 115px;
  height: 115px;
  display: block;
  margin-bottom: 7px;
}
.goods-list2 li {
  width: 115px;
}
.goods-list2 li p {
  width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  color: #3c3c3c;
  font-size: 14px;
  margin-bottom: 7px;
}
.goods-list2 li h4 {
  width: 115px;
  text-align: center;
  color: rgb(245, 75, 75);
  margin-bottom: 7px;
}
/* 电视 */
.ds {
  background-color: rgb(255, 174, 153);
}
.c1 {
  width: 100%;
  height: 62px;
  border-bottom: solid 1px #fff;
}
.goods2 li button {
  background: rgb(245, 75, 75);
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  padding: 5px 13px;
  outline: none;
  border: none;
  margin-left: 21px;
  margin-bottom: 10px;
}

.goods2 li {
  width: 115px;
  background: #fff;
}
.goods2 li img {
  border-radius: 8px 8px 0 0;
}
.goods2 li {
  margin-bottom: 5px;
  border-radius: 8px;
}
/*家电 */
.d1 {
  width: 100%;
  height: 64px;
}
.d2 {
  width: 100%;
  height: 70px;
}
.jd {
  background-color: rgb(225, 65, 57);
}
.jd-list li img {
  width: 115px;
  display: block;
  margin-bottom: 6px;
  border-radius: 5px 5px 0 0;
}
.jd-list li {
  background: #fff;
  margin-bottom: 6px;
  border-radius: 5px;
}
.jd-list li p {
  width: 115px;
  color: #3c3c3c;
  font-size: 12px;
  text-align: center;
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  white-space: nowrap; /*规定段落中的文本不进行换行 */
  margin-bottom: 6px;
}
.jd-list li h4 {
  width: 115px;
  text-align: center;
  color: rgb(245, 75, 75);
  font-size: 14px;
  margin-bottom: 6px;
}
.jd-list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
  align-items: center;
}
.jd-lists {
  margin-bottom: 50px;
}
/* 笔记本 */
.e1 {
  width: 100%;
  height: 41px;
  display: block;
  margin: 6px 0;
}
.bjb {
  background-color: rgb(72, 120, 166);
}
</style>
