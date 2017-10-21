<template>
  <div class="article-list-wrap">
     <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="list-content">
       <el-col :span="5">
         
       </el-col>
       <el-col :span="19">
         
       </el-col>
    </el-row>
  </div>
</template>

<script>
  //引入样式文件
  import './style/index.less'
  export default {
      data(){
          return{}
      }
  } 
</script>

<style lang="less">

</style>