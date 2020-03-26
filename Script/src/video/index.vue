<template>
  <div class="header-wrap">
    <div class="usdt-airdrop-header" :style="{transform: onScroll ? 'none' : 'translate(0)' }">
      <div
        class="video-wrap"
        :class="videoVisible ? 'active' : ''"
        :style="{ position: videoAnimateStop ? 'relative' : 'fixed' }"
      >
        <video
          ontimeupdate
          id="video"
          autoplay="autoplay"
          loop
          muted="muted"
          controls="controls"
        >
          <source
            :src="`https://ugcws.video.gtimg.com/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/b3069r2cwxd.mp4?sdtfrom=v1010&guid=38de1bdd933b5eddf2643824d71b653c&vkey=68F29D5A36F932E4CB8DB19DACF069584D55273F9C67F7D047214FFCE0A8AE41CA72ADDF0BCA8D0B9F4B1EC8A2988823B54A893593B3AB2AAD63D5F41D22CB2C37394916D5D30BF5E8EDD5A2C756B78651FA5E9EF8DB60ED7665C095B593FCD9F43D09D6D77AEC02E820F366E7D950B8EC5BD960914FDD133699C25622A8EBDC&timeStr=${new Date().getTime()}`"
            type="video/mp4"
          />
        </video>
        <!-- <img src="../../static/images/usdt-airdrop/1920/banner-bg.jpg" v-if="!videoPlay" /> -->
        <div class="tranle-wrap" @click="tooglePlay(true,$event)" v-if="!videoPlay"></div>
        <span class="close-btn" @click="tooglePlay(false,$event);toggleVideo($event);"></span>
        <span class="toogleLarge" @click="toggleVideo">
          <!-- <img src="/images/usdt-airdrop/header/deLarge.svg" v-if="videoVisible" />
          <img :src="require('../../static/images/usdt-airdrop/header/enlarge.png')" v-else /> -->
        </span>
      </div>
      <div class="video-wrap" :class="videoAnimateStop ? 'hide' : ''"></div>
      <div class="title-wrap">
        <div class="title">{{i18n.title}}</div>
        <div class="sub-title" v-html="i18n.subTitle"></div>
        <!-- 预约结束之前且没预约才显示 -->
        <!-- 预约未开始灰置不可点击  -->
        <div
          class="pre-register-btn"
          @click="preRegeist"
          v-if="!appionted&&!isEnd"
          :class="isBegin?'':'disabled'"
        >
          <!-- 预约按钮 -->
          {{i18n["pre-regeist"]}}
        </div>
        <!-- 预约开始与结束之间且预约成功显示预约成功 -->
        <div
          v-if="isBegin&&appionted&&!isEnd"
          class="pre-register-success"
        >{{i18n["pre-regeist-success"]}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "usdt-airdrop-header",
  data() {
    return {
      videoVisible: false,
      videoPlay: true,
      videoAnimateStop: true,
      onScroll: false,
      visible: false,
      isBegin: false,
      appionted: false,
      isEnd: false,
      timer: null,
      shareObj: {
        "zh-CN": [
          {
            key: "weibo",
            icon: "icon-weibo",
            src: "/images/usdt-airdrop/header/weibo.svg",
            action: "shareWeiBo",
            shareUrl:
              "https://weibo.com/p/1006066593153880/home?from=page_100606&mod=TAB&is_all=1"
          }
        ],
        en: [
          {
            key: "twitter",
            icon: "icon-twitter",
            src: "/images/usdt-airdrop/header/twitter.svg",
            action: "shareTwitter",
            shareUrl: "https://twitter.com"
          },
          {
            key: "facebook",
            src: "/images/usdt-airdrop/header/facebook.svg",
            icon: "icon-facebook",
            action: "shareFB",
            shareUrl: "https://www.facebook.com/"
          },
          {
            key: "reddit",
            icon: "../../static/images/svg/reddit.svg",
            src: "/images/usdt-airdrop/header/reddit.svg",
            action: "commonShare",
            shareUrl: "https://www.reddit.com/"
          },
          {
            key: "telegram",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/telegram.svg",
            action: "commonShare",
            shareUrl: "https://telegram.me"
          }
        ],
        "zh-TW": [
          {
            key: "weibo",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/weibo.svg",
            action: "shareWeiBo",
            shareUrl:
              "https://weibo.com/p/1006066593153880/home?from=page_100606&mod=TAB&is_all=1"
          }
        ],
        "ru-RU": [
          {
            key: "vk",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/vk.svg",
            action: "commonShare",
            shareUrl: "https://vk.com/bybit"
          },
          {
            key: "t",
            icon: "../../static/images/svg/weibo.svg",
            action: "commonShare",
            src: "/images/usdt-airdrop/header/telegram.svg",
            shareUrl: "https://t.me/bybit_info"
          },
          {
            key: "twitter",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/twitter.svg",
            action: "shareTwitter",
            shareUrl: "https://twitter.com/BybitRussia"
          },
          {
            key: "facebook",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/facebook.svg",
            action: "shareFB",
            shareUrl: "https://www.facebook.com/BybitRussia/"
          },
          {
            key: "instagram",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/instagram.jpg",
            action: "commonShare",
            shareUrl: "https://www.instagram.com/bybit_russia/"
          }
        ],
        "ko-KR": [
          {
            key: "coinpan",
            icon: "../../static/images/svg/coinpan.png",
            src: "/images/usdt-airdrop/header/coinpan.png",
            action: "commonShare",
            shareUrl: "https://coinpan.com/free"
          },
          {
            key: "moneynet",
            icon: "../../static/images/svg/moneynet.png",
            src: "/images/usdt-airdrop/header/moneynet.png",
            action: "commonShare",
            shareUrl: "https://www.moneynet.co.kr/free_board"
          },
          {
            key: "cobak",
            icon: "../../static/images/svg/cobak.png",
            action: "commonShare",
            src: "/images/usdt-airdrop/header/cobak.png",
            shareUrl: "https://cobak.co.kr/community/all"
          },
          {
            key: "ddengle",
            icon: "../../static/images/svg/ddengle.png",
            src: "/images/usdt-airdrop/header/ddengle.png",
            action: "commonShare",
            shareUrl: "https://www.ddengle.com/board_free"
          },
          {
            key: "cafe",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/cafe.png",
            action: "commonShare",
            shareUrl:
              "https://cafe.naver.com/nexontv?iframe_url=/ArticleList.nhn%3Fsearch.clubid=24978815%26search.menuid=332%26search.boardtype=L"
          }
        ],
        "ja-JP": [
          {
            key: "twitter",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/twitter.svg",
            action: "shareTwitter",
            shareUrl: "https://twitter.com"
          },
          {
            key: "t",
            icon: "../../static/images/svg/weibo.svg",
            src: "/images/usdt-airdrop/header/telegram.svg",
            action: "commonShare",
            shareUrl: "https://t.me/BybitJP"
          }
        ]
      }
    };
  },
  components: {
    // bybitDialog
    // weiboSvg,
  },
  mounted() {
    // console.log(111, weiboSvg);
    document.body.onscroll = () => {
      if (!this.onScroll && this.videoVisible) {
        this.onScroll = true;
      }
    };
    const $video = document.querySelector("#video");
    $video.addEventListener("canplay", () => {
      console.log(111);
      $video.play();
    });
    this.counter();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  computed: {
    i18n() {
      return this.resource.header || {};
    },
    lang() {
      return this.$route.params.lang || "en";
    },
    popup() {
      return this.resource.popup || {};
    },
    copyText() {
      const { share, shareUrl } = this.popup;
      return `${share} ${shareUrl}`;
    }
  },
  methods: {
    counter() {
      const dateScens = new Date().getTime();
      let interval = 500;
      this.timer = setInterval(() => {
        const dateScens1 = new Date().getTime();
        // 越接近循环判断的频率越大
        interval = parseInt((dateScens + 4001 - dateScens1) / 50, 10) || 4;
        if (dayjs(dateScens1).isAfter(dateScens + 1000)) {
          // 活动开始
          this.isBegin = true;
        }
        if (dayjs(dateScens1).isAfter(dateScens + 4000)) {
          // 活动结束
          this.isBegin = true;
          this.isEnd = true;
          clearInterval(this.timer);
        }
      }, interval);
    },
    tooglePlay(flag, e) {
      this.videoPlay = flag;
      const $video = document.querySelector("#video");
      if (flag) {
        $video.play();
      } else {
        $video.pause();
      }
      if (e && e.stopPropagation) e.stopPropagation();
    },
    toggleVideo(e) {
      this.videoVisible = !this.videoVisible;
      // 动画关闭延迟至动画结束执行
      if (!this.videoVisible) {
        setTimeout(() => {
          this.videoAnimateStop = true;
        }, 500);
        this.onScroll = false;
      } else {
        this.videoAnimateStop = false;
      }
      if (e && e.stopPropagation) e.stopPropagation();
    },
    async preRegeist() {
      if (this.isBegin) {
        try {
          const res = await api.airdropAppoint();
          console.log(res);
        } catch (error) {
          console.log(error);
        }
        this.visible = true;
      }
    },
    shareFun(action, shareUrl, index) {
      this[action](shareUrl, index);
    },
    shareWeiBo() {
      const { share, shareUrl: sharedUrl } = this.popup;
      const sharesinastring = `http://v.t.sina.com.cn/share/share.php?title=${encodeURIComponent(
        `${share} ${sharedUrl}`
      )}&url=${encodeURIComponent(
        sharedUrl
      )}&content=utf-8&sourceUrl=${encodeURIComponent(
        sharedUrl
      )}&pic=${"picurl"}`;
      window.open(
        sharesinastring,
        "newwindow",
        "height=400,width=400,top=100,left=100"
      );
    },
    shareTwitter() {
      const { share, shareUrl: sharedUrl } = this.popup;
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${share} ${sharedUrl}`
        )}`
      );
    },
    shareFB() {
      const { shareUrl: sharedUrl } = this.popup;
      window.open(
        `https://www.facebook.com/sharer.php?u=${encodeURIComponent(sharedUrl)}`
      );
    },
    commonShare(shareUrl, index) {
      if (shareUrl) {
        const node = [...document.querySelectorAll(".copyBtn")][index];
        const clipboard = new ClipboardJS(node);
        clipboard.on("success", () => {
          clipboard.destroy();
          window.open(shareUrl);
          // e.clearSelection();
        });
      }
    }
  }
};
</script>

