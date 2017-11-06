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
      <ul v-if="listData&&listData.length>0" v-for="item in listData">
         <li>
            {{item}}
         </li>
      </ul>
    </div> 
    <div>
     <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
    </el-date-picker>
    </div>
  </div>  
</template>

<script>
    import componentA from './component-a.vue';
    import componentB from './component-b.vue';
    import request from './request.js';
    //import axios from 'axios';
    export default {
    data () {
        return {
          logoMsg:'data from parent component',
          data1:'' ,
          listData:null,
          value1:null
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
                 let {data} =await request.get(options.url);
                 this.listData = data
             }catch(err){
                 console.log(err) 
             }
            
         }
     }
    }
</script>

<style>
   
</style>