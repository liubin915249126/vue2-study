<template>
    <div class="detailWrap">
      <div class="bgImg">
        <img :src="bgImg" width="100%"/>
      </div>
        <div class="lenwrap">
          <div class="icon-wrap">
            <i class="iconfont icon-shortcut-fill"></i>
          </div>
          <div
          v-for="(item,index) in salaryList"
          :key="index"
          :class="salaryList[index].toogle?'len-cell open':'len-cell'"
        >
          <div class="title"  @click="toogle(index,item)">
          <span class="arrow"> <i class="iconfont icon-right" style="font-size:27px;"></i></span>
            <div>
              {{item.project_name?item.project_name.content:""}}
            </div>
            <div class="right">
              {{item.salary?item.salary.content:''}}
            </div>
          </div>
        
          <div :class="salaryList[index].toogle?'detailContent open':'detailContent'">
            <mt-cell :title="item.name.title" :value="item.name.content" class="name" v-if="item.name"></mt-cell>
            <mt-cell :title="item.card.title" :value="item.card.content" class="name" v-if="item.card"></mt-cell>
            <mt-cell :title="item.salary.title" :value="item.salary.content" class="name" v-if="item.salary"></mt-cell>
            <mt-cell v-for="(item,index) in otherList" :key="index" :title="item.title" :value="item.content"></mt-cell>
            <div v-if="otherList.length==0" style="padding:10px;text-align:center;">
              暂无数据
            </div>
          </div>
          <div class="info" style="text-align:center;margin:30px 0 30px 0;color: #fc6621;">
            {{item.info}}
          </div>
        </div>
        <div v-if="Array.isArray(salaryList)&&salaryList.length==0" class="place">
          暂无数据
        </div>
      </div>
    </div>
</template>

<script>
import request from '.././request.js'; 
import bgImg from "../assets/bg.jpeg"; 
export default {
  data(){
    const {params:{card,date}} = this.$route
    return {
       card:{},
       salary:{},
       otherList:[],
       salaryList:[],
       info:'',
       name:{},
       date,
       bgImg,
    }
  },
  created(){
    this.loadDetail();
    this.getInfo()
  },
  filters:{
    salaryFormat(num){
        return num && num
          .toString()
          .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
    }
  },
  methods:{
    async loadDetail(){
      const {params:{card,date}} = this.$route
      try {
          let {data} = await request.get(`/checkSalary?card=${card}&date=${date}`)
          if(data){
            const {data:listWrap,result} = data;
            if(result&&Array.isArray(listWrap)){
              this.salaryList = listWrap.filter(item=>item.project_name);
              // this.toogle(0,listWrap[0])
            }
          }
      } catch (error) {
          console.log(error)
      }
    },
    async getInfo(){
      const {params:{card,date}} = this.$route
      try {
          let {data:{data,result}} = await request.get(`/getInfo?card=${card}&date=${date}`)
            if(result){
              this.info = data
            }
          
      } catch (error) {
          console.log(error)
      }
    },
    toogle(index,itemObj){
      const item = this.salaryList[index]
      if(!item.toogle){
        this.salaryList.forEach((item,index1)=>{
          const item1 = this.salaryList[index1]
          item1.toogle = false
          this.$set(this.salaryList,index1,item1)
        })
      }
      item.toogle = !item.toogle
      this.$set(this.salaryList,index,item)
      this.otherList = itemObj.otherList||[];
      this.salary = itemObj.salary||{};
      this.name = itemObj.name||{}
    }
  }
}
</script>
  
<style scoped lang="less">
@fontColor:#fc6621;
  .detailWrap{
      .place{
        text-align: center;
        margin:50px 0;
      }
     /deep/.mint-cell{
         border-bottom: 1px solid #eee;
        padding:10px 30px;
       }
        /deep/.mint-cell-wrapper{
          font-size: 23px;
          color:#333;
          background: none;
     }
     font-size: 26px;
     background: #fff;
     padding-top:80px;
     .bgImg{
        position: absolute;
        left:0;
        top:-50px;
        img{
          height:316px;
        }
      }
     .detailContent{
       max-height: 0;
       overflow: hidden;
       transition: all 0.3s ease-in-out;
       .name{
        //  color:@fontColor;
         background: #eee;
       }
     }
     .detailContent.open{
       max-height:500vh;
     }
     .lenwrap{
       position: relative;
       background: #fff;
       width:80%;
       margin: 0 auto;
       padding:50px 0 0 0;
       box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
       .icon-wrap{
        position: absolute;
        top:0;
        color:@fontColor;
        background: #fff;
        width:100px;
        height:100px;
        line-height: 100px;
        border-radius: 50%;
        top:0;
        text-align: center;
        left:50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        i{
          font-size: 50px;
        }
      }
     }
    .len-cell{
      border-bottom: 1px solid #eee;
      transition: all 0.3s ease-in-out;
      .title{
        position: relative;
        padding:20px 50px;
        font-weight: bold;
        .arrow{
          position: absolute;
          left:20px;
          top:50%;
          color:#999;
          transition: transform 0.3s ease-in-out;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
        }
        .right{
          position: absolute;
          right:20px;
          top:50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
        } 
      }
      .info{
        transition: visibility 0.3s ease-in-out 0.3s;
        visibility: hidden;
        display: none;
      }
    }
    .len-cell:last-child{
      display: inline-block;
      width: 100%;
      margin-bottom: 50px;
    }
    .len-cell.open{
      .title{
         border-bottom: 1px solid #eee;
      }
      .arrow{
        transform: translateY(-50%) rotate(90deg);
        -webkit-transform: translateY(-50%) rotate(90deg);
      }
      .info{
        display: block;
        visibility: visible;
      }
      &:last-child{
        margin-bottom: 0;
      }
    } 
  }
</style>
