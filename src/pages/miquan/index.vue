<template>
  <div class="lmq">
    <!-- 头部 -->
    <div class="top">
      <!-- 组件盒子 -->
      <div class="top-hezi">
        <!-- ----------------- ------------------------------------ ------------------- -->
        <!-- 标签页组件 -->
        <van-tabs
          v-model="active"
          class="zujianye"
          sticky
          @disabled="onClickDisabled"
        >
          <!-- 头像 -->

          <van-tab disabled>
            <template #title>
              <van-icon name="more-o" />
            </template>
          </van-tab>

          <!-- 关注 -->
          <van-tab title="关注">
            <div>
              <img
                class="weidongluimg"
                src="https://m.mi.com/static/img/login.b5f7bfbcb5.png"
                alt=""
              />
              <h3 class="guanzu">登陆看关注人最新动态</h3>
              <van-button class="anniu" round type="info" color="#ff5528"
                >立即登录</van-button
              >
            </div>
          </van-tab>
          <!-- 广场 -->
          <van-tab title="广场">
            <div class="buju">
              <div class="fabu" @click="fabu()">
                <van-icon name="plus" color="#ffffff" class="fabu-ion" />
                <span class="fabu-ion-botom">发布</span>
              </div>
              <!-- 主体-->
              <div class="content">
                <img
                  class="content-top-img"
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9545c86a1cdb5f9ca238cb0e67ad23b.jpg"
                  alt=""
                />
                <ul class="zhutiUl">
                  <!-- 列表系列 -->
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span>
                        <van-image
                          round
                          width="25px"
                          height="25px"
                          src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                      </span>
                      <span>
                        <p>米圈互动官</p>
                        <p>5小时前</p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="" @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>

                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>
                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <h5 class="boss-bt">
                        给高考生建议：考完数学应该对答案吗？
                      </h5>
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <div class="boss-text-bt">
                          <van-tag type="warning" class="jxz">进行中</van-tag
                          ><span>1369人参与</span>
                        </div>
                        <ul class="wenzi-ul">
                          <li>应该，不对答案反而心里更慌</li>
                          <li>不该，明天还有考试</li>
                          <li>看把握程度吧~</li>
                          <li>评论区交流</li>
                        </ul>
                      </div>
                      <div class="yxpu"><span>小明:我觉得你说的很对</span></div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>10</span></span>
                      <span><van-icon name="good-job-o" /><span>10</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>

                  <!--问大家系列 -->
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span> </span>
                      <span>
                        <p>
                          <van-tag type="warning" class="jxz">问大家</van-tag>
                          <span>为什么跟别人打电话别人听不清自己说的话</span>
                        </p>
                        <p class="wdj">
                          <span>
                            <van-image
                              round
                              width="25px"
                              height="25px"
                              src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/b2a925c7-f34b-4999-ab4c-e54040a02730.jpg?thumb=150x150"
                          /></span>
                          <span>2341****039</span><span>1天前更新</span>
                        </p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="..." @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>
                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>

                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <ul class="wenzi-ul">
                          <van-divider />
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/fd474c1a-6a41-4a03-90e4-256aadafc92c.jpg?thumb=150x150"
                            /></span>
                            <span class="wda-xs shenglue"
                              >啥垃圾手机真的垃圾</span
                            >
                          </p>

                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/e07b9460-fbe2-4753-9cde-b9d73c86778e.jpg?thumb=150x150"
                            /></span>
                            <span class="wda-xs">性能是可以的</span>
                          </p>
                          <p class="wdj">
                            <span class="wda-xs dibu">全部17条评论> </span>
                          </p>
                          <p class="wdj">
                            <span class="wda-xs dibu"
                              >Redmi K40 游戏增强版>
                            </span>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>10</span></span>
                      <span><van-icon name="good-job-o" /><span>10</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>

                  <!--图片系列 -->
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span>
                        <van-image
                          round
                          width="25px"
                          height="25px"
                          src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/d5d596ae-0619-4ac5-8fab-e989ab28d70b.jpg?thumb=150x150"
                        />
                      </span>
                      <span>
                        <p>Lin烁</p>
                        <p><span>Redmi K30 Pro</span>10小时前</p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="" @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>

                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>
                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <h5 class="boss-bt">
                        买了三个月左右，两边声音不一样，品质真差劲
                      </h5>
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <div class="boss-text-bt"></div>
                        <ul class="wenzi-ul">
                          <img
                            class="tupian-xilie"
                            src="https://cdn.fds-ssl.api.xiaomi.com/b2c-data-mishop/2e94246b32712f619723a18c4bcf3623.jpg?w=1080&h=2400"
                            alt=""
                          />
                          <p class="wdj">
                            <span class="wda-xs dibu"
                              >Redmi AirDots 3真无线蓝牙耳机
                            </span>
                          </p>
                        </ul>
                      </div>
                      <div class="yxpu"><span>明事理的来波666</span></div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>10</span></span>
                      <span><van-icon name="good-job-o" /><span>10</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>

                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span>
                        <van-image
                          round
                          width="25px"
                          height="25px"
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/216e81df2bb37b3006bdec6b706f827c.jpg"
                        />
                      </span>
                      <span>
                        <p>米圈互动官</p>
                        <p>4天前</p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="..." @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>
                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>
                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <h5 class="boss-bt">你的老师有哪些口头禅？</h5>
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <div class="boss-text-bt">
                          <van-tag type="warning" class="jxz">进行中</van-tag
                          ><span>432人参与</span>
                        </div>
                        <ul class="wenzi-ul">
                          <li>你们是我带过的最差一届！</li>
                          <li>我再讲两分钟就下课！</li>
                          <li>又一道送分题！</li>
                          <li>看我干嘛，我脸上又不是黑板 ！</li>
                        </ul>
                      </div>
                      <div class="yxpu">
                        <span
                          >嘿嘿:每次临近考场，各种做题，每次讲解都会说又是一道送分题！你们给我记下了</span
                        >
                      </div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span
                        >11<van-icon name="share-o" />

                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                      /></span>
                      <span><van-icon name="chat-o" /><span>140</span></span>
                      <span><van-icon name="good-job-o" /><span>27</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span> </span>
                      <span>
                        <p>
                          <van-tag type="warning" class="jxz">问大家</van-tag>
                          <span>充电器需要另外选购吗</span>
                        </p>
                        <p class="wdj">
                          <span>
                            <van-image
                              round
                              width="25px"
                              height="25px"
                              src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/b2a925c7-f34b-4999-ab4c-e54040a02730.jpg?thumb=150x150"
                          /></span>
                          <span>1272***888</span><span>1天前更新</span>
                        </p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="..." @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>
                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>

                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <ul class="wenzi-ul">
                          <van-divider />
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/fac7c884-e40c-432c-928f-814f9030dbe0.jpg?thumb=150x150"
                            /></span>
                            <span class="wda-xs shenglue"
                              >不用，里面都有。耳机需要自己买。用有线的记得要买转接口</span
                            >
                          </p>

                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/32e8dbee-7f50-4d9e-a4eb-aa3cb1d55bc2.jpg?thumb=150x150"
                            /></span>
                            <span class="wda-xs shenglue"
                              >k40标配33w充电器、数据线、已贴屏幕膜、手机保护壳</span
                            >
                          </p>
                          <p class="wdj">
                            <span class="wda-xs dibu">全部9条评论> </span>
                          </p>
                          <p class="wdj">
                            <span class="wda-xs dibu">Redmi K40> </span>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>6</span></span>
                      <span><van-icon name="good-job-o" /><span>1</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span>
                        <van-image
                          round
                          width="25px"
                          height="25px"
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3eaa82584dbb6b580785533ea738856f.jpg"
                        />
                      </span>
                      <span>
                        <p>米圈互动官</p>
                        <p>05-26 11:42</p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="" @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>

                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>
                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <h5 class="boss-bt">评论有奖|你怎么定义Note 10系列？</h5>
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <div class="boss-text-bt"></div>
                        Note10 系列 从定义之初就定位：
                        “用心”两字希望把这部手机的每个细节，都为你们用心雕琢用心，挑战无短板、不裸奔、无槽点的旗舰标准
                        ...
                        <ul class="wenzi-ul">
                          <img
                            class="tupian-xilie"
                            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea637329b2ef90eceef9d9a3b581ce2.jpg?w=800&h=800"
                            alt=""
                          />
                          <p class="wdj">
                            <span class="wda-xs dibu">Note10小金刚 </span>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>10</span></span>
                      <span><van-icon name="good-job-o" /><span>10</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span>
                        <van-image
                          round
                          width="25px"
                          height="25px"
                          src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/2eb4a165-17d2-4e96-b994-a76ffa9f88e5.jpg?thumb=150x150"
                        />
                      </span>
                      <span>
                        <p>英雄联盟官方</p>
                        <p>5小时前</p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="" @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>

                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>
                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <h5 class="boss-bt">
                        如果lol比赛选手在过程中打了个喷嚏导致团战失败怎么办？
                      </h5>
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <div class="boss-text-bt">
                          <van-tag type="warning" class="jxz">进行中</van-tag
                          ><span>1369人参与</span>
                        </div>
                        <ul class="wenzi-ul">
                          <li>祖安人一上线</li>
                          <li>低情商你妈死了，高情商你妈是郑爽</li>
                          <li>我上我也行~</li>
                          <li>评论区交流</li>
                        </ul>
                      </div>
                      <div class="yxpu"><span>李四:就这？</span></div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>857</span></span>
                      <span
                        ><van-icon name="good-job-o" /><span>5137</span></span
                      >
                    </p>
                    <div class="buttom-bor"></div>
                  </li>
                  <!--图片系列 -->
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span>
                        <van-image
                          round
                          width="25px"
                          height="25px"
                          src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/d5d596ae-0619-4ac5-8fab-e989ab28d70b.jpg?thumb=150x150"
                        />
                      </span>
                      <span>
                        <p>Lin烁</p>
                        <p><span>Redmi K30 Pro</span>10小时前</p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="" @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>

                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>
                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <h5 class="boss-bt">
                        买了三个月左右，两边声音不一样，品质真差劲
                      </h5>
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <div class="boss-text-bt"></div>
                        <ul class="wenzi-ul">
                          <img
                            class="tupian-xilie"
                            src="https://cdn.fds-ssl.api.xiaomi.com/b2c-data-mishop/2e94246b32712f619723a18c4bcf3623.jpg?w=1080&h=2400"
                            alt=""
                          />
                          <p class="wdj">
                            <span class="wda-xs dibu"
                              >Redmi AirDots 3真无线蓝牙耳机
                            </span>
                          </p>
                        </ul>
                      </div>
                      <div class="yxpu"><span>明事理的来波666</span></div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>10</span></span>
                      <span><van-icon name="good-job-o" /><span>10</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>
                  <!--问大家系列 -->
                  <li>
                    <!-- 头部 -->
                    <p class="li-topSSR">
                      <span> </span>
                      <span>
                        <p>
                          <van-tag type="warning" class="jxz">问大家</van-tag>
                          <span
                            >《英雄联盟》怎么在不被封号的前提下降低自己的胜率？</span
                          >
                        </p>
                        <p class="wdj">
                          <span>
                            <van-image
                              round
                              width="25px"
                              height="25px"
                              src="https://pic1.zhimg.com/50/v2-96c90debe9808cd26ed08fcdbc46f128_s.jpg?source=54b3c3a5"
                          /></span>
                          <span>苍月彻</span
                          ><span>吾等即使无形，亦不会停下脚步</span>
                        </p>
                      </span>
                      <span class="gengduo">
                        <div is-link title="..." @click="show = true">
                          <van-icon name="ellipsis" />
                        </div>
                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          description="举报>"
                          close-on-click-action
                        />
                      </span>
                    </p>

                    <!-- li内容 -->
                    <div class="li-content">
                      <!-- 标题 -->
                      <!-- 主要内容 -->
                      <div class="boss-text">
                        <ul class="wenzi-ul">
                          <van-divider />
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://img0.baidu.com/it/u=4233760948,3132983073&fm=26&fmt=auto&gp=0.jpg"
                            /></span>
                            <span class="wda-xs shenglue"
                              >选巨魔，天赋带启封秘籍和小兵去质器。开局说自己辅助，补位到其他位置谁不想打辅助你给他说你来辅助。</span
                            >
                          </p>

                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.chaziwang.com%2Fshufa%2Fx%2F32823.gif&refer=http%3A%2F%2Fwww.chaziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625712176&t=5c1ac7b41a9bf9a41c516b3dc1eb0ba1"
                            /></span>
                            <span class="wda-xs shenglue"
                              >最后一秒点燃换惩戒，带闪现惩戒。</span
                            >
                          </p>
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://img1.baidu.com/it/u=1598918735,3340497066&fm=26&fmt=auto&gp=0.jpg"
                            /></span>
                            <span class="wda-xs shenglue"
                              >进去之后观察谁胜率最高，识别大哥，开局买两个个真眼。道个歉说自己带错了技能，然后趁打野没有戒心惩戒抢buff。紧接着马不停蹄赶到大哥的线上，插真眼，插假眼帮助对面抢二，然后送buff给对面，回去再补两个真眼。</span
                            >
                          </p>
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://img2.baidu.com/it/u=3973079883,1772770593&fm=26&fmt=auto&gp=0.jpg"
                            /></span>
                            <span class="wda-xs shenglue"
                              ><p>
                                这次上线主E副Q，大哥打对面你劝架，大哥补刀你惩戒大车，大哥和平发育你给对面插眼让对面得钱又得经验，大哥想跑你E挡路，大哥要回家你E打断。
                              </p></span
                            >
                          </p>
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://img0.baidu.com/it/u=37538804,1933584712&fm=26&fmt=auto&gp=0.jpg"
                            /></span>
                            <span class="wda-xs shenglue"
                              ><p>
                                出装就是纯ad装，九头蛇必出，两个真眼必带，上线就插给对面送经济。借着你的惩戒刷一切你能看见的资源，野区兵线。下路1v2难C，打野不仅被你断了节奏还要被你吃野，大哥有心杀敌，落后对面1.2级补刀受影响也很难。而你，除了开局送1个，中间可能被抓死一两次，补刀在线，经济领先，不看录像只看数据，可能你还是SVP。
                              </p></span
                            >
                          </p>
                          <p class="wdj">
                            <span>
                              <van-image
                                round
                                width="25px"
                                height="25px"
                                src="https://pic4.zhimg.com/3f5ae504b71d3eaa054503d2e0fc547a_xs.jpg?source=06d4cd63"
                            /></span>
                            <span class="wda-xs shenglue"
                              ><p>谢谢，血压已经上来了</p></span
                            >
                          </p>

                          <p class="wdj">
                            <span class="wda-xs dibu">全部17条评论> </span>
                          </p>
                          <p class="wdj">
                            <span class="wda-xs dibu">Redmi K40 小霸王> </span>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <!-- 底部分享 -->
                    <p id="li-bottom">
                      <span class="dingwei-feixing">
                        <van-cell
                          class="share-o-ceshi"
                          @click="showShare = true"
                        />
                        <van-icon name="share-o" />
                        <van-share-sheet
                          classs="dibuxiugai"
                          v-model="showShare"
                          title="立即分享给好友"
                          :options="options"
                          @select="onSelect"
                        />
                      </span>
                      <span></span>
                      <span><van-icon name="chat-o" /><span>10</span></span>
                      <span><van-icon name="good-job-o" /><span>10</span></span>
                    </p>
                    <div class="buttom-bor"></div>
                  </li>
                </ul>
              </div>
            </div>
          </van-tab>
          <!-- 铃铛 -->
          <van-tab v-for="index in 1" :key="index" disabled>
            <template #title>
              <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
            </template>
            9999998内容
          </van-tab>
        </van-tabs>
        <!-- ------------------------------------  ------------------------------------ -->
      </div>
    </div>
  </div>
