import format from 'date-fns/format';

function abs(value) {
	const newValue = Number(value);
	if ((newValue > 0 && newValue < 0.1) || (newValue < 0 && newValue > -0.1)) {
		return Math.abs(newValue);
	}
	return newValue;
}

function round(value, decimals = 2) {
	const newValue = Number(value);
	return newValue ? newValue.toFixed(decimals) : 0;
}

function limitTo(value, length = 10) {
	if (value && value.length > length) {
		const cutText = value.substring(0, length);
		return `${cutText}...`;
	}
	return value;
}

function lowerCase(value, transform = 'toLowerCase') {
	const textTransform = value[transform]();
	return textTransform;
}

function formatDate(date, formatter = 'YYYY-MM-DD HH:mm:ss') {
	const newDate = date ? format(new Date(date), formatter) : null;
	return newDate;
}

function formatPaymentDate(date) {
	const [paymentDateBase] = date.split('.');
	const [paymentDate, paymentHours] = paymentDateBase.split('T');
	return `${paymentDate} ${paymentHours}`;
}

function formatNumber(value) {
	const sameValue = value === Math.floor(value);
	if (!sameValue) {
		return round(value);
	}
	return value;
}

function exactDate(date, formatter = 'DD-MM-YYYY', time, splitBy = 'T') {
	if (date) {
		const dateSplit = date.split(splitBy);
		const dateComplete = dateSplit[0].split('-');
		const timeComplete = dateSplit[1] ? dateSplit[1].split(':') : null;
		const year = dateComplete[0];
		const month = dateComplete[1] - 1;
		const day = dateComplete[2];
		const hour = timeComplete ? timeComplete[0] : null;
		const minutes = timeComplete ? timeComplete[1] : null;
		const seconds = timeComplete ? timeComplete[2].split('.')[0] : null;
		const newDate = !time || !timeComplete ? format(new Date(year, month, day), formatter) :
			format(new Date(year, month, day, hour, minutes, seconds), formatter);
		return newDate;
	}
	return '';
}

export default function (Vue) {
	Vue.filter('round', round);
	Vue.filter('limitTo', limitTo);
	Vue.filter('formatDate', formatDate);
	Vue.filter('lowerCase', lowerCase);
	Vue.filter('formatNumber', formatNumber);
	Vue.filter('formatPaymentDate', formatPaymentDate);
	Vue.filter('abs', abs);
	Vue.filter('exactDate', exactDate);
}
