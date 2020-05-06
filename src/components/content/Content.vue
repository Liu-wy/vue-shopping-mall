<template>
  <div class="content">
    <div class="mui-content">
      <div class="mui-content-padded" style="margin: 5px;">
        <h5>输入用户名：</h5>
        <div class="mui-input-row mui-search">
          <input type="search" class="mui-input-clear" placeholder />
        </div>
        <h5>输入密码：</h5>
        <div class="mui-input-row mui-password">
          <input type="password" class="mui-input-password" />
          <span class="mui-icon mui-icon-eye"></span>
        </div>
        <div class="mui-input-row" style="margin: 10px 5px;">
          <textarea id="textarea" rows="5" placeholder="多行文本框"></textarea>
        </div>
        <div class="mui-button-row">
          <button type="button" class="mui-btn mui-btn-primary" onclick="return false;">确认</button>&nbsp;&nbsp;
          <button
            type="button"
            class="mui-btn mui-btn-danger"
            onclick="return false;"
          >取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content {
  margin-top: 50px;
}
</style>