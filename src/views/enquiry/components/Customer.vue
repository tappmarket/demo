<script setup>
import { reactive, toRaw } from 'vue';

defineOptions({
  name: 'EnquiryCustomer'
});
const emit = defineEmits(['submit']);

const form = reactive({
  name: '',
  email: '',
  phone: '',
  storeName: '',
  claim: '',
  message: '',
  file: ''
});

function uploadFile(e) {
  const file = e.target.files[0];
}

// 提交
function onSubmit() {
  const data = toRaw(form);
  emit('submit', data);
}
</script>

<template>
  <form class="form" method="POST" action="https://formsubmit.co/cc363f8980a2fcf38e19c31a78d1a019" enctype="multipart/form-data">
    <input type="hidden" id="formId" name="formId" value="Customer Service Helpline">
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
      <span class="label-txt">Attachment</span>
      <label class="inp-label" for="select-file">
        <span class="label-text">Select File</span>
        <div class="select-file"></div>
        <input
          hidden
          id="select-file"
          type="file"
          name="file"
          placeholder=""
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
    <button type="submit" class="submit" @click="onSubmit">Send Message</button>
  </form>
</template>

<style src="./style.scss"></style>
