import Vue from 'vue'
import App from './App.vue'
import './assets/css/normalize.css'
import './plugins/element'
import moment from 'moment'
import tab from '@/utils/tab'
import router from './router/index'
import '@/store/index'

moment.locale('zh-cn')

Vue.prototype.$moment = moment
Vue.prototype.$tab = tab

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
