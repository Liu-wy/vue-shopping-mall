<template>
  <div class="shopShow">
    <div>
      <ul class="clearfix">
        <li v-for="item in shopList" :key="item.id">
          <router-link :to="'/Shopping/ProductDetails/'+item.id">
            <!-- <router-link to="/Shopping/ProductDetails"> -->
            <div class="pic" id="pic">
              <img :src="item.img_url" />
              <h4>{{item.title}}</h4>
            </div>
            <div class="shopBottom">
              <p class="price">
                <b>￥{{item.now_price}}</b>
                <del>￥{{item.old_price}}</del>
              </p>
              <p class="hot">
                <span>热卖中</span>
                <span>剩余{{item.own}}件</span>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopList: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.getshop();
  },
  methods: {
    //获取商品信息
    getshop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/goodsinfo")
        .then(res => {
          // console.log(res);
          this.shopList = res.body.message;
          console.log(res.body.message);
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.shopShow {
  margin-top: 40px;
  margin-bottom: 50px;
}
#pic {
  height: 80%;
  background-color: #ffffff;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
#pic img {
  width: 80%;
}
#pic h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price b {
  color: red;
  font-size: 20px;
  margin-right: 10px;
}
.price del {
  font-size: 18px;
}
.hot {
  display: flex;
}
.hot span:nth-of-type(1) {
  flex: 5;
}
.hot span:nth-of-type(5) {
  flex: 5;
}

ul > li {
  height: 100%;
  width: 50%;
  padding: 10px;
  /* background-color: #ffffff; */
  list-style: none;
  float: left;
}
.shopBottom {
  height: 20%;
  background-color: #ccc;
  padding: 4px;
}
</style>