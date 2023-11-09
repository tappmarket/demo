<script setup>
defineOptions({
  name: 'EnquiryPage'
});
// 回滚顶部
document.documentElement.scrollTop = 0;

// 提交
function onSubmit() {
  console.log('submit');
}
</script>

<template>
  <div class="page-content">
    <!-- banner -->
    <img src="@/assets/image/banner2.png" style="width: 100%" alt="banner2" loading="lazy" />
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
          <div class="desc">
            If you have any questions or concerns regarding employment or wage payment practices at
            a Two Peck Crispy Chicken store, please submit a claim.
          </div>
          <form class="form" id="enquiryForm">
            <div class="row">
              <input class="form-inp" name="name" placeholder="Name" />
              <input class="form-inp" type="email" name="email" placeholder="Email" />
              <input class="form-inp" type="tel" name="tel" placeholder="Phone" />
            </div>
            <div class="row">
              <input class="form-inp" name="storeName" placeholder="Store Name" />
              <input class="form-inp" name="claim" placeholder="Claim" />
            </div>
            <div class="row flex-col" style="row-gap: 0">
              <span class="label-txt">Attachment</span>
              <label class="inp-label" for="select-file">
                <span class="label-text">选择文件</span>
                <div class="select-file">未选择任何文件</div>
                <input
                  hidden
                  id="select-file"
                  type="file"
                  name="file"
                  placeholder="未选择任何文件"
                />
              </label>
            </div>
            <div class="row">
              <textarea class="form-inp message" name="message" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="submit" @click.prevent="onSubmit">Send Message</button>
          </form>
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
          font-size: 3.07vw;
          font-family: ArialRoundedMTBold;
          line-height: 3.6vw;
          text-align: center;

          @include respond-to('phone') {
            font-size: 3.73vw;
            line-height: 4vw;
          }
        }

        .form {
          display: grid;
          row-gap: 1.6vw;
          margin-top: 4.27vw;

          .row {
            display: flex;
            column-gap: 1.2vw;
            font-size: 1.6vw;
            font-family: ArialHebrew;
            line-height: 2.13vw;

            .form-inp {
              flex: 1;
              width: 100%;
              height: 4.27vw;
              background: rgba(255, 255, 255, 0.6);
              border: 2px solid transparent;
              border-radius: 2px;
              padding: 0 1.6vw;
              font-size: 1.6vw;

              &::placeholder {
                font-size: 1.2vw;
                font-family: ArialHebrew;
                color: #000;
                line-height: 2.13vw;
              }
              &:focus {
                outline: none;
              }
            }

            .inp-label {
              flex: 1;
              display: flex;
              margin-top: 1.6vw;
              border: 2px solid transparent;
              border-radius: 2px;
              cursor: pointer;

              .label-text {
                display: grid;
                place-items: center;
                width: 9.87vw;
                font-family: 'PingFangSC-Regular', 'PingFang SC';
                font-weight: 400;
                background-color: rgba(255, 255, 255, 0.8);
              }

              .select-file {
                flex: 1;
                height: 4.27vw;
                line-height: 4.27vw;
                background: rgba(255, 255, 255, 0.6);
                padding: 0 1.6vw;
              }
            }

            .message {
              height: 8.4vw;
              padding: 0.8vw 1.6vw;
              font-size: 1.87vw;
              resize: none;
            }
          }

          .submit {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.47vw 1.87vw;
            margin-left: auto;
            background: rgba(124, 202, 201, 1);
            border-radius: 2px;
            font-size: 1.2vw;
            font-family: 'PingFangSC-Semibold', 'PingFang SC';
            font-weight: 600;
            color: #fff;
            cursor: pointer;
          }

          @include respond-to('phone') {
            row-gap: 3.2vw;

            .row {
              flex-direction: column;
              column-gap: 0;
              row-gap: 3.2vw;
              font-size: 3.73vw;

              .form-inp {
                flex-basis: auto;
                height: 9.87vw;
                font-size: 4.27vw;

                &::placeholder {
                  font-size: 3.73vw;
                  line-height: 4.27vw;
                }
              }

              .inp-label {
                .label-text {
                  width: 19.73vw;
                }
                .select-file {
                  height: 8.53vw;
                  line-height: 8.53vw;
                  padding: 0 3.2vw;
                }
              }

              .message {
                height: 17.07vw;
              }
            }

            .submit {
              padding: 2.93vw 3.73vw;
              font-size: 3.73vw;
            }
          }
        }
      }
    }
  }
}
</style>
