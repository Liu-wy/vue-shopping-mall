<template>
  <div>
    <div class="loop">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in loop" :key="item.id">
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
        loop:[],
        

    };
  },
  created() {
    this.getLoop(); //加载完成后调用方法
  },
  methods: {
    getLoop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/goodslist?pageindex=1")
        .then(result => {
          // console.log(result);
          this.loop = result.body.message;
          // console.log(this.loop)
        })
        .catch();
    }
  }
};
</script>
<style scoped>
/* 轮播图样式 */
.loop {
  height: 220px;
  text-align: center;
}
.loop img {
  width: 100%;
  height: 200px;
}
</style>