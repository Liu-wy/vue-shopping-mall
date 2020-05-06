<template>
  <div>
    <div class="loop">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        lunbotuList:[]
    };
  },
  created(){
      this.homeLoop()
  },
  methods: {
    homeLoop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop")
        .then(res=>{
            this.lunbotuList = res.body.message;
        })
        .catch();

    }
  }
};
</script>
<style scoped>
/* 轮播图样式 */
.loop {
  height: 200px;
  margin-top: 40px;
  text-align: center;
}
.loop img{
    width: 100%;
    height: 200px;
}
</style>