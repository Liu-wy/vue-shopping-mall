<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" :value="getcounts" ref="numbox" @change="countChange" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props:['getcounts','goodsid'],
  mounted() {
    this.mui(".mui-numbox")
      .numbox()
      .getValue();
  },
  methods: {
    countChange() {
      console.log(this.$refs.numbox.value);
      // console.log(this.numchange)
      // this.$emit("getcount", parseInt(this.numchange));
      this.$store.commit('updataSelectCount',{
        id:this.goodsid,
        count:this.$refs.numbox.value
      })
    }
  }
};
</script>
<style scoped>
</style>