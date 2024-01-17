<script setup>
import { reactive, toRaw } from 'vue';

defineOptions({
  name: 'EnquiryJoin'
});
const emit = defineEmits(['submit']);

const form = reactive({
  name: '',
  email: '',
  phone: '',
  postCode: '',
  state: '',
  reason: '',
  enquiry: ''
});

// 提交
function onSubmit() {
  const data = toRaw(form);
  emit('submit', data);
}
</script>

<template>
  <form class="form" method="POST" action="https://formsubmit.co/info@twopac.com.au">
    <input type="hidden" id="formId" name="formId" value="Join The Two Peck Crispy Chicken (Australia) Family">
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
    <span class="label-txt">Where you want to open store?</span>
    <div class="row">
      
      <input class="form-inp" name="postCode" placeholder="PostCode" v-model="form.postCode" />
      <input class="form-inp" name="state" placeholder="State" v-model="form.state" />

    </div>
    <div class="row">
      <input
        class="form-inp"
        name="reason"
        placeholder="How did you find us?"
        v-model="form.reason"
      />
    </div>
    <div class="row">
      <textarea
        class="form-inp message"
        name="enquiry"
        placeholder="Enquiry"
        v-model="form.enquiry"
      ></textarea>
    </div>
    <button type="submit" class="submit" @click="onSubmit">Send Message</button>
  </form>
</template>

<style src="./style.scss"></style>
