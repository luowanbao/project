import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  vant,
}).$mount('#app')
