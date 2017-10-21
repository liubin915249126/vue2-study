 <template>
   <router-link :to="{ name:'articleinfo',params:{id:index}}" class="article-item">
     <div>
        <div class="imgWrap">
          <img src=""/>
        </div>
        <div class="item-content">
           <p>{{title}}</p>
           <p></p>
           <p>{{content}}</p>
        </div>
     </div>
   </router-link>  
</template>

<script>
    import Vue from 'vue'
    export default Vue.component('article-item', {
            template: '.article-item',
            data(){
                return {
                      
                    }
            },
            props:['title','content',"index"]
    })
</script>
<style lang="less">
   
</style>