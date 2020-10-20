<template>
 <div class="dialog-content">
  <el-row> 
   <el-col :span="1">标题:</el-col>
   <el-col :span="23">
     <el-input v-model="title" placeholder="请输入标题"></el-input>
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
     <el-input v-model="keyWords" placeholder="请输入关键字"></el-input>
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
   import request from '.././request.js'; 
   export default {
       data(){
           return {
              content:'<h1>请输入文章内容</h1>',
              input:'',
              title:'',//文章标题
              keyWords:'',
           }
       },
       components:{
           VueEditor
       },
       methods:{
           submit:async function(callback){
               let data1 = {
                   title:this.title,
                   htmlContent:this.content,
                   topState:1,
                   showState:3,
                   state:1,
                   customTypeID:1,
                   organizationStructureCodes:'Me',
                   labels:[],
                   code:"00000000-0000-0000-0000-000000000000",
                   enclosures:[{articleID:0,createDateTime:"2017-07-25T03:01:58.077Z",
                                createUser:0,createUserName:"string",name:"string",
                                path:"string",vId:0}],
                   thumbnailPath:'',
                //    txtContent:this.content.match(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/)[0]
                   txtContent:this.content.match(/[\u4e00-\u9fa5_]+/)[0]
                   }
               let url = '/api/services/Article/Article/CreateArticle';
               try{
                   let {data} = await request.post(url,data1)
                   callback();
               }catch(error){

               }
               
           }
       }
   }
</script>

<style>
 
</style>