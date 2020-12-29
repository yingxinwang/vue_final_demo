import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { request } from "./network/request"

createApp(App).use(store).use(router).mount('#app')

request({
  url: ''
}).then(res => {

}).catch(res => {

})

Vue.prototype.$bus = new Vue()