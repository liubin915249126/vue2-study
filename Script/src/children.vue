<template>
   <div class="message">{{ msg }}</div>
</template>

<script>
    export default {
    data () {
        return {
        msg: 'children router'
        }
     }
    }
</script>

<style>
    .message {
    color: blue;
    }
</style>