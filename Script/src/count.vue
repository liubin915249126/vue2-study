<template>
  <div>
     <div>{{$store.state.count}}</div>
     <div>
     <span @click="increment">increment</span>
     <span @click="decrement">decrement</span>
     </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
      data(){
        return {};
      },
      methods:{
          increment(){
              debugger;
              this.$store.commit('increment')  
          },
          decrement(){
              debugger;
              console.log(this.$store.state.count)
              this.$store.commit('decrement')  
          }
      }
  }
</script>