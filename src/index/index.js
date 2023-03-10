import { createApp } from 'vue';
import { load } from '../utils';

import Home from './Home.vue';

const vueStart = (data = []) =>
  createApp(Home, { data }).mount('body');

load(vueStart);
