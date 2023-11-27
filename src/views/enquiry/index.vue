<script setup>
import { shallowRef, defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { enquiryList } from '../home/data';

defineOptions({
  name: 'EnquiryPage'
});
// 回滚顶部
document.documentElement.scrollTop = 0;

// 获取组件
const currComponent = shallowRef();
const components = import.meta.glob('./components/*.vue');
const route = useRoute();
const componentName = route.meta.name;
Object.entries(components).find(([key, val]) => {
  if (key.toLowerCase().includes(componentName)) {
    currComponent.value = defineAsyncComponent(val);
  }
});

const getUrl = (img) => new URL(`../../assets/image/${img}`, import.meta.url).href;

const bannerList = ['franceise_banner.jpg', 'customer_banner.jpg', 'join_banner.jpg'].map((img) =>
  getUrl(img)
);
const currBanner = computed(() => bannerList.find((img) => img.includes(componentName)));
const enquiryDesc = computed(
  () => enquiryList.find((item) => item.to.includes(componentName)).desc
);

// 提交
function onSubmit(data) {
  console.log('submit => ', data);
}
</script>

<template>
  <div class="page-content">
    <!-- banner -->
    <img :src="currBanner" style="width: 100%" alt="banner" loading="lazy" />
    <img
      src="@/assets/image/triangle-arrow.png"
      class="down-arrow"
      alt="triangle-arrow"
      loading="lazy"
    />
    <!-- form -->
    <div class="form-layout">
      <div class="form-layout__inner">
        <div class="form-wrap">
          <div class="desc">{{ enquiryDesc }}</div>
          <component :is="currComponent" @submit="onSubmit"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  display: grid;
  background-color: #fff;

  .down-arrow {
    margin: 1.6vw auto;
    width: 4.53vw;
    height: 5.87vw;

    @include respond-to('phone') {
      margin: 3.2vw auto;
      width: 9.07vw;
      height: 11.73vw;
    }
  }

  .form-layout {
    padding: 0 8.53vw;
    margin-bottom: 7.73vw;

    .form-layout__inner {
      padding: 9.07vw;
      background: center / cover no-repeat url('@/assets/image/form-bg.png');

      .form-wrap {
        padding: 5.33vw 3.2vw;
        background: rgba(255, 240, 0, 1);
        border: 4px solid #000000;

        .desc {
          padding: 0 2.13vw;
          font-size: 3.07vw;
          font-family: ArialRoundedMTBold;
          line-height: 3.6vw;
          text-align: center;

          @include respond-to('phone') {
            font-size: 3.73vw;
            line-height: 4vw;
          }
        }
      }
    }
  }
}
</style>
