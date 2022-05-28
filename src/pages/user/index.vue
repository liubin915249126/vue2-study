<template>
  <div>{{ userStore.name }}</div>
  <button @click="changeName">change name</button>
  <div>
      组件演示
      <a-date-picker />
  </div>
</template>
 
<script lang="ts">
import { useUserStore } from '../../store/user'

import { DatePicker } from "ant-design-vue";

export default {
  data() {
    return {
    }
  },
  components: {
    'a-date-picker': DatePicker,
  },
  setup() {
      const userStore = useUserStore()
      const changeName = () => {
        userStore.name = '李四'
      }
    return {
      userStore,
      changeName
    }
  },
  methods: {
  }
}

</script>