import { createApp } from 'vue';
import { load } from '../utils';
import Article from './Article.vue';

const vueStart = (data = null) =>
  createApp(Article, { data }).mount('body');

load(vueStart, false);
