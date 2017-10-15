<template>
   <div class="componentA">
      <span>{{`${msg}:`}}</span>
      <div>{{logo}}</div>
      <div>{{busData}}</div>
      <input type="button" 
             value="send Data To Parent"
             v-on:click="toParent"
            />
   </div>
</template>

<script>
    import Bus from './bus.js'
    export default {
    data () {
        return {
           msg: 'component-A',
           data1:'data from componentA',
           busData:''
        } 
    },
    created(){
       Bus.$on('byBus',(data)=>{
           this.busData = data
       })
    },
    props:["logo"],
    methods:{
        toParent:function(){
            this.$emit('toParent',this.data1)
        }
    }
    }
</script>

<style>
    .componentA {
        border:1px solid #333;
        width:fit-content;
        padding:5px;
    }
</style>