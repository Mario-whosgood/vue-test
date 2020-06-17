import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { routes } from './routes/index.js'



Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


