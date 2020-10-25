<template>
  <div class="">
    <van-form validate-first>
      <van-field
        label="模板名称"
        name="validator"
        placeholder="函数校验"
        :rules="[{ required:true, message: '请输入正确内容' }]"
      />
    </van-form>
  </div>
</template>
<script>
import { Form,Field } from 'vant';
export default {
  data() {
    return {};
  },
  components:{
    [Form.name]: Form,
    [Field.name]: Field
  },
  methods: {
    nameValidator(val){

    }
  },
};
</script>
<style lang="less" scoped>
</style>
