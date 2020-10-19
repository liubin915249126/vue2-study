<template>
    <div class="cloud">
        <h4>电站交接</h4>
        <el-button type="primary" icon="el-icon-plus" @click="showDialog">新建</el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部交接(5)" name="first">
                <el-row :gutter="20">
                    <el-col v-for="(item,index) in 5" :key="index" :span="12">
                      <div class="cloudCard">
                        <div class="planteName">电站名称站位电站名称站位电站名称站位电站名称站位电站名称站位电站名称站位</div>
                        <div>
                            <span>业主:</span>
                            <span class="planteContent">远景能源</span>&nbsp;&nbsp;&nbsp;
                            <span>站长:</span>
                            <span class="planteContent">吴小飞</span>
                        </div>
                        <div>位置:&nbsp;&nbsp;<span>上海市长宁区杨宅路199号东华创意园</span></div>
                        <div class="createTime">创建于2018-08-12 12:11 刘碧云</div>
                        <div class="statusTip">
                           <div class="status">交接中</div>
                           <div class="tip">已进行4天</div>
                        </div>
                      </div>
                   </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="交接中(4)" name="second">
               <el-cascader
                :options="[{
                    value:'1',
                    label:'1'
                }]"
                @change="handleItemChange"
            ></el-cascader>
            </el-tab-pane>
            <el-tab-pane label="交接完成(1)" name="third">

            </el-tab-pane>
        </el-tabs>
        <el-dialog
            title="新建电站交接"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <new-dialog></new-dialog>
             <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import newDialog from './newDialog.vue'
export default {
    data() {
      return {
        activeName: 'first',
        dialogVisible:false,
      };
    },
    components:{
        "new-dialog":newDialog,
    },
    created(){
        console.log(process.env.NODE_ENV);
    },
    methods:{
        showDialog(){
            this.dialogVisible = true
        },
        handleItemChange(){
            debugger;
        }
    }
}
</script>
<style lang="less">
  .el-tabs__header{
      background: #ebeef5;
      padding: 0 0 15px;
      margin: 0 -20px;
  }
  .el-tabs__nav-wrap{
      background: #fff;
      padding-left:20px;
      padding-right: 20px;
  }
  .cloud{
      margin: 10px 20px;
    //   card样式
      .cloudCard{
         background:#ebeef5;
         padding:15px 20px 10px 20px;
         margin:20px 5px 5px 5px; 
         transition: all 0.3 ease-in-out;
         border-radius: 3px;
         position: relative;
         cursor: pointer;
         &>div{
            margin-bottom: 10px; 
         }
         .planteName{
             color:#413cad;
             font-weight: bold;
             font-size: 19px;
             margin-bottom: 15px;
         }
         .planteContent{
             color:#496eab;
         }
         .createTime{
             font-size: 14px;
             color:#999;
         }
         .statusTip{
           position: absolute;
           top:15px;
           right:15px;
           text-align: right;
           .status{
             color:#de3535;
           }
           .tip{
               color:#999;
               font-size: 14px;
           }
         }
      }
      .cloudCard:hover{
        background: #fff;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
      }
  }
</style>
