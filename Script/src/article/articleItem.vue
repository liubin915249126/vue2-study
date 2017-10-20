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
   .article-item{
       color:#000;
       text-decoration: none; 
       &>div{
        min-height:155px;
        padding-left:240px;
        position:relative;
        .imgWrap{
          width:220px;
          height:155px;
          position:absolute;
          left:0;
          border:1px solid #eee;
        }
        .item-content{
          min-height:100px;
        }
       }
       
   }
</style>