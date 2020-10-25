<template>
  <pageLayout>
    <div class="template-create">
      <preview v-if="preview"></preview>
      <newtemplate v-else></newtemplate> 
    </div>
  </pageLayout>
</template>
<script>
import pageLayout from '@/components/layout/pageLayout.vue'
import newtemplate from '@/components/template/new'
import preview from '@/components/template/preview'
export default {
  components:{
    pageLayout,
    newtemplate,
    preview
  },
  data() {
    return {
      preview:false,
    };
  },
  methods:{
      
  }
};
</script>
<style lang="less" scoped>

</style>
