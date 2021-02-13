import Vue from 'vue';
import EasySlider from 'vue-easy-slider';
import Vuelidate from 'vuelidate';
import format from 'date-fns/format';
import FlagIcon from 'vue-flag-icon';
import App from './App';
import registerVuetify from './vuetify';
import { httpRequestInterceptor, httpResponseSuccessInterceptor } from './http';
import registerAxios from './axios';
import vueRouter from './router';
import globalMixin from './mixins/global';
import registerFilters from './filters/global';
import './directives/global';
import i18n from './plugins/i18n';


const router = vueRouter(Vue);
registerFilters(Vue);
registerVuetify(Vue);
registerAxios(Vue);
Vue.use(Vuelidate);
Vue.mixin(globalMixin);
Vue.use(FlagIcon);
Vue.prototype.$bus = new Vue();
Vue.prototype.$today = format(new Date(), 'YYYY/MM/DD');

Vue.use(EasySlider);
// Vue.use(VueAwesomeSwiper);

// async function created() {
// 	this.$http.interceptors.request.use(this.httpRequestInterceptor);
// 	this.$http.interceptors.response.use(
// 		this.httpResponseSuccessInterceptor,
// 		this.httpResponseInterceptor,
// 	);
// }

/* eslint-disable no-new */
new Vue({
	i18n,
	// created,
	el: '#app',
	methods: {
		httpRequestInterceptor,
		httpResponseSuccessInterceptor,
	},
	router,
	render: h => h(App),
});
