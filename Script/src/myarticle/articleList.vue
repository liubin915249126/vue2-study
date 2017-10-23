<template>
  <div class="article-list-wrap">
     <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="list-content">
       <el-col :span="5" class="content-left">
         <div class="btnwrap">
            <el-button type="primary" @click="showDialog">发布文章</el-button>
         </div>
         <div class="filterwrap">
           <span>筛选</span>
           <div>
           <el-date-picker
            v-model="daterange"
            size="small"
            type="daterange"
            placeholder="选择日期范围">
           </el-date-picker>
           </div>
           <div>
             <el-input
                placeholder="请输入关键字"
                icon="search"
                size="small"
                v-model="keysearch"
                :on-icon-click="keysearchFun">
             </el-input>
           </div>
           <el-row>
             <el-col :span="5">状态:</el-col>
             <el-col :span="19">
                <el-select v-model="stausvalue" clearable placeholder="请选择" size="small">
                  <el-option
                    v-for="item in statusoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="5">标签:</el-col>
             <el-col :span="19"><el-input v-model="labelvalue" placeholder="请输入内容" size="small"></el-input></el-col>
           </el-row>
           <el-row>
             <el-col :span="5">类型:</el-col>
             <el-col :span="19">
                <el-select v-model="typevalue" clearable placeholder="请选择" size="small">
                  <el-option
                    v-for="item in typeoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
             </el-col>
           </el-row>
         </div>
       </el-col>
       <el-col :span="19" class="content-right">
          <div class="right-inner">
             <div class="title">我的文章</div>
                  <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址">
                    </el-table-column>
                </el-table>
          </div>
       </el-col>
    </el-row>
    <el-dialog 
      title="发布文章" 
      :visible.sync="visible"
      size="large"
    >
     
     <dialog-content></dialog-content>

    <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
  //引入样式文件
  import './style/index.less'
  //引入模拟数据
  import {tabledata} from './data.js'
  //引入弹窗组件
  import dialogContent from './dialogContent.vue';   
  export default {
      data(){
          return{
              daterange:'',
              keysearch:'',
              stausvalue:'',
              statusoptions:[],
              labelvalue:'',
              typevalue:'',
              typeoptions:[],
              coldata:[],
              tableData:tabledata,
              visible:false//控制弹窗显示与隐藏
          }
      },
      components:{
        "dialog-content":dialogContent
      },
      methods:{
          keysearchFun:function(){
          },
          showDialog:function(){
              this.visible = true
          }
      } 
  } 
</script>

<style lang="less">

</style>