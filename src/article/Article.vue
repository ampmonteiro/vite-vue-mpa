<script setup>
import AppLayout from '../components/AppLayout.vue';

defineProps({
  data: Object
});

</script>

<template>
  <AppLayout>

    <h1>{{ data.title }}</h1>
    <p>{{ data.date }}</p>

    <p v-for="item in data.content">
      {{ item }}
    </p>
  </AppLayout>
</template>
