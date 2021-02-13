export function httpRequestInterceptor(config) {
	return config;
}

export function httpResponseSuccessInterceptor(response) {
	this.$bus.$emit('is-loading', false);
	return response;
}
