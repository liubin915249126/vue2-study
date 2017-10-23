<template>
 <div class="dialog-content">
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
  <el-row>
    <el-col :span="1">标签:</el-col>
   <el-col :span="23">
     <el-input v-model="input" placeholder="请输入关键字"></el-input>
   </el-col>
  </el-row>
   <div class="avatarWrap">
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        <div class="tooltip">点击上传头像</div>
    </el-upload>
    <el-dialog v-model="dialogVisible" size="tiny">
       <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
   </div>
  
  
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