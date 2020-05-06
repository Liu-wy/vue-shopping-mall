<template>
  <div>
    <div class="news">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for='item in newsList' :key="item.id">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.img_url" />
            <div class="mui-media-body">
              <p class="newsTitle">{{item.title}}</p>
              <p class="mui-ellipsis">
                  <span>{{item.add_time}}</span>
                  <span>点击次数：{{item.click}}</span>
              </p>
            </div>
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNews()
    },
    methods:{
        getNews(){
            this.$http.get('http://yapi.shangyuninfo.com/mock/121/api/getnewslist')
            .then(res=>{
                // console.log(res)
                this.newsList = res.body.message
                // console.log(this.newsList)
            })
            .catch()
        }
    }
};
</script>
<style scoped>
.news {
  margin-top: 40px;
}
.newsTitle{
    font-size: 14px;
    color: #000000;
}
.mui-ellipsis{
    color: blue;
    display: flex;
}
.mui-ellipsis span:nth-of-type(1){
    flex: 8;
    font-size: 12px;
}
.mui-ellipsis span:nth-of-type(2){
    flex: 2;
    font-size: 12px;
    text-align: right;
}
</style>