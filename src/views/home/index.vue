<script setup>
import { ref, computed } from 'vue';
import { ElImage } from 'element-plus';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

defineOptions({
  name: 'HomePage'
});

// 产品图片
let productList = [
  'PlumSweetPotatoFries.jpg',
  'CrispyCalamari.jpg',
  'FriedKingOysterMushroom.jpg',
  'CrispyChickenNuggets.jpg',
  'GoldenThreadRollwithCondensedMilk.jpg'
];
let productList2 = [
  'CrispyBonelessCutlet.jpg',
  'FriedOreoCookies.jpg',
  'FriedGreenBean.jpg',
  'FriedChickenSoftBone.jpg',
  'SignatureCrispyChickenCutlet.jpg'
];
productList = formatData(productList);
productList2 = formatData(productList2);

const previewImg = ref('');
// 产品图片预览
const previewList = [...productList, ...productList2].map((item) => item.img);
const previewIndex = computed(() => {
  const index = previewList.findIndex((item) => item === previewImg.value);
  return index === -1 ? 0 : index;
});
function onPreview(img) {
  previewImg.value = img;
}

// 商店图片
let storeImgs = ['store1.png', 'store2.png', 'store3.png'];
storeImgs = formatData(storeImgs);

// enquiry 列表
let enquiryList = [
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Franchise Employee Helpline',
    desc: `If you have any questions or concerns regarding employment or wage payment practices at a Two Peck Crispy Chicken store`,
    img: 'img1.jpg',
    to: '/enquiry/franceise'
  },
  {
    title: 'Customer',
    subTitle: 'Service Helpline',
    desc: `If you have any questions or concerns regarding Two Peck Crispy Chicken (Australia) Franchise Store's products and`,
    img: 'img4.jpg',
    to: '/enquiry/customer'
  },
  {
    title: 'Join The Two Peck Crispy',
    subTitle: 'Chicken (Australia) Family',
    desc: `If you have any questions about join the Two Peck Crispy Chicken store`,
    img: 'img3.jpg',
    to: '/enquiry/join'
  }
];
enquiryList = formatData(enquiryList);

function formatData(list) {
  return list.map((item) => {
    let _item = {};
    if (typeof item === 'string') {
      _item = { img: item };
    } else {
      _item = { ...item };
    }
    return {
      ..._item,
      img: new URL(`../../assets/image/${_item.img}`, import.meta.url).href,
      alt: _item.img
    };
  });
}

// 州索引
const stateIndex = ref(0);
// 州列表
const stateList = [
  'NSW',
  'South Australia',
  'Western Australia',
  'Victoria',
  'Queensland',
  'Tasmania'
];
// 所在州的门店的地址列表 (与州列表对应)
const addrList = [
  /* NSW */
  [
    'Shop 45/1 Dixon St, Sydney NSW 2000',
    '22 Tung Hop St, Waterloo NSW 2017',
    '2/59 John St, Cabramatta NSW 2166',
    'Ground Floor, 71 Burwood Rd, Burwood NSW 2134',
    'Shop 3B/7 Magdalene Terrace, Wolli Greek NSW 2205'
  ],
  /* South Australia */
  [],
  /* Western Australia */
  [],
  /* Victoria */
  [],
  /* Queensland */
  [],
  /* Tasmania */
  []
];
</script>

