import { TOGGLE_SNACKBAR } from './../events';

function data() {
	return {
		params: {
			customerId: null,
			page: 1,
			limit: 20,
			search: null,
		},
		table: {
			lastPage: 1,
			rows: [],
		},
		snackbar: {
			text: '',
			isVisible: false,
			color: 'primary',
			timeout: 0,
		},
	};
}

function goTo(name, options) {
	this.$router.push({ name, ...options });
}

function replaceString(word, selectionStart, newWord) {
	if (word) {
		return word.slice(0, selectionStart) + newWord + word.slice(selectionStart + 0);
	}
	return newWord;
}

function showNotification(text, color = 'green', timeout = 5000) {
	this.$bus.$emit(TOGGLE_SNACKBAR, { color, text, timeout });
}

function showGenericError(text = 'Ups, ocurrió algún problema') {
	this.showNotification(text, 'error');
}

function showRow(columns, columnId) {
	const column = columns.find(h => h.id === columnId);
	return column.visible;
}

function stopClick() {
	return false;
}

function onToggleSnackBar() {
	this.$bus.$on(TOGGLE_SNACKBAR, (snackbar) => {
		const newSnackbar = Object.assign({}, snackbar);
		newSnackbar.isVisible = true;
		this.snackbar = newSnackbar;
	});
}

const mixin = {
	data,
	methods: {
		goTo,
		replaceString,
		showGenericError,
		showNotification,
		showRow,
		stopClick,
		onToggleSnackBar,
	},
};

export default mixin;
