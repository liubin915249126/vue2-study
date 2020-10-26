<template>
  <div class="test-wrap">
    <div class="test">测试</div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script>
import { Button } from 'vant';
export default {
  data() {
    return {};
  },
  components:{
    [Button.name]: Button
  },
  methods:{
      
  }
};
</script>
<style lang="less" scoped>
  .test-wrap{
    .test{
      font-size:20px;
    }
  }
</style>
