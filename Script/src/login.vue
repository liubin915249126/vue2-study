<template>
<div class="loginwrap">
    <div v-if="logined">
      <h3>欢迎回来</h3>  
      <el-button @click="switchlogin">切换账号</el-button>
      <el-button @click="logintomain">登录</el-button>
   </div>
   <el-form v-else
            :model="ruleForm" :rules="rules" ref="ruleForm" 
            label-width="100px" class="demo-ruleForm">
        <h3>欢迎登录系统</h3>    
       <el-form-item label="租户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
       </el-form-item>
       <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
       </el-form-item>
       <el-form-item label="记住密码" prop="rememberMe">
          <el-checkbox v-model="ruleForm.rememberMe"></el-checkbox>
       </el-form-item>
       <el-form-item>
          <el-button @click="login" type="primary">登录</el-button> 
       </el-form-item>
   </el-form>
   
</div>
</template>
<script>
 import request from './request.js';
 import {setCookie,delCookie,getCookie} from './utils.js' 
 export default {
     data(){
         return{
            ruleForm:{
                name:'rolename',
                username:'username',
                password:'123456',
                rememberMe:''
            },
            rules:{
                username:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
                name:[{ required: true, message: '请输入租户名', trigger: 'blur' }],
                password:[{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            logined:false 
         }
     },
     beforeCreate:async function(){
        let checkloginurl = '/account/IsAuthenticate'
        let {data} = await request.get(checkloginurl)
        if(data.success){
            this.logined = true
        }else{
            this.logined = false
        }
        let userInfo = getCookie("getnameJson");
     },
     methods:{
       login:function(){
           this.$router.push({ path: '/main' })
           let url ="/Account/Login/";
           let data1 = {
               Password:this.ruleForm.password,
               RememberMe:this.ruleForm.rememberMe,
               TenancyName:this.ruleForm.name,
               UsernameOrEmailAddress:this.ruleForm.username,
               returnUrl:""
            }
            
            this.$refs.ruleForm.validate(async(valid)=>{
                if(valid){
                  try{
                        let {data} = await request.post(url,data1)
                        console.log(data)
                        if(data1.RememberMe){
                            setCookie('getnameJson',JSON.stringify({"userName":data1.UsernameOrEmailAddress,"tenancyName":data1.TenancyName,"remberUser":data1.RememberMe}),30)
                            //setCookie('path','/',30)
                        }else{
                            delCookie('getnameJson')
                            //delCookie('path')
                        }
                        if(data.success){//后台验证成功后登陆
                         this.$router.push({ path: '/main' })
                        }
                        
                    }catch(error){
                        console.log(error)
                    }
                }
            })
            
           
       },
       logintomain:function(){
           this.$router.push({ path: '/main' })
       },
       switchlogin:function(){
           this.logined = false
       }
     }
}
</script>
<style lang="less">
   .loginwrap{
      width:400px;
      margin: 0 auto;
      border:1px solid #eee;
      h3{
        text-align: center;
      }
   }
</style>