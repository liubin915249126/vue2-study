<template>
<div>
    <div class="message">{{ msg }}</div>
    <div>
    <span>传递的参数为：{{ $route.params.id }}</span>

    <router-view></router-view>
    </div>
</div>


</template>

<script>
    export default {
    data () {
        return {
        msg: 'from about'
        }
     }
    }
</script>

<style>
    .message {
    color: blue;
    }
</style>