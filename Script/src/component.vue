<template>
  <div>
   <div class="message">父子组件测试</div>
   <component-A></component-A>
   <component-B></component-B>
  </div>  
</template>

<script>
    import componentA from './component-a.vue';
    import componentB from './component-b.vue'
    export default {
    data () {
        return {
       
        }
     },
     components:{
         "component-A":componentA,
         "component-B":componentB
     }
    }
</script>

<style>
   
</style>