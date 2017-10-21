 <template>
 <router-link :to="{ name:'articleinfo',params:{id:index}}" class="article-hot-item">
   <div class="title">{{title}}</div>
   <div class="content">{{content}}</div>
  </router-link> 
</template>
<script>
export default {
  data(){
    return {}
  },
   props:['title','content',"index"]
} 
</script>