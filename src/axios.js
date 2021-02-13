import axios from 'axios';

const saleInstance = axios.create({
	baseURL: process.env.URL_SALES,
});

export default function (Vue) {
	/* eslint-disable no-param-reassign */
	Vue.prototype.$httpSales = saleInstance;
}
