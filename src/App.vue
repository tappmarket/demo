<script setup>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <page-header></page-header>
  <router-view></router-view>
  <page-footer></page-footer>
</template>

<style scoped></style>
