import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from './store';
import SpaceBetween from './components/SpaceBetween/index.vue';

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Antd)
  .component('space-between', SpaceBetween )
  .mount('#app');
