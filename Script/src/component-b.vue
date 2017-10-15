<template>
   <div class="message" id="componentB">
        <div>{{ msg }}</div>
        <div>
            <input type="button"
                   value="send Data to Parent"
                   v-on:click="toParent"
            />
        </div>
         <div>
            <input type="button"
                   value="send Data to brotherA"
                   v-on:click="toBrother"
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
                      toParentData:'data from componentB',
                      toBrotherData:'data from brotherB'
                    }
            },
            methods:{
                   toParent:function(){
                       this.$emit('toParent',this.toParentData)
                   },
                   toBrother:function(){
                       this.$emit('toBrother',this.toBrotherData)
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