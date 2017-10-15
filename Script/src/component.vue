<template>
  <div>
   <div class="message">父子组件测试</div>
   <component-A :logo="logoMsg" @toParent="componenta"></component-A>
   <div>{{data1}}</div>
   <component-B  
        @toParent="componenta"
        @toBrother = "changeA" 
    ></component-B>
  </div>  
</template>

<script>
    import componentA from './component-a.vue';
    import componentB from './component-b.vue'
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
         }
     }
    }
</script>

<style>
   
</style>