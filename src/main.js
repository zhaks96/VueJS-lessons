import Vue from 'vue'
import App from './App.vue'
import SimplePlugin from './plugins/simplePlugin'

import marked from 'marked'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import VueMask from 'v-mask'

// Vue.config.productionTip = false
import '@/assets/styles/main.scss';

Vue.use(SimplePlugin)
Vue.filter('marked', marked)
Vue.use(VueRouter)
Vue.use(VueMask)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')