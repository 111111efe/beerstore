import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// message
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert的樣式
