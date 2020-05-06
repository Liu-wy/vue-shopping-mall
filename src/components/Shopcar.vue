<template>
  <div class="shopcar">
    <div class="mui-card clearfix" v-for="(item,i) in getGoodsLists" :key="item.id">
      <div class="mui-card-content clearfix">
        <!-- getGoodsSelected[item.id]拿到的是开关的状态 -->
        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
        <img :src="item.img_url" />
        <div class="shoppingcon">
          <h4>{{item.title}}</h4>
          <p class="shopcount">
            <span>￥{{item.now_price}}</span>
            <!-- {{$store.getters.getgoodsCount[item.id]}} 拿到car中的数量 -->
            <numberbox :getcounts='$store.getters.getgoodsCount[item.id]' :goodsid='item.id'></numberbox>
            <span @click="del(item.id,i)">删除</span>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="countC">
            <div>
              <div>总计:</div>
              <span>已勾选数量:{{$store.getters.getAllCountAmount.m}}件</span>
              <span>总价:￥{{$store.getters.getAllCountAmount.n}}</span>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numberbox from "../components/subcomponent/Goodsinfo_num.vue";
export default {
  data() {
    return {
      getGoodsLists:[],//保存请求回来的数据
    };
  },
  created() {
    this.getgoodsList();
  },
  methods: {
    getgoodsList() {
      var isArr = [];
      this.$store.state.car.forEach(item=>{
        isArr.push(item.id);
        // console.log(isArr)
      })


      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/shopcarlist/" + isArr.join(','))
        .then(res=>{
          // console.log(res.body.message)
          this.getGoodsLists = res.body.message
        })
        .catch();
    },
    //id是store中的数据，Index是获取到的数据
    del(id,index){
      this.getGoodsLists.splice(index,1);
      this.$store.commit('remove',id)
    },
    selectedChange(id,val){
      // console.log(id+'======'+val)
      this.$store.commit('updataSelected',{id,selected:val})
    }
  },
  components: {
    numberbox
  }
};
</script>
<style scoped>
.shopcar {
  margin-top: 40px;
}
.mui-card-content img {
  width: 50px;
  height: 50px;
  margin-left: 10px;
}
.mui-card-content {
  display: flex;
}
.mui-card-content {
  padding: 10px;
  margin: 10px 0;
}
.shoppingcon {
  margin-left: 10px;
}
.shopcount {
  display: flex;
}
.shopCont {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
}
.countC {
  display: flex;
  justify-content: space-between;
}
</style>