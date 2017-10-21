<template>
  <div class="articleWrap">
   <div class="articleTop">
      上午好，欢迎使用PenseeHCM
  </div>
  <el-row class="articleContent"> 
     <el-col :span="17" class="content-left">
       <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
        </el-carousel-item>
       </el-carousel>
       <div class="article-list" v-for="(item,index) in articleList">
         <article-item 
            :title = 'item.title'
            :content = 'item.content'
            :index = 'index'
            ></article-item>
       </div>
    </el-col>
    <el-col :span="7" class="content-right">
    <div class="rightInner">
     <div class="num">
      <el-row>
         <el-col :span="12">
          <p>0</p>
          <p>文章</p>
        </el-col>
        <el-col :span="12">
          <p>0</p>
          <p>关注</p>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <p>0</p>
          <p>收藏</p>
        </el-col>
        <el-col :span="12">
          <p>0</p>
          <p>推荐</p>
        </el-col>
      </el-row>
     </div>
     <el-row>
       <el-col :span="8">
         <router-link to="/articlelist">
           <el-button type="primary">我的文章</el-button>
         </router-link> 
       </el-col>
       <el-col :span="16">
        <el-input
            placeholder="请输入关键字"
            icon="search"
            v-model="input2"
            :on-icon-click="handleIconClick">
        </el-input>
       </el-col>
     </el-row>
     <div class="hotarticlewrap">
      <span>热门文章</span>
      <hotarticle-item v-for="(item,index) in hotArticleList"
            :title = 'item.title'
            :content = 'item.content'
            :index = 'index' 
      ></hotarticle-item>
     </div>
     <div class="labelwrap">
       <span>热门标签</span>
       <div>
         <el-tag type="primary">标签一</el-tag>
         <el-tag type="primary">标签二</el-tag>
         <el-tag type="primary">标签三</el-tag>
       </div>
     </div>
    </div>  
    </el-col>

  </el-row>
  </div>
</template>

<script>
  //导入样式 
  import './style/index.less';
  //导入组件
  import articleItem from './articleItem.vue';
  import hotArticleItem from './articleHotItem.vue'
  //导入数据
  import {articleList,hotArticleList} from './data.js'
  export default {
     data(){
       return {
         input2: '',
         articleList:[],
         hotArticleList:[]
       }
     },
     components:{
        "article-item":articleItem,
        "hotarticle-item":hotArticleItem
     },
     created(){
         this.articleList = articleList;
         this.hotArticleList= hotArticleList
     },
     methods: {
        handleIconClick(ev) {
         console.log(ev);
        }
  }
  }
</script>
<style lang='less'>

</style>