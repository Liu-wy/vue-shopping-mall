<template>
  <div class="body">
    <!-- 头部 -->
    <mt-header fixed title="lwy-Vue商城项目">
      <span slot="left" @click="goback" v-show='flag'>
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 内容部分 -->

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 尾部 -->
    <div class="footer clearfix">
      <nav class="mui-bar mui-bar-tab clearfix">
        <div class="clearfix">
          <router-link class="mui-tab-item-aa" to="/Home">
            <p class="mui-icon mui-icon-home"></p>
            <p class="mui-tab-label">首页</p>
          </router-link>
        </div>
        <div class="clearfix">
          <router-link class="mui-tab-item-aa" to="/Member">
            <p class="mui-icon mui-icon-contact"></p>
            <p class="mui-tab-label">会员</p>
          </router-link>
        </div>
        <div class="clearfix">
          <router-link class="mui-tab-item-aa" to="/Shopcar">
            <p class="mui-icon mui-icon-extra mui-icon-extra-cart">
              <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
            </p>
            <p class="mui-tab-label">购物车</p>
          </router-link>
        </div>
        <div class="clearfix">
          <router-link class="mui-tab-item-aa" to="/Search">
            <p class="mui-icon mui-icon-search"></p>
            <p class="mui-tab-label">搜索</p>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  //默认导出
  data() {
    return{
      flag:false,
    }
  },
  created(){
    //返回按钮的判断条件
    this.flag = this.$route.path == '/Home'?false:true
  },
  methods: {
    goback(){
      this.$router.go(-1)//一级一级返回

    },
  },
  watch: {
      "$route.path":function(newVal){
        if(newVal == '/Home'){
          this.flag = false
        }else{
          this.flag = true
        }
      }
    },
  /* mounted(){
    this.mui("body").on("tab","router-link",function(){document.location.href=this.href;});
  } */
};
</script>
<style scoped>
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.body {
  overflow-x: hidden;
  margin-bottom: 65px;
}
* {
  touch-action: none;
}
.mui-bar-tab > div {
  width: 25%;
  float: left;
  text-align: center;
}
.mui-tab-item-aa {
  color: #bbbbbb;
}
.mui-tab-item-aa .mui-icon {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>