<template>
  <div>
     <div>{{$store.state.moduleA.count}}</div>
     <div>{{$store.state.moduleB.name}}</div>
     <div>
     <span @click="increment">increment</span>
     <span @click="decrement">decrement</span>
     <span @click="change">change</span>
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
          },
          change(){
              this.$store.commit('change') 
          } 
      }
  }
</script>