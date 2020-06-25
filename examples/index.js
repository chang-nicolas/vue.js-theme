import '@babel/polyfill';
import { createApp } from 'vue';
import App from './App.vue';
import { Button, Upload, Icon, Modal, notification, message } from 'ant-design-vue';
import 'ant-design-vue/style.js';

const basic = {
  render() {
    return this.$slots.default && this.$slots.default();
  },
};
const app = createApp(App);
app.config.globalProperties.$notification = notification;
app.config.globalProperties.$message = message;
app
  .component('demo-sort', { ...basic })
  .component('md', { ...basic })
  .component('api', { ...basic })
  .component('CN', { ...basic })
  .component('US', { ...basic })
  .use(Upload)
  .use(Button)
  .use(Icon)
  .use(Modal)
  .mount('#app');
