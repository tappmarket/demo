<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { ElButton } from 'element-plus';

defineOptions({
  name: 'EnquiryFranceise'
});
const emit = defineEmits(['submit']);

const file = ref();
function uploadFile(e) {
  /** @type {File} */
  const _file = e.target.files[0];
  file.value = _file;
}

const loading = ref(false);
onBeforeUnmount(() => {
  loading.value = false;
});

function onSubmit() {
  loading.value = true;
  emit('submit', 'enquiry-franceise');
}
</script>

<template>
  <form
    name="enquiry-franceise"
    class="form"
    method="POST"
    action="https://formsubmit.co/cc363f8980a2fcf38e19c31a78d1a019"
    enctype="multipart/form-data"
  >
    <input type="hidden" id="formId" name="formId" value="Employee Helpline" />
    <div class="row">
      <input class="form-inp" name="name" placeholder="Name" />
      <input class="form-inp" type="email" name="email" placeholder="Email" inputmode="email" />
      <input class="form-inp" type="tel" name="tel" placeholder="Phone" inputmode="tel" />
    </div>
    <div class="row">
      <input class="form-inp" name="storeName" placeholder="Store Name" />
      <input class="form-inp" name="claim" placeholder="Claim" />
    </div>

    <div class="row flex-col">
      <span class="label-txt">Attachment</span>
      <label class="inp-label" for="select-file">
        <span class="label-text">Select File</span>
        <div class="select-file">{{ file?.name }}</div>
        <input hidden id="select-file" type="file" name="file" @change="uploadFile" />
      </label>
    </div>
    <div class="row">
      <textarea class="form-inp message" name="message" placeholder="Message"></textarea>
    </div>
    <ElButton :loading="loading" class="submit" @click="onSubmit">Send Message</ElButton>
  </form>
</template>

<style src="./style.scss"></style>
