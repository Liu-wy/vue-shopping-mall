<template>
  <div class="product">
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="loop">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img_url" />
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
    </div>
    <!-- 小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" ref="ball" v-show="flag"></div>
    </transition>
    <!-- 商品名称 -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="productPrice">
            <span>
              市场价
              <del>￥999</del>
            </span>
            <span>
              销售价
              <b>￥99</b>
            </span>
          </div>
          <div class="shopNum clearfix">
            <div class="shop">购买数量</div>
            <numberbox class="numbox" @getcount="getAddCount"></numberbox>
          </div>
          <div class="btn">
            <button class="mui-btn mui-btn-primary">立即购买</button>
            <button type="button" class="mui-btn mui-btn-danger" @click="addtoshopcar">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:</p>
          <p>库存情况:30件</p>
          <p>上架时间</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//点击加入购物车获取商品Id,价格，商品数里，商品是否选中
//{id=this.id}

//引入组件
// import productLoop from "../carousel/ProductLoop.vue";
import numberbox from "../subcomponent/Goodsnum.vue";
export default {
  data() {
    return {
      //   loop: [],
      flag: false,
      lunbotuList: [],
      id: this.$route.params.id,
      numchange: 1, //这是点击数量的默认值
      goodsinfo: []
    };
  },
  created() {
    this.getLoop(); //加载完成后调用方法
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop_1587914991785")
        .then(res => {
          this.lunbotuList = res.body.message;
        });
    },
    //获取商品数据
    getLoop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/goodsinfo")
        .then(res => {
          this.goodsinfo = res.body.message[0]; //只拿出来请求回来的数组中的第一项
          console.log(res.body.message);
        });
    },

    //加入购物车
    addtoshopcar() {
      this.flag = !this.flag;
      var goodsinfos = {
        id: this.id,
        price: this.goodsinfo.now_price,
        count: this.numchange,
        selected: true //这是指购物车页面的开关是否开启，true代表选择商品
      };
      this.$store.commit("addToCar", goodsinfos);
      console.log(this.goodsinfo.now_price);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      //获取小球移动的距离
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xPonsition = badgePosition.left - ballPosition.left;
      const yPonsition = badgePosition.top - ballPosition.top;
      // console.log(xPonsition,yPonsition)

      el.style.transform = `translate(${xPonsition}px,${yPonsition}px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    //获取numbox的数值
    getAddCount(count) {
      this.numchange = count;
      // console.log('父组件拿到的值：'+this.addcount)
    }
  },
  components: {
    numberbox
    // productLoop
  }
};
</script>
<style scoped>
.product {
  margin-top: 40px;
}
/* 轮播图样式 */
.loop {
  height: 220px;
  text-align: center;
}
.loop img {
  width: 100%;
  height: 200px;
}
.productPrice b {
  color: red;
}
.productPrice,
.shopNum {
  font-size: 16px;
  color: grey;
  display: flex;
  margin-top: 10px;
}
.shopNum .numbox {
  flex: 6;
}
.shopNum .shop {
  height: 35px;
  line-height: 35px;
  margin-right: 4px;
}
.btn {
  margin-top: 10px;
}
.ball {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  z-index: 999;
  position: absolute;
  top: 422px;
  left: 147px;
}
</style>