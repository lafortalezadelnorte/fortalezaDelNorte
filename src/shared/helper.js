import { format } from 'date-fns';

function exactDate(date, formatter = 'DD-MM-YYYY', splitBy = 'T') {
	if (date) {
		const dateSplit = date.split(splitBy);
		const dateComplete = dateSplit[0].split('-');
		const year = dateComplete[0];
		const month = dateComplete[1] - 1;
		const day = dateComplete[2];
		const newDate = format(new Date(year, month, day), formatter);
		return newDate;
	}
	return null;
}

function formatDate(date, formatter = 'DD-MM-YYYY') {
	const newDate = format(new Date(date), formatter);
	return newDate;
}

function generateBlob(data, contentType = 'application/pdf') {
	return new Blob([data], { type: contentType });
}

function showDownloadDialog(blob, name, extension) {
	const currentDate = format(new Date(), 'YYYY-MM-DD');
	const link = document.createElement('a');
	link.download = `${name}_${currentDate}.${extension}`;
	link.href = window.URL.createObjectURL(blob);
	link.click();
}

/* eslint-disable */
function debounce(func, wait = 800, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const methods = {
	debounce,
	exactDate,
	formatDate,
	generateBlob,
	showDownloadDialog,
};

export default methods;