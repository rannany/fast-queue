import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueFirestore);
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
