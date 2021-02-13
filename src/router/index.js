import Router from 'vue-router';

export default function (Vue) {
	Vue.use(Router);
	const config = new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				name: 'page-home',
				component: () => import('@/pages/page-home'),
			},
		],
		// scrollBehavior(to, from, savedPosition) {
		// 	if (savedPosition) {
		// 		return savedPosition;
		// 	}
		// 	return { x: 0, y: 0 };
		// },
	});
	config.beforeEach((to, from, next) => next());
	return config;
}