<template>
  <div class="page-content">
    <div class="img-banner"></div>

    <!-- products -->
    <div id="products" class="products">
      <div class="title">PRODUCTS</div>
      <!-- <div class="swiper"> -->
      <swiper :modules="[Navigation]" navigation>
        <swiper-slide class="swiper-slide" v-for="item in 2" :key="item">
          <div class="product-list__wrap">
            <ul class="product-list">
              <li class="item" v-for="product in productList" :key="product.alt">
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
              </li>
            </ul>
            <ul class="product-list2">
              <li class="item" v-for="product in productList2" :key="product.alt">
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
              </li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- about us -->
    <div class="about">
      <div class="title">ABOUT US</div>
      <div class="about__inner">
        <div class="left">
          <span class="title">Brand Introduction</span>
          <ul class="paragraph">
            <li>
              The Two Peck Crispy Chicken started form SiPing St, Taipei City in 2005, famous in its
            </li>
            <li>
              crispy outside and juicy inside. To deliver the same original crispy chicken, Two Peck
            </li>
            <li>Crispy Chicken adopts an integrated standard operating procedure from raw</li>
            <li>
              materials to final products so that every piece of food ends up as a delicious dainty
            </li>
            <li>for our customers.</li>
          </ul>
        </div>
        <div class="right">
          <span class="title">Secrets of Delicious</span>
          <ul class="paragraph">
            <li>• Carefully select fresh chicken products, specially prepared marinating</li>
            <li>products to make sure the chicken products are very well marinated</li>
            <li>
              • Carefully select high-quality frying oil to ensure the food quality and present
            </li>
            <li>the Crispy Chicken a beautiful golden yellow.</li>
            <li>• Brand Specially prepared Crispy Frying Powder to seal the chicken juice,</li>
            <li>which is the secret of crispy skin and juicy meat.</li>
            <li>• Always freshly made upon ordering, no pre-frying.</li>
          </ul>
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
      <div class="title">STORES</div>
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
              <li v-for="addr in addrList[stateIndex]" :key="addr">{{ addr }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- enquiry -->
    <div id="enquiry">
      <div class="enquiry-top-bg">
        <div class="enquiry-title">Enquiry</div>
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
      font-size: 5.3333vw;
      font-family: Copperplate;
      line-height: 5.3333vw;
      -webkit-text-stroke: 0 #000000;
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
        'img3 img3 img5 img5 img5'
        '. . . . .';
      grid-template-rows: repeat(6, 8.8vw);
      gap: 1.6vw;

      .item {
        overflow: hidden;
        display: flex;

        &::-webkit-scrollbar {
          display: none;
        }

        :deep(.el-image) {
          width: 100%;
          transition: transform 0.5s;
          cursor: pointer;

          &:hover {
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
    }
  }

  .about {
    padding: 0 8.8vw 13.33vw;
    margin-top: 12vw;

    .title {
      text-align: center;
      margin-bottom: 6.13vw;
      font-size: 5.33vw;
      font-family: Copperplate;
      line-height: 5.33vw;
      -webkit-text-stroke: 0 #000000;
    }

    .about__inner {
      position: relative;
      padding: 0 8.53vw;
      width: calc(100% - 8.53vw);
      height: 96vw;
      margin: 0 auto;
      background: center / contain no-repeat url('@/assets/image/img2.jpg');
      font-family: ArialRoundedMTBold;

      .left,
      .right {
        position: absolute;
        background: #fff000;
        border: 0.4vw solid #000000;
        padding: 3.2vw 2.43vw 2.13vw 2.13vw;
        z-index: 1;

        .title {
          font-size: 2.4vw;
          line-height: 3.6vw;

          @include respond-to('phone') {
            font-size: 3.2vw;
          }
        }
        .paragraph {
          display: flex;
          flex-direction: column;
          row-gap: 1.6vw;
          margin-top: 1.87vw;
          font-size: 1.6vw;
          line-height: 2.13vw;

          @include respond-to('phone') {
            font-size: 2.67vw;
            line-height: 2.67vw;
          }
        }
      }

      .left {
        top: 0;
        left: 0;
        width: 35.33vw;
        margin-left: -5.8vw;
        transform: translateY(21.3vw);

        @include respond-to('phone') {
          transform: translateY(13.33vw);
        }
      }
      .right {
        bottom: 0;
        right: 0;
        width: 40.8vw;
        margin-right: -5.8vw;
        transform: translateY(8.67vw);
      }
      .img__wrap {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        column-gap: 4.27vw;
        transform: translateY(5vw);

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
      margin-bottom: 6.13vw;
      font-size: 5.33vw;
      font-family: Copperplate;
      line-height: 5.33vw;
      -webkit-text-stroke: 0 #000000;
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
              padding: 3.2vw 2.4vw 3.2vw 8.8vw;
              transform-origin: center left;
              transform: rotateY(-16deg);

              @include respond-to('phone') {
                padding-right: 4.8vw;
              }

              .state {
                font-size: 3.07vw;
                font-family: Copperplate;
                line-height: 3.2vw;
                -webkit-text-stroke: 0 #000000;

                @include respond-to('phone') {
                  font-size: 3.73vw;
                }
              }
              .list {
                display: grid;
                row-gap: 1.6vw;
                margin-top: 1.6vw;
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

            & li {
              display: flex;
              column-gap: 1.07vw;
              font-size: 1.6vw;
              font-family: ArialRoundedMTBold;
              line-height: 1.73vw;

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
            font-family: ArialRoundedMTBold;

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
              font-family: 'PingFangSC-Semibold', 'PingFang SC';
              font-weight: 600;
              color: #ffcc00;
              line-height: 2.13vw;
              margin-top: 2.13vw;

              @include respond-to('phone') {
                line-height: 3.73vw;
              }
            }
            .item-desc {
              font-size: 2.13vw;
              line-height: 2.13vw;
              margin-top: 2.13vw;

              @include respond-to('phone') {
                line-height: 3.73vw;
                font-size: 3.2vw;
              }
            }
          }

          .btn-enquiey {
            height: 4.67vw;
            background: #fff000;
            border-radius: 2px;
            font-size: 1.6vw;
            font-family: 'PingFangSC-Medium', 'PingFang SC';
            font-weight: 500;
            line-height: 2.13vw;
            cursor: pointer;

            @include respond-to('phone') {
              height: 7.4vw;
              font-size: 3.2vw;
              line-height: 4.27vw;
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
