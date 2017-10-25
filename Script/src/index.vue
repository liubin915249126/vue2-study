<template>
 <div :class="isCollapse?'menuwrap collapse-wrap':'menuwrap'">
   <div class="topmenu">
      <div class="topleft">
        
      </div>
      <div class="topright">
         <div class="collapseicon">
            <i class="el-icon-arrow-right" @click="increase"></i>
            <i class="el-icon-arrow-left" @click="decrease"></i>
         </div>
      </div>
   </div>
   <el-row class="len-content">
    <div class="len-content-left">
                <el-menu :collapse="isCollapse">
                    <!-- 使用 router-link 组件来导航. -->
                    <!-- 通过传入 `to` 属性指定链接. -->
                    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                    <el-submenu index="0">
                       <template slot="title">
                         <i class="el-icon-menu"></i>
                         <span>其他</span>
                       </template>
                       <el-menu-item-group title="其他">
                        <el-menu-item index="0-1"><router-link to="/main/about/123">about</router-link></el-menu-item>
                        <el-menu-item index="0-2"><router-link to="/main/about/123/child">child router</router-link></el-menu-item>
                        <el-menu-item index="0-3"><router-link to="/main/a">redirect</router-link></el-menu-item>
                        <el-menu-item index="0-4"><router-link to="/main/count">count</router-link></el-menu-item>
                        <el-menu-item index="0-5"><router-link to="/main/component">component</router-link></el-menu-item>
                       </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">
                         <i class="el-icon-menu"></i>
                          <span>文章系统</span>
                        </template>
                        <el-menu-item-group title="文章系统">
                            <el-menu-item index="1-1"><router-link to="/main/article">article</router-link></el-menu-item>
                            <el-menu-item index="1-2"> <router-link to="/main/articlelist">my article</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="2">
                       <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>配置页面</span>
                       </template>
                        <el-menu-item-group title="配置页面">
                          <el-menu-item index="2-1"><router-link to="/main/apiconfig">apiconfig</router-link></el-menu-item>
                        </el-menu-item-group>
                        
                    </el-submenu>
                </el-menu>
     </div>
    <div class="len-content-right">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view>
        </router-view>
    </div>
  </el-row>
 </div>
 
</template>

<script>
    export default {
    data () {
        return {
          isCollapse:false
        }
     },
     methods:{
         decrease:function(){
             this.isCollapse = true
         },
         increase:function(){
             this.isCollapse = false
         }
     }
    }
</script>

<style lang="less">
   .menuwrap{
    .topmenu{
        position:relative;
        padding-left:410px;
        transition:all 0.3s ease-in-out;
      .topleft{
          transition:all 0.3s ease-in-out;
          width:400px;
          width:400px;
          position:absolute;
          left:0;
      }
      .topright{
        .collapseicon{
            i[class^="el-icon-arrow"]{
                border:1px solid #eef1f6;
                padding:3px;
                color:#eee;
                cursor:pointer;
            }
            .el-icon-arrow-right{
                display:none;
            }
            .el-icon-arrow-left{
                display:inline-block;
            }
        }
      }
    }
    .len-content{
        position:relative;
        padding-left:410px;
        transition:all 0.3s ease-in-out;
        .len-content-left{
            transition:all 0.3s ease-in-out;
            width:400px;
            position:absolute;
            left:0;
        }
    }

    .el-menu{
        transition:all 0.3s ease-in-out;
        .el-menu-item{
        a{
            display:inline-block;
            width:100%;
            color:#333;
            text-decoration:none;
        }
        }
        }
   }  
   .menuwrap.collapse-wrap{
       .topmenu{
           padding-left:74px;
          .topleft{
            width:64px;
            width:64px;
            position:absolute;
            left:0;
          }
          .topright{
           .collapseicon{
            i[class^="el-icon-arrow"]{
                // position:absolute;
            }
            .el-icon-arrow-right{
                display:inline-block;
            }
            .el-icon-arrow-left{
                display:none;
            }
        }
       }
       }
       
       .len-content{
        position:relative;
        padding-left:74px;
        .len-content-left{
            width:64px;
            position:absolute;
            left:0;
        }
    }
   }
</style>