<template>
   <div class="message" id="componentB">
        <div>{{ msg }}</div>
        <div>
            <input type="button"
                   value="send Data to Parent"
                   v-on:click="toParent"
            />
        </div>
   </div>
</template>

<script>
    import Vue from 'vue'
    // let Vue = new Vue;
    export default Vue.component('my-component', {
            template: '#componentB ',
            data(){
                return {
                      msg: 'component-B',
                      toParentData:'data from componentB'
                    }
            },
            methods:{
                   toParent:function(){
                       this.$emit('toParent',this.toParentData)
                   }
            }
    })
</script>
  
<style>
    #componentB{
        border:1px solid #333;
        width:fit-content;
        padding:5px;
    }
</style>