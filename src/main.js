import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import EventBus from './plugins/event-bus'
import vuetify from './plugins/vuetify'
import msToMm from './filters/ms-to-mm'
import blur from './directives/blur'


Vue.config.productionTip = false
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
