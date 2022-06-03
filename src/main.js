import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

Vue.use(VueScrollReveal, {
	class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
	duration: 800,
	scale: 1,
	distance: '50px',
	mobile: false,
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
