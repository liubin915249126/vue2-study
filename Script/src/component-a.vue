<template>
   <div class="message">{{ msg }}</div>
</template>

<script>
    export default {
    data () {
        return {
        msg: 'component-A'
        }
     }
    }
</script>

<style>
    .message {
    color: blue;
    }
</style>