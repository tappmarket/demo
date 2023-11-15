<script setup>
import { useRouter } from 'vue-router';

defineOptions({
  name: 'PageFooter'
});

const router = useRouter();
function goHome() {
  router.push('/');
  backTop();
}
function backTop() {
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <!-- footer -->
  <footer class="footer">
    <div class="img-layout">
      <img
        src="@/assets/image/logo.png"
        alt="logo"
        loading="lazy"
        class="img-logo"
        @click="goHome"
      />
      <img
        src="@/assets/image/up.png"
        alt="back-top"
        loading="lazy"
        class="img-back-top"
        @click="backTop"
      />
    </div>
    <div class="open-time">

      <div class="footer-bottom">
        <div class="filings">Two Peck © 2009-2023 | All Rights Reserved</div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 3.73vw 8.8vw 1.6vw;
  background-color: #fff000;

  @include respond-to('phone') {
    padding: 7.47vw 8.8vw 3.2vw;
  }

  .img-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img-logo {
      height: 6.4vw;
      cursor: pointer;

      @include respond-to('phone') {
        height: 12.8vw;
      }
    }
    .img-back-top {
      width: 3.33vw;
      height: 3.33vw;
      cursor: pointer;

      @include respond-to('phone') {
        width: 6.67vw;
        height: 6.67vw;
      }
    }
  }

  .open-time {
    margin-top: 3.2vw;
    font-size: 1.07vw;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    line-height: 1.47vw;

    .title {
      font-size: 1.6vw;
      font-weight: 500;
      line-height: 2.13vw;
    }

    .open-time__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.6vw;
      margin-top: 0.8vw;
    }

    .footer-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 6.67vw;

      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        opacity: 0.5;
        background-color: #000;
      }

      .filings {
        margin-top: 0.8vw;
        text-align: center;
      }
    }

    @include respond-to('phone') {
      margin-top: 6.4vw;
      font-size: 3.2vw;
      .title {
        font-size: 3.73vw;
      }
      .open-time__inner {
        gap: 3.2vw;
        margin-top: 4vw;
      }
      .footer-bottom {
        margin-top: 8vw;
        .filings {
          margin-top: 3.2vw;
        }
      }
    }
  }
}
</style>