</template>
    <script src=""></script>

<script>
export default {
  components: {},
  data() {
    return {
      activeNames: ["1"],

      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
      ],
      active: "2",
      container: null,

      show: false,
      actions: [
        { name: "", subname: "辱骂攻击,广告,违规" },
        { name: "", subname: "取消" },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickDisabled(name, title) {
      Toast(name + "已被禁用");
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  created() {},
  mounted() {
    this.container = this.$refs.container;
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>


<style scoped>
.guanzu {
  text-align: center;
}
.anniu {
  margin-left: 107px;
  margin-top: 20px;
  width: 147px;
}
.weidongluimg {
  width: 300px;
  margin: 50px 0 30px 0;
}
.dibuxiugai {
  background-color: rgba(0, 0, 0, 0.2) !important ;
}
.tupian-xilie {
  width: 175px;
  border-radius: 12px;
}
.dibu {
  background: rgb(141 138 138 / 17%);
}
.bejing-meis {
  background: rgb(102, 98, 98);
}
.shenglue {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wda-xs {
  font-size: 15px;
  margin-left: 5px;
}
.dingwei-feixing {
  position: absolute;
  top: -18px;
  left: 48px;
}
.wdj {
  width: 100%;
  min-height: 1px;
  display: block;
  margin-top: 28px;
  margin-bottom: 35px;
}

.yxpu {
  margin-left: 3%;
  width: 88%;
  min-height: 28px;
  line-height: 28px;
  background: #f9f9f9;
  border: 1px solid rgb(105, 106, 106);
  border-radius: 7px;
}
.yxpu span {
  margin-left: 15px;
}
.wenzi-ul {
  width: 100%;
}
.wenzi-ul li {
  text-align: center;
  line-height: 35px;
  margin-bottom: 10px;
  height: 35px;
  background: #ffffff;
  border: 1px solid rgb(105, 106, 106);
  border-radius: 10px;
  width: 90% !important;
  margin-left: 2.5%;
}
.boss-text-bt {
  margin-bottom: 10px;
}
.jxz {
  margin-right: 10px;
}
.boss-bt {
  margin-top: 5px;
  margin-bottom: 10px;
}
.van-overlay {
  background-color: rgba(0, 0, 0, 0.2);
}
.boss-text {
  width: 100%;
  min-height: 200px;
  background: #f9f9f9;
}
.zujianye {
  top: 0;
  background: #ffffff;
}
.buju {
  width: 370px;
  background: #ffffff;
}
.fabu {
  width: 70px;
  height: 70px;
  background: #ff5934;
  color: aliceblue;
  border-radius: 100%;
  text-align: center;
  /* line-height: 100px; */
  z-index: 99;
  position: fixed;
  right: 20px;
  bottom: 20%;
  box-shadow: 0px 3px 11px #ff5934;
}
/* .top-hezi {
  width: 200px;
  height: 100%;
  margin-left: 100px;
} */

.zuo {
  position: fixed;
  left: 35px;
  top: 7px;
  font-size: 26px;
}
.you {
  position: fixed;
  right: 35px;
  top: 7px;
  font-size: 26px;
}
.content {
  width: 94%;
  margin-left: 3%;
  margin-bottom: 20px;
}
.content-top-img {
  width: 100%;
  border-radius: 10px;
}
.zhutiUl {
  padding-bottom: 47px;
}
.zhutiUl li {
  font-size: 12px;
  color: black;
  width: 100%;
  /* height: 80px; */
}
.zhutiUl li p {
  width: 100%;
  /* height: 70px; */
}
.zhutiUl li p span {
  display: block;
  float: left;
}
van-share-sheet {
  background-color: rgba(0, 0, 0, 0.2);
}
.zhutiUl li .gengduo {
  float: right;
  font-size: 20px;
}
#li-bottom {
  margin-top: 20px;
  position: relative;

  width: 100%;
  height: 20px;
  display: flex;
  font-size: 15px;
  justify-content: space-around;
}
#li-bottom span {
  float: right;
}
.li-content {
  width: 100%;
}
.li-topSSR {
  margin-top: 10px;
  width: 100%;
  min-height: 35px;
}
.li-topSSR span {
  margin-right: 10px;
}

.buttom-bor {
  width: 107%;
  height: 10px;
  background: #f6f6f6;
  margin-left: -3%;
  z-index: 99;
}
.fabu-ion {
  position: relative;
  top: 17%;
  font-size: 27px;
  left: 23%;
}
.fabu-ion-botom {
  position: relative;
  left: -20%;
  top: 38%;
  font-size: 15px;
}
.jiazaigengduo {
  width: 100%;
  border-radius: 25px;
  font-size: 15px;
}
</style>