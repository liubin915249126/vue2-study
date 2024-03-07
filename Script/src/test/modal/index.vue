<template>
  <div
    class="modal"
    v-if="show"
    :style="{ width: width + 'px', height: height + 'px' }"
    v-outClick="(show = false)"
  >
    <div class="mask"></div>
    <div class="content">
      <div class="title">
        <template slot="title"></template>
      </div>
      <div class="content">
        <template slot="content"></template>
      </div>
      <div class="footer">
        <button class="cancel" @click="cancel">
          <template slot="calcel"></template>
        </button>
        <button class="confirm" @click="confirm">
          <template slot="confirm"></template>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
        },
        'on-confirm': {
            type: function,
            default: ()=>{},
        },
        'on-cancel': {
            type: function,
            default: ()=>{},
        },
        height: {
            type: number,
            default: 400
        },
        width: {
            type: number,
            default: 600
        }
    },
    mounted ()
    {
        document.onkeydown=onkeydown
    },
    methods: {
        cancel (){
            ....
            this.$emit('on-cancel', '111')
        }
        onkeydown(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if(e && e.keyCode==27){ // 按 Esc
                this.show =false
              }
        };
    }
}
</script>
<style scoped lang="scss">
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
  }
}
</style>
