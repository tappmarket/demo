<script setup>
import { ref, computed } from 'vue';
import { ElImage } from 'element-plus';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  productList,
  storeImgs,
  aboutLeftParagraphs,
  aboutRightParagraphs,
  enquiryList,
  stateList,
  addrList
} from './data';

defineOptions({
  name: 'HomePage'
});

const swiperActiveIndex = ref(0);
function onSlideChange(swiper) {
  swiperActiveIndex.value = swiper.activeIndex;
}
const previewImg = ref('');
// 产品图片预览
const previewList = computed(() =>
  productList[swiperActiveIndex.value].flat().map((item) => item.img)
);
const previewIndex = computed(() => {
  const index = previewList.value.findIndex((item) => item === previewImg.value);
  return index === -1 ? 0 : index;
});
function onPreview(img) {
  previewImg.value = img;
}

// 州索引
const stateIndex = ref(0);
</script>

<template>
  <div class="page-content">
    <div class="img-banner"></div>

    <!-- products -->
    <div id="products" class="products">
      <div class="title">
        <img src="@/assets/image/producs-title.png" alt="producs-title.png" loading="lazy" />
      </div>
      <!-- <div class="swiper"> -->
      <swiper :modules="[Navigation]" navigation auto-height @slide-change="onSlideChange">
        <swiper-slide class="swiper-slide" v-for="(list, index) in productList" :key="index">
          <div class="product-list__wrap">
            <ul class="product-list">
              <li class="item" v-for="product in list[0]" :key="product.alt">
                <el-image
                  preview-teleported
                  hide-on-click-modal
                  loading="lazy"
                  :src="product.img"
                  :alt="product.alt"
                  :initial-index="previewIndex"
                  :preview-src-list="previewList"
                  @show="onPreview(product.img)"
                ></el-image>
                <div class="img-txt">{{ product.txt }}</div>
              </li>
            </ul>
            <ul class="product-list2" v-if="list[1].length > 0">
              <li class="item" v-for="product in list[1]" :key="product.alt">
                <el-image
                  preview-teleported
                  hide-on-click-modal
                  loading="lazy"
                  :src="product.img"
                  :alt="product.alt"
                  :initial-index="previewIndex"
                  :preview-src-list="previewList"
                  @show="onPreview(product.img)"
                ></el-image>
                <div class="img-txt">{{ product.txt }}</div>
              </li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- about us -->
    <div class="about">
      <div class="title">
        <img src="@/assets/image/about-title.png" alt="about-title.png" loading="lazy" />
      </div>
      <div class="about__inner">
        <div class="about-bg">
          <img src="../../assets/image/img2.jpg" alt="about-bg" loading="lazy" />
        </div>
        <div class="paragraph-layout">
          <div class="left">
            <span class="title">Brand Introduction</span>
            <ul class="paragraph">
              <li v-for="(p, index) in aboutLeftParagraphs" :key="index">{{ p }}</li>
            </ul>
          </div>
          <div class="right">
            <span class="title">Secrets of Delicious</span>
            <ul class="paragraph">
              <li v-for="(p, index) in aboutRightParagraphs" :key="index">{{ p }}</li>
            </ul>
          </div>
        </div>
        <ul class="img__wrap">
          <li class="img"></li>
          <li class="img"></li>
          <li class="img"></li>
        </ul>
      </div>
    </div>

    <!-- stores -->
    <div id="stores" class="stores">
      <div class="title">
        <img src="@/assets/image/stores-title.png" alt="stores-title.png" loading="lazy" />
      </div>
      <div class="store__wrap">
        <div class="store-img">
          <ul class="store-img__inner">
            <li class="item" v-for="item in storeImgs" :key="item.alt">
              <img :src="item.img" :alt="item.alt" loading="lazy" />
            </li>
          </ul>
        </div>
        <div class="state-layout">
          <div class="state-left">
            <div class="state-left__wrap">
              <div class="state-left__inner">
                <div class="state">STATE</div>
                <ul class="list">
                  <li v-for="(state, index) in stateList" :key="state" @click="stateIndex = index">
                    <span>{{ state }}</span>
                    <i v-if="stateIndex === index" class="right-arrow"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="state-right">
            <ul>
              <li v-for="item in addrList[stateIndex]" :key="item.addr">
                <a class="right-addr" :href="item.link">{{ item.addr }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- enquiry -->
    <div id="enquiry">
      <div class="enquiry-top-bg">
        <div class="enquiry-title"></div>
      </div>
      <div class="enquiry-list">
        <ul class="enquiry-list__inner">
          <li class="item" v-for="item in enquiryList" :key="item.title">
            <div class="item-left">
              <div class="txt">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-sub-title">{{ item.subTitle }}</div>
                <div class="item-desc">{{ item.desc }}</div>
              </div>
              <router-link :to="item.to" custom v-slot="{ navigate }">
                <button type="button" class="btn-enquiey" @click="navigate">Enquiey</button>
              </router-link>
            </div>
            <div class="item-right">
              <img :src="item.img" :alt="item.alt" loading="lazy" />
            </div>
          </li>
        </ul>
      </div>
      <div class="enquiry-bottom-bg"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  background-color: rgba(255, 250, 177, 0.16);

  .img-banner {
    height: 53.73vw;
    background: center / 102% no-repeat url('@/assets/image/banner.jpg');
  }

  .products {
    background: top center / 101% no-repeat url('@/assets/image/bg.png');
    padding-top: 13.33vw;
    padding-bottom: 10.4vw;

    .title {
      text-align: center;
      margin-bottom: 6.6667vw;

      img {
        width: 26.67vw;

        @include respond-to('phone') {
          width: 37.33vw;
        }
      }
    }

    .swiper {
      width: 100%;

      :deep(.swiper-button-prev.swiper-button-disabled),
      :deep(.swiper-button-next.swiper-button-disabled) {
        opacity: 0;
      }

      @include respond-to('phone') {
        --swiper-navigation-size: 6.67vw;
      }
    }

    .product-list__wrap {
      width: calc(100% - 8.8vw * 2);
      padding: 1.6vw;
      background-color: #fff;
      margin: 0 auto;
    }

    .product-list,
    .product-list2 {
      display: grid;
      grid-template-areas:
        'img1 img1 img4 img4 img4'
        'img1 img1 img4 img4 img4'
        'img2 img2 img4 img4 img4'
        'img2 img2 img5 img5 img5'
        'img3 img3 img5 img5 img5'
        'img3 img3 img5 img5 img5';
      grid-template-rows: repeat(6, 8.8vw);
      gap: 1.6vw;

      .item {
        overflow: hidden;
        position: relative;
        display: flex;

        &::-webkit-scrollbar {
          display: none;
        }

        :deep(.el-image) {
          width: 100%;
          transition: transform 0.5s;
          cursor: pointer;
        }
        &:hover {
          :deep(.el-image) {
            transform: scale(1.15);
          }
        }
        &:nth-of-type(1) {
          grid-area: img1;
        }
        &:nth-of-type(2) {
          grid-area: img2;
        }
        &:nth-of-type(3) {
          grid-area: img3;
        }
        &:nth-of-type(4) {
          grid-area: img4;
        }
        &:nth-of-type(5) {
          grid-area: img5;
        }
        &:nth-of-type(6) {
          grid-area: img6;
        }
        &:nth-of-type(7) {
          grid-area: img7;
        }
        &:nth-of-type(8) {
          grid-area: img8;
        }
        &:nth-of-type(9) {
          grid-area: img9;
        }
        &:nth-of-type(10) {
          grid-area: img10;
        }

        .img-txt {
          position: absolute;
          bottom: 0;
          display: flex;
          align-items: flex-end;
          width: 100%;
          height: 7.73vw;
          padding: 0 1.6vw 1.6vw;
          font-size: 1.87vw;
          font-family: ArialRoundedMTBold;
          color: #ffffff;
          background: linear-gradient(
            to bottom,
            rgba(33, 33, 33, 0) 0%,
            rgba(56, 56, 56, 0.75) 100%
          );
        }
      }
    }

    .product-list2 {
      grid-template-areas:
        'img1 img1 img3 img3 img4 img4'
        'img1 img1 img3 img3 img4 img4'
        'img1 img1 img5 img5 img5 img5'
        'img1 img1 img5 img5 img5 img5'
        'img2 img2 img5 img5 img5 img5'
        'img2 img2 img5 img5 img5 img5';
      margin-top: 1.6vw;
    }
  }

  .about {
    padding: 0 8.8vw;
    margin-top: 12vw;
    margin-bottom: 24vw;

    .title {
      text-align: center;
      margin-bottom: 6.6667vw;

      img {
        width: 26.67vw;

        @include respond-to('phone') {
          width: 37.33vw;
        }
      }
    }

    .about__inner {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      font-family: ArialRoundedMTBold;

      .about-bg {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;

        img {
          width: calc(100% - 11.73vw);
        }
      }

      .paragraph-layout {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 1;

        .left,
        .right {
          position: absolute;
          width: 33.33vw;
          background: #fff000;
          border: 0.4vw solid #000000;
          padding: 3.2vw 2.43vw 2.13vw 2.13vw;

          .title {
            font-family: Krungthep;
            font-size: 2.4vw;
            line-height: 3.6vw;

            @include respond-to('phone') {
              font-size: 3.2vw;
            }
          }
          .paragraph {
            overflow-x: hidden;
            overflow-y: scroll;
            -moz-appearance: none;
            scrollbar-width: none;
            display: flex;
            flex-direction: column;
            max-height: 40vw;
            row-gap: 1.6vw;
            margin-top: 1.87vw;
            font-size: 1.6vw;
            line-height: 2.13vw;

            &::-webkit-scrollbar {
              display: none;
            }

            @include respond-to('phone') {
              font-size: 2.67vw;
              line-height: 2.67vw;
              -moz-appearance: unset;
              scrollbar-width: unset;
            }
          }
        }

        .left {
          top: 0;
          left: 0;
          transform: translateY(13.33vw);

          @include respond-to('phone') {
            transform: translateY(13.33vw);
          }
        }
        .right {
          bottom: 0;
          right: 0;
          transform: translateY(11.73vw);
        }
      }

      .img__wrap {
        position: absolute;
        bottom: 0;
        left: 5.6vw;
        display: flex;
        column-gap: 4.27vw;
        transform: translateY(8.53vw);

        .img {
          width: 5.6vw;
          height: 5.6vw;
          background: center / contain no-repeat url('@/assets/image/leg.jpg');
        }
      }
    }
  }

  .stores {
    padding-top: 6.67vw;
    background-color: rgba(255, 255, 243, 1);

    .title {
      text-align: center;
      margin-bottom: 6.6667vw;

      img {
        width: 26.67vw;

        @include respond-to('phone') {
          width: 37.33vw;
        }
      }
    }

    .store__wrap {
      position: relative;
      margin-top: 24vw;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: center no-repeat url('@/assets/image/bg2.jpg');
        background-size: cover;
        z-index: -1;
      }

      .store-img {
        transform: translateY(-16vw);
        .store-img__inner {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 8.8vw;
        }

        .item {
          width: 24.53vw;
          height: 24.53vw;

          img {
            width: 100%;
          }
        }
      }

      .state-layout {
        display: flex;
        align-items: center;
        width: 100%;
        transform: translateY(-8vw);

        @include respond-to('phone') {
          flex-direction: column;
          align-items: flex-start;
        }

        .state-left {
          flex: 1;
          perspective: 1000px;

          @include respond-to('phone') {
            width: 100%;
          }

          .state-left__wrap {
            background: #fff000;
            border: 0.4vw solid #000000;
            border-left: none;
            transform-origin: center left;
            transform: rotateY(16deg);
            perspective: 1000px;

            @include respond-to('phone') {
              width: 100%;
            }

            .state-left__inner {
              width: 100%;
              padding: 3.2vw 4.27vw 3.2vw 8.8vw;
              transform-origin: center left;
              transform: rotateY(-16deg);

              @include respond-to('phone') {
                padding-right: 4.8vw;
              }

              .state {
                font-size: 3.07vw;
                font-family: Krungthep;
                line-height: 4vw;
                -webkit-text-stroke: 0 #000000;

                @include respond-to('phone') {
                  font-size: 4vw;
                }
              }
              .list {
                display: grid;
                row-gap: 1.6vw;
                margin-top: 1.6vw;
                margin-bottom: 1.6vw;
                font-size: 1.87vw;
                font-family: ArialRoundedMTBold;
                line-height: 2.13vw;

                @include respond-to('phone') {
                  font-size: 3.2vw;
                  margin-top: 3.2vw;
                  line-height: 4.27vw;
                }

                & li {
                  display: flex;
                  align-items: center;
                  column-gap: 1.07vw;
                  cursor: pointer;

                  @include respond-to('phone') {
                    column-gap: 2.13vw;
                  }

                  &::before {
                    content: '';
                    display: block;
                    width: 0.8vw;
                    height: 0.8vw;
                    transform: translateY(-0.13vw);
                    border-radius: 50%;
                    background-color: #7ccac9;

                    @include respond-to('phone') {
                      width: 1.6vw;
                      height: 1.6vw;
                    }
                  }

                  .right-arrow {
                    width: 2.13vw;
                    height: 2.13vw;
                    background: center / cover no-repeat url('@/assets/image/right-arrow.png');
                    margin-left: auto;

                    @include respond-to('phone') {
                      width: 4.27vw;
                      height: 4.27vw;
                    }
                  }
                }
              }
            }
          }
        }

        .state-right {
          flex: 1;
          margin-left: 4vw;

          @include respond-to('phone') {
            width: calc(100% - 7.6vw);
            margin-left: 7.6vw;
            margin-top: 3.2vw;
          }

          & ul {
            display: grid;
            row-gap: 1.6vw;
            width: 38vw;

            @include respond-to('phone') {
              width: calc(100% - 8.8vw);
              row-gap: 2.4vw;
            }

            .right-addr {
              display: flex;
              column-gap: 1.07vw;
              font-size: 1.6vw;
              font-family: ArialRoundedMTBold;
              line-height: 1.87vw;

              &:hover {
                color: #fff000;
              }

              @include respond-to('phone') {
                line-height: 3.73vw;
                column-gap: 2.13vw;
                font-size: 3.2vw;
              }

              &::before {
                content: '';
                display: flex;
                width: 1.6vw;
                height: 1.6vw;
                background: center / cover no-repeat url('@/assets/image/location.png');

                @include respond-to('phone') {
                  width: 3.2vw;
                  height: 3.2vw;
                }
              }
            }
          }
        }
      }
    }
  }

  .enquiry-list {
    padding: 0 8.8vw;
    margin-top: -6.67vw;

    @include respond-to('phone') {
      margin-top: -5.4vw;
    }

    .enquiry-list__inner {
      display: flex;
      flex-direction: column;
      row-gap: 3.2vw;

      .item {
        overflow-x: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3.2vw;
        background-color: #fff;
        box-shadow: 0 0.53vw 1.07vw 0 rgba(38, 37, 21, 0.08);
        border-radius: 0.4vw;

        .item-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          row-gap: 1.6vw;

          .txt {
            display: grid;
            font-size: 2.67vw;
            font-family: Krungthep;

            @include respond-to('phone') {
              font-size: 3.73vw;
            }

            .item-title {
              line-height: 2.13vw;
              // white-space: nowrap;

              @include respond-to('phone') {
                line-height: 3.73vw;
              }
            }
            .item-sub-title {
              font-weight: 600;
              color: #ffcc00;
              line-height: 2.13vw;
              margin-top: 2.13vw;

              @include respond-to('phone') {
                line-height: 3.73vw;
              }
            }
            .item-desc {
              font-family: ArialRoundedMTBold;
              font-size: 1.6vw;
              line-height: 1.73vw;
              margin-top: 2.13vw;

              @include respond-to('phone') {
                line-height: 3.47vw;
                font-size: 3.2vw;
              }
            }
          }

          .btn-enquiey {
            height: 4.67vw;
            background: #fff000;
            border-radius: 2px;
            font-size: 1.6vw;
            font-family: Krungthep;
            font-weight: 500;
            line-height: 2vw;
            cursor: pointer;

            @include respond-to('phone') {
              height: 7.4vw;
              font-size: 3.2vw;
              line-height: 4vw;
            }
          }
        }
        .item-right {
          width: 28vw;
          height: 22.93vw;
          margin-left: 2.13vw;

          img {
            width: 100%;
          }
        }
      }
    }
  }
  .enquiry-top-bg {
    width: 100%;
    height: 0;
    border-left: 20vw solid transparent;
    border-right: 20vw solid transparent;
    border-top: 13.33vw solid rgba(124, 202, 201, 1);

    .enquiry-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -11.73vw;
      font-size: 3.2vw;
      font-family: Copperplate;
      line-height: 3.2vw;
      -webkit-text-stroke: 0 #000000;

      @include respond-to('phone') {
        font-size: 4.8vw;
        line-height: 4.8vw;
      }
    }
  }
  .enquiry-bottom-bg {
    width: 100%;
    height: 0;
    border-left: 20vw solid transparent;
    border-right: 20vw solid transparent;
    border-bottom: 13.33vw solid rgba(124, 202, 201, 1);
    margin-top: -8.4vw;
  }
}
</style>
