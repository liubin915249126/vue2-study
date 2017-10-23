<template>
 <div>
  <el-row> 
   <el-col :span="1">标题:</el-col>
   <el-col :span="23">
     <el-input v-model="input" placeholder="请输入标题"></el-input>
   </el-col>
   </el-row>
  <el-row>
   <el-col :span="1">内容:</el-col>
   <el-col :span="23">
    <VueEditor v-model="content"></VueEditor>
   </el-col>
  </el-row>
 </div> 
</template>

<script>
   import { VueEditor } from 'vue2-editor' 
   export default {
       data(){
           return {
              content:'<h1>请输入文章内容</h1>',
              input:''
           }
       },
       components:{
           VueEditor
       }
   }
</script>

<style>
 
</style>