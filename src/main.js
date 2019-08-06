import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://http-test-dbbce.firebaseio.com/'

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
