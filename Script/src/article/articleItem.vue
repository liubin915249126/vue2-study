 <template>
   <router-link to="">
     <div class="article-item">
        <div class="imgWrap">
          <img src=""/>
        </div>
        <div class="item-content">
           <p>{{item.title}}</p>
           <p></p>
           <p>{{item.content}}</p>
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
            props:['item']
    })
</script>
<style lang="less">
   .article-item{
       padding-left:230px;
      .imgWrap{
        width:220px;
        height:155px;
        float:left;
      }
   }
</style>