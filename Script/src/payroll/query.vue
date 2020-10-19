<template>
  <div class="queryWrap">
    <div class="top">
      <div class="iconfontWrap" @click="$router.push('/payroll_bind')">
        <!-- <span v-if="cardNo">{{cardNo|cardSlice}}</span> -->
        <i class="iconfont icon-user"></i>
      </div>
      <div class="logoWrap">
        <img :src="logo">
        <span>&nbsp;&nbsp;优 服</span>
      </div>
    </div>
    <!-- <div class="second">
      <div class="cardTitle">欢迎访问</div>
      <h4>优服员工薪资查询系统</h4>
    </div> -->
    <div class="third">
      <div class="cardTitle">
        薪资查询
      </div>
      <div v-if="cardNo" class="bindWrap">
        <!-- <div class="">身份证号:{{cardNo}}</div> -->
        <div class="actionWrap">
          <mt-button  @click.native="selectDate">{{date?date:'暂无薪资详情'}}</mt-button>
          <!-- <mt-button type="primary" @click="$router.push(`/payroll_detail/2010-12/123`)">查询</mt-button> -->
        </div>
        <div class="actionWrap">
          <mt-button type="primary" @click="query">查询</mt-button>
        </div>
        <!-- <div class="cardTip tip">如果这不是你的身份证号,请联系管理员解绑</div> -->
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom">
          <mt-cell class="confirmWrap">
            <mt-button type="primary" size="large" @click="popupVisible=false">确定</mt-button>
          </mt-cell>
          <mt-picker :slots="slots" :itemHeight="72" @change="onValuesChange"></mt-picker>
        </mt-popup>
      </div>
      <div v-else class="bindWrap noBindWrap">
        <div class="tip">你的微信尚未绑定身份证号,&nbsp;&nbsp;<span style="color:#fc6621;" @click="$router.push('/payroll_bind')">请先绑定</span>&nbsp;&nbsp;</div>
      </div>
    </div>
    <div class="fourth">
      <div class="cardTitle">
        招聘链接
      </div>
      <div class="cardContent tip">
        <div>
          <span>制造生产</span>
          <span>检验检测</span>
          <span>设备维护</span>
          <span>叉车仓管</span>
        </div>
        <div style="margin:20px 0;">
          <span>人事行政</span>
          <span>售后客服</span>
          <span>文审文员</span>
          <span>报关输单</span>
        </div>
        <img :src="target1" @click="jumpTo('http://www.uvol.net/m/list.php?tid=4')">
      </div>
    </div>
    <div class="fourth">
      <div class="cardTitle">
        官网链接
      </div>
      <div class="cardContent tip">
        <div style="margin:0 0 20px 0;">
          <span>企业官网</span>
          <span>业务模块</span>
          <span>新闻咨询</span>
          <span>合作分享</span>
        </div>
        <!-- <div style="margin:20px 0;">
          <span>职位搜索</span>
          <span>热门招聘</span>
          <span>全部职位</span>
          <span>我的收藏</span>
        </div> -->
        <img :src="target2" @click="jumpTo('http://www.uvol.net/m/')">
      </div>
    </div>
  </div>
</template>

<script>
import request from ".././request.js";
import { getQueryString, setCookie, getCookie } from ".././utils.js";
import logo from "../assets/logo.png";
import target1 from "../assets/pic1.png";
import target2 from "../assets/pic2.png";
import { Toast } from "mint-ui";
export default {
  data() {
    const currentYear = new Date().getFullYear();
    var monthArr = [];
    for (let index = 1; index <= 12; index++) {
      monthArr.push(`${index}月`);
    }
    return {
      popupVisible: false,
      date: "",
      year: "",
      month: "",
      cardNo: "",
      wechatId: getCookie("wechatId") || "",
      cardNo1: "",
      logo,
      target1,
      target2,
      slots: [
        //   {
        //   flex: 1,
        //   values: [currentYear,currentYear-1],
        //   className: 'slot1',
        //   textAlign: 'right'
        // }, {
        //   divider: true,
        //   content: '-',
        //   className: 'slot2'
        // }, {
        //   flex: 1,
        //   values: monthArr,
        //   className: 'slot3',
        //   textAlign: 'left'
        // }
      ]
    };
  },
  created() {
    this.getOpenId();
  },
  filters:{
    cardSlice(card){
      if(card){
        return card.slice(-6)
      }
    }
  },
  methods: {
    async getMonths() {
      const { cardNo } = this;
      try {
        const { data } = await request.get(
          `checkSalaryDateList?card=${cardNo}`
        );
        if (data && data.result) {
          let dateList = [];
          data.data.forEach(item => {
            const currentIndex = dateList.findIndex(
              item1 => item1.date == item.date
            );
            if (currentIndex == -1) {
              dateList.push(item);
            }
          });
          const dateArr = dateList.map(item => item.date);
          this.slots = [
            {
              flex: 1,
              values: dateArr,
              className: "slot1",
              textAlign: "center"
            }
          ];
          this.date = dateArr[0];
          //    dateArr.forEach(item=>{
          //       const year =  item.split('-')[0]
          //       const month =  item.split('-')[1]
          //    })
        }
      } catch (error) {}
    },
    selectDate() {
      if (this.date) {
        this.popupVisible = true;
      } else {
      }
    },
    onValuesChange(picker, values) {
      // const month = parseFloat(values[1])<10?"0"+parseFloat(values[1]):parseFloat(values[1])
      // const date = values[0] + '-' + month
      // this.date = date;
      // this.year= values[0],
      // this.month = values[1]
      this.date = values[0];
    },
    async getCard() {
      const { wechatId } = this;
      try {
        const { data } = await request.get(`getCard?wechatId=${wechatId}`);
        if (data && data.result) {
          this.cardNo = data.data.card;
          this.getMonths();
        }
      } catch (error) {}
    },
    async getOpenId() {
      // const {query:{code}} = this.$route
      const { wechatId } = this;
      const code = getQueryString("code");
      if (!wechatId) {
        try {
          const { data } = await request.get(`getOpenId?code=${code}`);
          this.wechatId = data.openid;
          if (data.openid) {
            setCookie("wechatId", data.openid, 30);
            this.getCard();
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        this.getCard();
      }
    },
    query() {
      const { $router, date, cardNo } = this;
      if (!date) {
        return Toast("暂无数据");
      }
      $router.push(`/payroll_detail/${date}/${cardNo}`);
    },
    jumpTo(url){
      window.location.href=url;
    }
  }
};
</script>

<style scoped lang="less">
  @import url('./query.less');
</style>
