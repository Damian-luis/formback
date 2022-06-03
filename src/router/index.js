import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../view/HomePage.vue';
import PrivacyPolicy from '../view/PrivacyPolicy.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/privacy-policy',
		name: 'PrivacyPolicy',
		component: PrivacyPolicy,
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

router.beforeEach((to, from, next) => {
	console.log(to);
	next();
});

export default router;
