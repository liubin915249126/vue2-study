<template>
  <el-row>
        <el-col :span="4">
                <el-menu>
                    <!-- 使用 router-link 组件来导航. -->
                    <!-- 通过传入 `to` 属性指定链接. -->
                    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                    <el-submenu index="0">
                       <template slot="title">其他</template>
                       <el-menu-item-group title="其他">
                        <el-menu-item index="0-1"><router-link to="/main/about/123">about</router-link></el-menu-item>
                        <el-menu-item index="0-2"><router-link to="/main/about/123/child">child router</router-link></el-menu-item>
                        <el-menu-item index="0-3"><router-link to="/main/a">redirect</router-link></el-menu-item>
                        <el-menu-item index="0-4"><router-link to="/main/count">count</router-link></el-menu-item>
                        <el-menu-item index="0-5"><router-link to="/main/component">component</router-link></el-menu-item>
                       </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="1">
                        <template slot="title">文章系统</template>
                        <el-menu-item-group title="文章系统">
                            <el-menu-item index="1-1"><router-link to="/main/article">article</router-link></el-menu-item>
                            <el-menu-item index="1-2"> <router-link to="/main/articlelist">my article</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="2">
                       <template slot="title">配置页面</template>
                        <el-menu-item-group title="配置页面">
                          <el-menu-item index="2-1"><router-link to="/main/apiconfig">apiconfig</router-link></el-menu-item>
                        </el-menu-item-group>
                        
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view>
                </router-view>
            </el-col>
        </el-row>
</template>

<script>
    export default {
    data () {
        return {
          
        }
     }
    }
</script>

<style lang="less"> 
    .el-menu{
      .el-menu-item{
       a{
           display:inline-block;
           width:100%;
           color:#333;
           text-decoration:none;
       }
      }
    }
    
</style>