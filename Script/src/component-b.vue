<template>
   <div class="message" id="componentB">{{ msg }}</div>
</template>

<script>
    import Vue from 'vue'
    // let Vue = new Vue;
    export default Vue.component('my-component', {
            template: '#componentB ',
            data(){
                return {
                      msg: 'component-B'
                    }
            }
    })
</script>

<style>
</style>