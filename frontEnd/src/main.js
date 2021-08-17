import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faNewspaper, faBars, faUser, faCommentAlt, faShare, faSnowflake, faFire, faFireAlt, faBurn, faEllipsisH, faShieldAlt, faHome, faAddressCard, faSignOutAlt, faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import './assets/custom.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Set up fontawesome library
library.add(faPlusCircle, faNewspaper, faBars, faUser, faCommentAlt, faShare, faSnowflake, faFire, faFireAlt, faBurn, faEllipsisH, faShieldAlt, faHome, faAddressCard, faSignOutAlt, faEye, faEyeSlash, )
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
