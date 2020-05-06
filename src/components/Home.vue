<template>
  <div>
    <!-- 轮播图 -->
    <!-- <div class="loop">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
    </div> -->
    <homeLoop></homeLoop>
    <!-- 六宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/Home/NewsList">
            <!-- <span class="mui-icon mui-icon-Home"></span> -->
            <img :src="img1" />
            <div class="mui-media-body">新闻咨询</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <!-- <span class="mui-icon mui-icon-email"></span> -->
            <img :src="img2" />
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/Home/Shopping">
            <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
            <img :src="img3" />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/Home/Comment">
            <!-- <span class="mui-icon mui-icon-location"></span> -->
            <img :src="img4" />
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <!-- <span class="mui-icon mui-icon-search"></span> -->
            <img :src="img5" />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/Home/Content">
            <!-- <span class="mui-icon mui-icon-phone"></span> -->
            <img :src="img6" />
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//引入轮播图组件
import homeLoop from "../components/carousel/HomeLoop.vue";
export default {
  data() {
    return {
      // lunbotuList: [], //存放从后台请求的数据
      img1: "../images/menu1.png",
      img2: "../images/menu2.png",
      img3: "../images/menu3.png",
      img4: "../images/menu4.png",
      img5: "../images/menu5.png",
      img6: "../images/menu6.png",
      picloop: []
    };
  },
  // created() {
  //   this.getLoop(); //加载完成后调用方法
  // },
  methods: {
    // getLoop() {
    //   this.$http
    //     .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop")
    //     .then(result => {
    //       // console.log(result);
    //       this.lunbotuList = result.body.message;
    //       // console.log(this.lunbotuList)
    //     })
    //     .catch();
    // }
  },
  components:{
    homeLoop
  }
};
</script>
<style scoped>
/* scoped只在当前页面起作用 */
/* 轮播图样式 */
.loop {
  height: 200px;
  margin-top: 40px;
  text-align: center;
}
.loop img {
  width: 100%;
  height: 200px;
}
.mui-content li a img {
  width: 60%;
  border-radius: 50%;
}
</style>