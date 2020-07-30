import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faPlusCircle, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt, faEdit, faPlusCircle, faPen)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
