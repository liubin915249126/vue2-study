<template>
  <div>
   <div class="message">父子组件测试</div>
   <component-A :logo="logoMsg" @toParent="componenta"></component-A>
   <div>{{data1}}</div>
   <component-B  
        @toParent="componenta"
        @toBrother = "changeA" 
    ></component-B>
    <div>
      <button v-on:click="request">请求数据</button>
    </div>
  </div>  
</template>

<script>
    import componentA from './component-a.vue';
    import componentB from './component-b.vue';
    import request from './request.js';
    import axios from 'axios';
    export default {
    data () {
        return {
          logoMsg:'data from parent component',
          data1:'' 
        }
     },
     components:{
         "component-A":componentA,
         "component-B":componentB
     },
     methods:{
         componenta:function(data){
            this.data1 = data
         },
         changeA:function(data){
           this.logoMsg = data
         },
         request:async function(){
             let options ={method:"get",url:'/'}
             try{
                 let res =await request(options);
                 console.log(res)
             }catch(err){
                 console.log(err) 
             }
            
         }
     }
    }
</script>

<style>
   
</style>