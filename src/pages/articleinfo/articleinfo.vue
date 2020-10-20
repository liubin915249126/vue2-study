<template>
  <div class="article-detail">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="info-content">
      <p class="article-title">第{{$route.params.id }}篇文章</p>
      <div class="classification">
        系统分类:<span>原创作品-最新资讯-房产</span>
      </div>
      <p class="copyright">作品版权由boom所有，禁止转载，禁止匿名使用</p>
      <div class="articleinfo">
        文章内容
      </div>
      <div class="commont">
         <VueEditor v-model="content"></VueEditor>
      </div>
    </div>
  </div>     
</template>

<script> 
  //引入样式表
  import './style/index.less'
  import { VueEditor } from 'vue2-editor' 
  export default{
      data(){
          return{
            content:'<h1>评论的内容</h1>'
          }
      },
      components:{
        VueEditor
      }
  }
</script>