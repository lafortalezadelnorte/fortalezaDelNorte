import axios from 'axios';

const saleInstance = axios.create({
	baseURL: process.env.URL_SALES,
});

const fortalezaInstance = axios.create({
	headers: {
		'Access-Control-Allow-Headers': 'Content-Type',
	},
	baseURL: process.env.URL_NORTE,
});

export default function (Vue) {
	/* eslint-disable no-param-reassign */
	Vue.prototype.$httpSales = saleInstance;
	Vue.prototype.$http = fortalezaInstance;
}