<style>
.header-wrap {
  position: relative;
  z-index: 3;
}
.usdt-airdrop-header {
  display: flex;
  padding: 50px 0 200px;
  transform: translate(0);
  color: #fff;
}
.usdt-airdrop-header .title {
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
}
.usdt-airdrop-header .sub-title {
  margin: 15px 0 20px 0;
}
.usdt-airdrop-header .title-wrap {
  padding: 20px 0 0 0;
}
.usdt-airdrop-header .title-wrap .tip {
  color: var(--brand-color);
  font-size: 16px;
  padding: 0 5px;
}
.usdt-airdrop-header .title-wrap .pre-register-btn {
  background-color: var(--brand-color);
  color: #101014;
  transition: border-color 0.15s ease-in, color 0.15s ease-in;
  will-change: border-color, color;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  border-radius: 18px;
  padding: 0 32px;
  font-size: 16px;
  text-align: center;
  font-family: DinPro;
  font-weight: bold;
  cursor: pointer;
}
/* 预约按钮disabled */
.usdt-airdrop-header .title-wrap .pre-register-btn.disabled {
  background: var(--brand-bg-disable-color);
  cursor: not-allowed;
}
.usdt-airdrop-header .title-wrap .pre-register-success {
  font-size: 16px;
  color: var(--brand-color);
}
.video-wrap {
  width: 400px;
  min-width: 400px;
  height: 200px;
  left: 0;
  /* top: 0; */
  margin-top: 0;
  margin-right: 50px;
  transition: all 0.5s ease-in-out;
}
.video-wrap video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  background: #000;
}
.video-wrap > img {
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
}
.video-wrap.active {
  left: 50%;
  /* top: 50%; */
  height: 300px;
  transform: translate(-50%, 75px);
  width: 600px;
  transform-origin: 0 0;
  z-index: 3;
}
.video-wrap.hide {
  display: none;
}
.video-wrap .tranle-wrap {
  cursor: pointer;
  width: 64px;
  height: 48px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 7px;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.4);
}
/* 三角形 */
.video-wrap .tranle-wrap::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 14px solid transparent;
  border-left: 28px solid #000;
  border-bottom: 14px solid transparent;
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-in-out;
}
.video-wrap.active .tranle-wrap {
  transform: translate(-50%, -50%) scale(1.3);
}
.video-wrap.active .close-btn {
  background-image: url(~assets/images/cross.png);
  background-repeat: no-repeat;
  background-size: 10px 10px;
  cursor: pointer;
  height: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 10px;
}
.video-wrap .toogleLarge {
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 17px;
  height: 17px;
}
.video-wrap .toogleLarge > img {
  width: 100%;
  /* height: 20px; */
}
.pre-register-dialog {
  text-align: center;
}
.pre-register-dialog .title {
  font-size: 20px;
  font-family: DINPro-Bold, DINPro;
  font-weight: bold;
  color: rgba(31, 35, 50, 1);
  line-height: 26px;
  margin-top: 20px;
}
.pre-register-dialog .copy-target {
  width: 75%;
  padding: 15px;
  border-radius: 4px;
  margin: 10px auto 20px;
  border: 1px solid rgba(233, 233, 233, 1);
}
.pre-register-dialog .copy-tip {
  margin: 20px 0 10px;
  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 177, 26, 1);
}
.pre-register-dialog .copyBtn {
  cursor: pointer;
}
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .usdt-airdrop-header {
    padding: 50px 0 200px;
  }
}

@media screen and (max-width: 768px) {
  .video-wrap {
    display: none;
  }
  .usdt-airdrop-header {
    padding: 50px 0 80px;
  }
}
</style>
