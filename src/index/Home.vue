<script setup>
import AppLayout from '../components/AppLayout.vue';

defineProps({
  data: Array
})
</script>

<template>
  <AppLayout>
    <h1>Blog</h1>
    <article v-for="item in data">
      <h2>{{item.title}}</h2>
      <p class="article-info">
        {{item.date}}
        <a :href="'/article/?id=' + item.id">read</a>
      </p>
    </article>
  </AppLayout>
</template>
