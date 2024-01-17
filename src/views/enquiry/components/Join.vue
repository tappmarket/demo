<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { ElButton } from 'element-plus';

defineOptions({
  name: 'EnquiryJoin'
});
const emit = defineEmits(['submit']);

const loading = ref(false);
onBeforeUnmount(() => {
  loading.value = false;
});

function onSubmit() {
  loading.value = true;
  emit('submit', 'enquiry-join');
}
</script>

<template>
  <form
    name="enquiry-join"
    class="form"
    method="POST"
    action="https://formsubmit.co/cc363f8980a2fcf38e19c31a78d1a019"
  >
    <input
      type="hidden"
      id="formId"
      name="formId"
      value="Join The Two Peck Crispy Chicken (Australia) Family"
    />
    <div class="row">
      <input class="form-inp" name="name" placeholder="Name" />
      <input class="form-inp" type="email" name="email" placeholder="Email" inputmode="email" />
      <input class="form-inp" type="tel" name="tel" placeholder="Phone" inputmode="tel" />
    </div>
    <span class="label-txt">Where you want to open store?</span>
    <div class="row">
      <input class="form-inp" name="postCode" placeholder="PostCode" />
      <input class="form-inp" name="state" placeholder="State" />
    </div>
    <div class="row">
      <input class="form-inp" name="reason" placeholder="How did you find us?" />
    </div>
    <div class="row">
      <textarea class="form-inp message" name="enquiry" placeholder="Enquiry"></textarea>
    </div>
    <ElButton :loading="loading" class="submit" @click="onSubmit">Send Message</ElButton>
  </form>
</template>

<style src="./style.scss"></style>
