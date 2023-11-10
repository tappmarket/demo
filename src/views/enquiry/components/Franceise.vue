<script setup>
import { reactive, toRaw } from 'vue';
import { ElRadio, ElRadioGroup } from 'element-plus';

defineOptions({
  name: 'EnquiryFranceise'
});
const emit = defineEmits(['submit']);

const form = reactive({
  name: '',
  email: '',
  phone: '',
  storeName: '',
  claim: '',
  message: '',
  employee: 'former',
  file: ''
});

function uploadFile(e) {
  const file = e.target.files[0];
  console.log('file => ', file);
}

// 提交
function onSubmit() {
  const data = toRaw(form);
  emit('submit', data);
}
</script>

<template>
  <form class="form">
    <div class="row">
      <input class="form-inp" name="name" placeholder="Name" v-model="form.name" />
      <input
        class="form-inp"
        type="email"
        name="email"
        placeholder="Email"
        inputmode="email"
        v-model="form.email"
      />
      <input
        class="form-inp"
        type="tel"
        name="tel"
        placeholder="Phone"
        inputmode="tel"
        v-model="form.phone"
      />
    </div>
    <div class="row">
      <input class="form-inp" name="storeName" placeholder="Store Name" v-model="form.storeName" />
      <input class="form-inp" name="claim" placeholder="Claim" v-model="form.claim" />
    </div>
    <div class="row flex-col">
      <span class="label-txt">Are you a current, or former employee</span>
      <el-radio-group v-model="form.employee">
        <el-radio label="current">Current</el-radio>
        <el-radio label="former">Former</el-radio>
      </el-radio-group>
    </div>
    <div class="row flex-col">
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
          @change="uploadFile"
        />
      </label>
    </div>
    <div class="row">
      <textarea
        class="form-inp message"
        name="message"
        placeholder="Message"
        v-model="form.message"
      ></textarea>
    </div>
    <button type="submit" class="submit" @click.prevent="onSubmit">Send Message</button>
  </form>
</template>

<style src="./style.scss"></style>
<style scoped lang="scss">
:deep(.el-radio-group) {
  .el-radio {
    height: 2.67vw;
    color: #000;
  }

  .el-radio__inner {
    --radio-size: 1.87vw;
    width: var(--radio-size);
    height: var(--radio-size);

    &::after {
      --radio-checked-size: 0.53vw;
      width: var(--radio-checked-size);
      height: var(--radio-checked-size);
    }
  }

  .el-radio__label {
    font-size: 1.6vw;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #000;
  }

  @include respond-to('phone') {
    .el-radio {
      height: 6.67vw;
    }

    .el-radio__inner {
      --radio-size: 3.73vw;

      &::after {
        --radio-checked-size: 1.07vw;
      }
    }

    .el-radio__label {
      font-size: 3.73vw;
      padding-left: 2.13vw;
    }
  }
}
</style>
