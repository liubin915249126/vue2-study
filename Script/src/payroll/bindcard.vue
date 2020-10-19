<template>
  <div class="bindContainer">
    <div class="bgImg">
      <img :src="bgImg" width="100%">
    </div>
    <div v-if="cardNo" class="bindWrap">
      <div class="icon-wrap">
        <i class="iconfont icon-shortcut-fill"></i>
      </div>
      <div class>身份证号:{{cardNo}}</div>
      <div class="cardTip tip">*请确保身份证号输入正确，解除绑定需联系您所在项目工资单负责人.</div>
      <!-- <div class="cardTip tip">备注：1、员工随时点击解绑，并不会和项目负责人电话联系并说明情况，降低了员工操作成本，增加了查询其他人薪资的概率。
        2、项目负责人并不会每天有空操作解绑申请，并且很难一一了解解绑需求的原因。导致两个后果：真的需要解绑的人迟迟等不到操作，项目负责人无法管控解绑申请。
      </div> -->
      <!-- <mt-button v-if="status==0" @click="deleteCard">申请解绑</mt-button> -->
      <!-- <mt-button v-else>解绑中</mt-button> -->
    </div>
    <div v-else class="bindWrap noBindWrap">
      <div class="icon-wrap">
        <i class="iconfont icon-shortcut-fill"></i>
      </div>
      <h4>身份证绑定</h4>
      <div class="actionWrap">
        <mt-field placeholder="请输入身份证号" v-model="cardNo1"></mt-field>
        <span class="tip">*请确保身份证号输入正确，解除绑定需联系您所在项目工资单负责人。</span>
        <mt-button type="primary" size="large" @click="bindCard">确定</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import request from ".././request.js";
import { getQueryString, setCookie, getCookie,checkIDCard } from ".././utils.js";
import { Toast } from "mint-ui";
import bgImg from "../assets/bg.jpeg";
export default {
  data() {
    return {
      cardNo: "",
      wechatId: getCookie("wechatId") || "",
      cardNo1: "",
      status: 0,
      bgImg
    };
  },
  created() {
    this.getCard();
  },
  methods: {
    async getCard() {
      const { wechatId } = this;
      try {
        const { data } = await request.get(`getCard?wechatId=${wechatId}`);
        if (data && data.result) {
          this.cardNo = data.data.card;
          this.status = data.data.status;
        }
      } catch (error) {}
    },
    async bindCard() {
      // const pattern = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X]|[x])$/;
      const { cardNo1, wechatId } = this;
      if (!cardNo1) {
        Toast("请输入身份证");
        return;
      }
      if(!checkIDCard(cardNo1+'')){
        Toast("请输入正确的身份证");
        return;
      }
      try {
        const { data, errorMsg } = await request.get(
          `bindCard?wechatId=${wechatId}&card=${cardNo1}`
        );
        if (data && data.result) {
          Toast("绑定身份证成功");
          this.getCard();
        } else {
          Toast(errorMsg);
        }
      } catch (error) {}
    },
    async deleteCard() {
      const { wechatId, cardNo } = this;
      try {
        const { data } = await request.get(
          `requestUnBind?wechatId=${wechatId}&card=${cardNo}`
        );

        if (data && data.result) {
          Toast("申请解绑成功");
          this.getCard();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  // async getCard() {
  //   const { wechatId } = this;
  //   try {
  //     const { data } = await request.get(`getCard?wechatId=${wechatId}`);
  //     if (data && data.result) {
  //       this.cardNo = data.data;
  //     }
  //   } catch (error) {}
  // },
};
</script>

<style scoped lang="less">
@fontColor: #fc6621;
.bindContainer {
  text-align: center;
  font-size: 27px;
  padding-top: 85px;
  .tip {
    font-size: 23px;
    color: #333;
  }
  .bgImg {
    position: absolute;
    left: 0;
    top: -50px;
    img {
      height: 316px;
    }
  }
  /deep/.mint-popup-bottom {
    width: 100%;
  }
  /deep/.picker-item {
    font-size: 27px;
  }
  /deep/.mint-button {
    font-size: 27px;
    height: auto;
    padding: 10px 30px;
    background: @fontColor;
  }
  /deep/.mint-button--default {
    color: #fff;
  }
  /deep/.mint-field-core {
    font-size: 23px;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 5px;
  }
  /deep/.mintui-field-error:before {
    font-size: 27px;
  }
  /deep/.mint-field-core {
    padding: 10px;
  }
  .bindWrap {
    position: relative;
    padding: 70px 0;
    width: 75%;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    .icon-wrap {
      position: absolute;
      top: 0;
      color: @fontColor;
      background: #fff;
      width: 100px;
      height: 100px;
      line-height: 100px;
      border-radius: 50%;
      top: 0;
      text-align: center;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      i {
        font-size: 50px;
      }
    }
    .cardTip {
      color: @fontColor;
      margin: 40px 0;
      padding: 0 20px;
      font-size: 14px;
      text-align: left;
    }
  }
  .noBindWrap {
    padding: 70px 50px;
    margin: 0 auto;
    /deep/.mint-cell-wrapper {
      padding: 0;
      margin: 0 0 20px 0;
    }
  }
  .confirmWrap {
    margin: 20px 20px -30px 0;
    position: relative;
    z-index: 1;
  }
  .actionWrap{
    .tip{
      color:#999;
      display: inline-block;
      margin-bottom: 10px;
    }
  }
}
</style>
