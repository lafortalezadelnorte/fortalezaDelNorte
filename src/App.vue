<template>
	<div>
		<v-snackbar :timeout="snackbar.timeout" :color="snackbar.color"
			:top="true" :right="true" v-model="snackbar.isVisible">
			{{ snackbar.text }}
			<v-btn flat @click.native="snackbar.isVisible = false">Cerrar</v-btn>
		</v-snackbar>
		<layout-general>
			<router-view></router-view>
		</layout-general>
	</div>
</template>

<script>
import layoutGeneral from '@/components/layouts/layout-general';

function created() {
	this.onToggleSnackBar();
	this.$bus.$on('is-loading', (result) => {
		this.isLoading = result;
	});
}

function data() {
	return {
		isLoading: false,
	};
}

export default {
	name: 'app',
	created,
	data,
	components: {
		layoutGeneral,
	},
};
</script>

<style lang="scss">
html, body {
	font-family: 'Poppins', sans-serif !important;
	font-size: 16px;
	scroll-behavior: smooth;
}

.application {
	font-family: 'Poppins', sans-serif !important;
}

.content {
	background: white;

	&--wrap {
		background-color: color(white);
		padding: 0px;
	}
}


.progress-bar {
	left: 0px !important;
	margin: 0px !important;
	position: absolute !important;
	right: 0px !important;
	top: 120px !important;

	@media (min-width: 768px) {
		top: 80px !important;
	}
}


.show-error {
	.input-group__details {
		font-size: map-get($sizes, small10);
		display: block !important;
		padding-top: 0;
	}
	.input-group__details:before {
		height: 0px;
	}
}

.table-style {
	.table__overflow {
		.table {
			thead tr {
				background-color: color(primary);
				height: 30px;
				th { color: white !important; }
			}
			tbody tr:nth-child(even) {
				background-color: color(background-sidebar);
			}
		}
	}
}

.btn-action {
	border-radius: 5px !important;
	box-shadow: none !important;
	color: white !important;
	height: 30px !important;
	margin: 0px;
	text-transform: none !important;
	width: 97px !important;

	&-width {
		width: auto !important;
	}

	&-block {
		min-width: auto !important;
		width: 100% !important;
	}

	.btn__content {
		font-family: font(lato-regular);
		font-size: map-get($sizes, small10);
		padding: 0px;

		img {
			height: 20px;
			margin-left: 10px;
		}
	}

	&.text-large {
		.btn__content {
			font-family: font(lato-regular);
			font-size: map-get($sizes, small);
		}
	}
}

.overflow-auto {
	overflow: auto;
	margin-bottom: 30px;
}

.notification {
	&-btn {
		.btn__content {
			padding: 0px;
		}
	}

	&-card {
		.btn__content {
			max-width: 100%;
			padding: 0px 0px 0px 17%;
			white-space: normal;
		}
	}
}

.theme--light {
	.table-icon {
		.btn__content {
			padding: 0px;
		}

		&.btn--disabled {
			&:not(.btn--icon):not(.btn--flat) {
				background-color: transparent !important;
				opacity: .6;
			}
		}
	}
}

button {
	min-width: 5px;
	outline: none;

	.table-icon {
		outline: none;
	}
}

.input-group--hide-details {
	.input-group__details {
		display: none;
	}
}

#calendar {
	padding: 0px 15px 15px;

	.fc {
		&-toolbar {
			&.fc-header-toolbar {
				margin-bottom: 0px;
			}
		}

		&-button {
			background-color: color(background-sidebar);
			background-image: none;
			border: 1px solid color(subheaderText);
			box-shadow: none;
			color: color(subheaderText);
			font-family: font(lato-regular);
			font-size: map-get($sizes, medium);
			height: 25px;
			line-height: map-get($sizes, medium);
			outline: none;
			text-shadow: none;

			&:first-child {
				border-bottom-left-radius: 5px;
				border-top-left-radius: 5px;
			}

			&:last-child {
				border-bottom-right-radius: 5px;
				border-top-right-radius: 5px;
			}
		}

		&-center {
			h2 {
				color: color(subheaderText);
				font-family: font(lato-regular);
				font-size: map-get($sizes, medium18);
			}
		}
	}
}

.title-form {
	color: color(paginationText);
	font-family: font(lato-regular);
	font-size: 13px;
}

.hr-info {
	background-color: color(blue-grey) !important;
}

.form-group__message {
	color: color(orange-btn);
	font-family: font(lato-regular);
	font-size: 11px;

	&--full {
		display: block;
	}
}

.pl-add-container {
	@include flex-center;
	background-color: color(primary) !important;
	border-radius: 5px;
	display: inline-flex;
	height: 20px;
	width: 20px;
}

.btn-list {
	border-radius: 5px !important;
	box-shadow: none !important;
	height: 20px !important;
	min-width: 20px !important;

	&-add {
		border: 1px solid color(primary);
		color: color(primary) !important;
	}

	&-remove {
		border: 1px solid color(orange-btn);
		color: color(orange-btn) !important;
	}

	.btn__content {
		height: 18px;
		padding: 0px;
	}

	.icon {
		font-size: 20px;
	}
}

.custom-loader {
	animation: loader 1s infinite;
	display: flex;
}

.tabs__container--overflow .tabs__div.customer-tabs {
	flex: 0 1 auto;
}

@-moz-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}

@-webkit-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}

@-o-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}

.size {
	cursor: pointer;
	height: 30px;
	width: 30px;
}

.fast-register-footer {
	background-color: white;
	bottom: 0%;
	position: fixed;
	width: 100%;
}

.expansion-panel-component {
	.expansion-panel {
		&__header {
			background-color: map-get($map: $colors, $key: expansion-panel-header);
			color: white;
			font-family: font(lato-regular);
			font-size: 13px;
			height: 30px;
			line-height: 1.2;
			padding: 0px 0px 0px 34px;
			text-transform: capitalize;
		}

		&__container .header__icon {
			border-left: 1px solid white;
			height: 30px;
		}

		&__container .header__icon .icon {
			color: white !important;
			font-size: 44px;
			height: 30px;
			line-height: 0.7;
		}
	}
}

.row-background-grey {
	background-color: map-get($map: $colors, $key: background-table);
}

.feature-footer {
	background-color: white;
	bottom: 0;
	position: absolute;
	width: 100%,
}

.opacyble {
	opacity: 0.3;
}

.sidebar-active {
	.list__tile.list__tile--link {
		opacity: 1 !important;
	}
}

.btn-action-bar {
	.btn__content {
		justify-content: flex-start;
		padding: 0px 4px;
	}
}

.action-bar {
	display: flex;
	flex-flow: column;
	width: 60px;
}

.action-bar_element {
	align-items: center;
	background-color: white;
	border: 1px solid color(blue-price);
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
	color: color(subheaderText);
	display: grid;
	font-size: size(small10);
	grid-template-columns: 35px 1fr;
	grid-template-rows: 40px;
	justify-content: center;
	margin-bottom: 5px;
	padding: 0 11px 0 9px;
	text-align: left;
	transform: translateX(10px);
	transition: transform 200ms ease-out;
	width: 120px;
}

.action-bar_element:hover {
	transform: translateX(-52px);
}

.title-section {
	border-bottom: 1px solid color(blue-grey);
	font-family: font(lato-regular);
	font-size: size(medium);

	.btn__content {
		justify-content: space-between;
	}
}

.mr-adjust {
	margin-right: 0;
}

.image-button {
	background-color: color(primary) !important;
	min-width: 30px !important;
	width: 30px !important;
}

.view-image {
    height: 15px !important;
	margin: 0 !important;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.fade-enter-active,
.fade-leave-active {
	transition-property: opacity, transform;
	transition-duration: 0.2s;
}

.fade-left-enter-active {
	animation: lateral 0.3s;
}

.fade-left-leave-active {
	animation: lateral 0s reverse
}

@keyframes lateral {
	0% {
		flex-basis: 0;
	}
	100% {
		flex-basis: 50%;
	}
}

.fade-lateral-enter,
.fade-lateral-leave-to {
	opacity: 0;
	transform: scaleX(0);
}

.fade-lateral-enter-active,
.fade-lateral-leave-active {
	transition-property: opacity, transform, transform-origin;
	transition-duration: 0.3s;
}

.text-field {
	&.input-group.input-group--solo .input-group__input {
		padding: 0 !important;
	}
	&.input-group.input-group--solo {
		min-height: 30px;
	}
	&.input-group--text-field input, .input-group--text-field textarea {
		font-size: size(small);
	}
}

.select-app {
	&.input-group {
		background: white;
		border-radius: 2px;
		box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, .2);
	}

	.input-group--select__autocomplete,
	.input-group__selections__comma {
		padding-left: 10px;
	}
}

.date-picker-input {
	.input-group.input-group--solo label {
		font-size: size(small);
		top: 0;
	}
}

.is-not-selectable {
	table th {
		&:first-child {
			width: auto !important;
		}
	}
}

.input-group.input-group--selection-controls .input-group__input .icon--selection-control {
	top: 3px;
}

.tabs-form {
	.tabs__slider {
		height: 3px;
	}
}

.tags-form {
	&.chip--small {
		height: 22px;
	}

	.chip__content {
		height: 24px;
	}

	.chip__close > .icon {
		font-size: 18px;
	}
}

button:disabled {
	cursor: not-allowed;
	opacity: 0.6;
}

.due-btn {
	.btn__content {
		&:before {
			background-color: transparent !important;
		}
	}
}

.form-height {
	min-height: 100vh;
}

.text-uppercase {
	text-transform: uppercase;
}

.btn-auto {
	height: auto !important;
	min-width: auto !important;
	width: auto !important;
}

.btn-full {
	height: auto;
	min-width: auto !important;
	width: 100% !important;
}

.btn-total {
	.btn__content {
		padding: 0px;
	}
}

.primary-select .select-app {
	background-color: color(select) !important;
	color: color(white) !important;

	.input-group__selections__comma {
		color: color(white) !important;
		font-family: font(lato-regular);
		font-size: 11px;
	}

	.input-group__append-icon {
		color: color(white) !important;
	}
}

.upload-button {
	
	&.btn {
		box-shadow: none;
		height: 30px;
		margin: 0;
		min-width: 0;

		.btn__content .icon {
			color: white;
		}
	}
}

.proof-delete-image {

	.btn--floating.btn--small .icon {
		font-size: size(large);
	}

	.material-icons {
		display: flex;
	}
}

.switch-status {
	&.switch:not(.input-group--dirty) {
		color: color(error) !important;

		&.input-group .input-group--selection-controls__toggle {
			opacity: .5;
		}

		.input-group--selection-controls__container {
			color: inherit !important;
		}

		.input-group--selection-controls__ripple:after,
		.input-group--selection-controls__ripple:after {
			background-color: color(error);
		}
	}
}

.delete-reason {	
	.select-app {
		max-width: none !important;
	}
}

.tag-chip {
	.chip__content {
		border-radius: inherit;
		height: 18px;
	}
}

.tag-select {
	.input-group__selections {
		height: auto !important;
		min-height: 24px;
	}
}

.subtotal-container {
	position: relative;
}

.subtotal-menu {
	align-items: center;
	background-color: color(summary);
	display: flex;
	font-size: 12px;
	justify-content: center;
	min-width: 270px;
	padding: 10px 15px;
	position: absolute;
	right: 0;
	top: 115%;
	z-index: 3;
}

.subtotal-menu-content {
	font-size: 12px;
	width: 100%;

	p {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
		white-space: nowrap;

		.taxes-title {
			font-family: font(lato-regular);
			margin-right: 10px;
		}
	}

	.input-group {
		label {
			font-size: 12px;
		}
	}
}

.prices-width {
	.filter-select.input-group.shadow-inset {
		input {
			padding-left: 5px;
			width: 60px;
		}
	}
}

.input-address-custom {
	.filter-select.input-group .input-group__append-icon {
		background-color: color(orange-btn) !important;
		color: color(white) !important;
		font-size: map-get($sizes, large);
		height: 100%;
		padding-left: 1.5px;
		padding-top: 3px;
	}
}

.btn-totals {
	border: 1px solid color(subheaderText);
}

.subtotal {
	align-items: center;
	display: flex;
	font-size: 12px;
	justify-content: center;

	button {
		color: color(info);
		margin-left: 8px;
	}
}

.totals-section {
	background-color: color(summary);
	font-family: font(lato-regular);
}

.product-search-custom {
	.filter-select.input-group .input-group__append-icon {
		background-color: color(primary);
		border-bottom-right-radius: 5px;
		border-top-right-radius: 5px;
		color: color(white) !important;
		font-size: 24px;
		height: 100%;
		line-height: 31px;
		padding: 0px 3px;
		width: 30px;
	}
}

.btn-action.btn-width-auto {
	height: auto !important;
	width: auto !important;
}

.textarea-custom {
	&.filter-select {
		height: 80px !important;

		.input-group__input {
			border: 0px !important;
			padding: 5px 15px !important;

			textarea {
				font-family: font(lato-regular);
				font-size: 14px;
				resize: none;
			}
		}
	}
}

.custom-autocomplete {
	.filter-select.input-group.shadow-inset .input-group__selections {
		border-right: 0px;

		& + div + i {
			font-size: 20px;
		}
	}

	&.custom-autocomplete-search {
		.filter-select.input-group.shadow-inset .input-group__selections {
			& + div + i {
				color: color(primary) !important;
				font-size: 24px;
				padding-right: 2px;
			}
		}	
	}
}

.input-group--select.input-group--focused.input-group--open .input-group__append-icon:not(.input-group__icon-clearable) {
	transform: none;
}

.chip.chip-search {
	.chip__content {
		border-radius: 8px;
		font-family: font(lato-regular);
		font-size: map-get($sizes, small10);
		height: 17px;
		padding: 0px 6px;
	}
}

.filter-select-content.custom-select-content-search .list__tile {
	height: 68px;

	.input-group--select.input-group--focused.input-group--open .input-group__append-icon:not(.input-group__icon-clearable) {
		transform: none;
	}
}

.custom-select-content {
	border-radius: 0px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;

	.list__tile--highlighted {
		border-bottom: 1px solid color(blue-grey);
	}

	.list__tile__title,
	.list__tile__sub-title {
		color: color(paginationText);
		font-size: 11px;
		height: 13px;
		line-height: 11px;
	}

	.list__tile__sub-title {
		height: auto;
		margin-top: 2px;
	}
}

.custom-select-content-open {
	display: inline-block !important;
	z-index: 8 !important;
}

.switch-status.switch-tax {
	label {
		color: color(paginationText) !important;
		font-family: font(lato-regular);
		font-size: map-get($sizes, small);
		padding-left: 10px !important;
	}
}

.hide-and-print,
.menuable__content__active {
	@media print {
		display: none !important;
	}
}

.item-container {
	.progress-circular__info {
		width: 80%;
	}
}

.warehouse-btn {
	.btn__content {
		justify-content: space-between !important;
	}
}

.action-td {
	min-width: 128px !important;
}

.switch-inline {
	display: inline-block !important;
	margin-right: 8px;
	vertical-align: middle;
	width: auto !important;
}

.br-8 {
	border: 1px solid color(border-tab);
	border-radius: 8px;

	.tabs__bar,
	.tabs__items {
		border-color: color(border-tab);
		border-radius: 8px;
	}
}

.btn-new-product {
	height: 30px !important;
	min-width: auto !important;

	.btn__content {
		min-width: auto !important;
		padding: 0 4px !important;
	}
}

.collapse-btn {
	.btn__content {
		justify-content: space-between !important;
		padding: 0px !important;
	}
}

.navigation-drawer--temporary:not(.navigation-drawer--close) {
	z-index: 9;
}

.bank-to-bank {
	.input-group--disabled {
		background-color: color(grey) !important;
	}
}

.configuration-ecommerce {
	.stepper {
		box-shadow: none !important;
	}

	.stepper__header {
		background: color(stepper-tabs);
		box-shadow: none !important;
		padding: 0 5%;

		@media (min-width: 768px) {
			padding: 0 7%;
		}
	}

	.stepper__content {
		background: color(stepper-content);
		padding: 0 0 0 12px !important;
	}
}

.app-select-full {
	.select-app {
		height: 46px;
	}

	.text-field.input-group--text-field input, .text-field .input-group--text-field textarea {
		color: color(paginationText);
		font-size: size(medium);
	}
}

.reconcilement-checkbox {
	flex: initial;
	min-width: auto;
	width: 138px;

	label {
		min-width: auto;
		width: auto;
	}
}

.border-select {
	.select-app {
		border: 1px solid color(blue-gray);
	}
}

.search-input-container {
	.input-group__input input {
		border-radius: 3px;
		height: 37px !important;
		padding-left: 50px !important;
		padding-right: 14px !important;
	}

	.filter-select.input-group .input-group__icon-clearable {
		color: color(error) !important;
		font-size: size(medium20) !important;
	}
}

.products-search-form {
	.material-icons, label {
		font-size: 15px;
	}

	.input-group.input-group--selection-controls .input-group__input .icon--selection-control {
		top: 8px;
	}
}

.card-btn {
	.btn__content {
		flex-wrap: wrap;
		padding: 0px;
	}
}

.checkbox-text {
	label {
		color: color(paginationText) !important;
		font-family: font(open-regular) !important;
		font-size: size(small11) !important;
		left: 18px !important;
	}

	.icon--selection-control {
		font-size: size(small) !important;
		height: 12px !important;
		top: 9px !important;
	}
}

.select-outline {
	.select-app {
		background: transparent !important;
		padding-left: 5px !important;
	}

	input {
		color: color(blue-card) !important;
	}

	input::-webkit-input-placeholder {
		color: color(blue-card) !important;
	}

	input::-moz-placeholder {
		color: color(blue-card) !important;
	}

	.icon {
		font-size: size(medium18) !important;
	}

	&.border-outline {
		.select-app {
			border-color: color(dashboard-base);
			border-radius: 18.5px;
			font-family: font(lato-regular);
			font-size: size(small11) !important;
			padding-left: 16px !important;
		}

		.input-group__selections__comma {
			color: color(dashboard-base) !important;
			font-family: font(lato-regular);
			font-size: size(small11) !important;
		}

		.icon {
			color: color(dashboard-base) !important;
		}
	}
}

.card-checkbox {
	.icon {
		font-size: size(medium15) !important;
		height: 15px !important;
		top: 0px !important;
	}
}

.selling-points {
	.wrapper-text-point {
		&.active {
			label, input {
				color: color(paginationText) !important;
			}
		}
	}
}

.table-scroll-tooltip.btn-add {
	.btn--flat {
		background-color: color(white) !important;
		border-radius: 2px !important;
	}
}

.slug-input {
	.filter-select {
		.input-group__input {
			padding-right: 0px !important;
		}

		.icon {
			background-color: color(blue-card) !important;
			border-radius: 2px !important;
			color: color(white) !important;
			font-size: size(medium20) !important;
			height: 30px !important;
			line-height: 30px !important;
			text-align: center !important;
			width: 30px !important;
		}
	}
}

.new-sale {
	.totals-section {
		.btn-totals-sale {
			.material-icons {
				font-size: 12px;
			}
		}
	}
}
	
.gmap-container .menu {
	display: none !important;
}

.content-outline {
	border: 1px solid color(dashboard-base);
	border-bottom-left-radius: 18.5px;
	border-bottom-right-radius: 18.5px;
	border-top-left-radius: 18.5px;
	border-top-right-radius: 18.5px;

	.list__tile {
		height: auto;
	}

	.card, .list {
		background-color: color(background-table) !important;
	}

	.list__tile__title {
		color: color(dashboard-base) !important;
		font-family: font(lato-regular) !important;
		font-size: size(small11) !important;
		height: auto;
	}
}

.btn.user-config:hover .btn__content {
	&:before,
	&:after {
		background-color: transparent !important;
	}
}

.page-composite-products-new {
	.select-chips_code {
		.icon {
			display: none;
		}
	}
}

.container-view {
	padding-left: 0;
	transition: 0.05s cubic-bezier(0.4, 0, 0.2, 1);
	&.open {
		padding-left: 149px;
	}
}

.scroll-sidebar-bg {
	overflow-y: auto;
}

.menu-content-actions.menu-content-actions {
	border-radius: 0px;
	
	.list {
		border-radius: 0px;
	}

	.list__tile {
		height: 24px !important;
	}
}

.background-table {
	.overflow-auto {
		margin-bottom: 0;
		overflow: hidden;
		padding: 11px 5px !important;
	}
}

.btn-new-section {
	.btn__content {
		font-size: 14px;
	}
}

.graphic-container > div {
	position: relative !important;
}

.cash-box-close {
	.tabs__div {
		margin-left: initial !important;
		max-width: inherit !important;
		width: 50% !important;
	}
	.tabs__slider-wrapper {
		display: none;
	}
	.tabs__item--active {
		background: color(blue-grey);
		color: color(accent);
	}
}

.dialog__content.dialog__content__active {
	z-index: 99999 !important;
}

.center {
	text-align: center;
}

.primary--text input {
	border: 1px solid #bababc;
	border-radius: 5px;
	padding: 5px;
}

.input-group--text-field label {
	color: color(gray) !important;
	left: 10px;
}

.input-group.input-group--selection-controls label {
	max-width: 100%;
}

.form-group__message {
	color: map-get($colors, error);
	font-family: 'Open Sans', sans-serif;
	font-size: 11px;

	&--full {
		display: block;
	}
}

.br-desktop {
	@media (min-width: 936px) {
		display: none;
	}
}

.br-mobile {
	@media (max-width: 936px) {
		display: none;
	}
}

.banner {
	.slider-indicators {
		@media (max-width: 936px) {
			bottom: 70px !important;
		}
	}

	.slider-indicators-center {
		@media (max-width: 936px) {
			border-radius: 13.8px !important;
			box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.22) !important;
			background-color: rgba(255, 255, 255, 0.83) !important;
			height: 30px;
			padding: 5px 18px !important;
		}
	}

	.slider-indicator-active {
		border: 3px solid rgba(255, 255, 255, 0.7);
		background-color: #d8d8d8;

		@media (max-width: 936px) {
			padding: 1px !important;
			background-color: #66cc33 !important;
		}
	}

	.slider-indicator-icon {
		border: 3px solid rgba(255, 255, 255, 0.7);
		height: 15px !important;
		width: 15px !important;

		@media (max-width: 936px) {
			border: 2px solid #66cc33;
		}
	}
}

.banner {
	// .slider-indicators-center {
	// 		display: b;	
	// 	}
	// }

	.slider-items {
		height: 100vh !important;
		
		@media (min-width: 936px) {
			height: 613px!important;
		}
	}
}

.bold {
	font-family: map-get($fonts, bold-champagne);
}

.app-header {
	.menu__content {
		background-color: white;
	}
}

.banner {
	.slider {
		@media (max-wdith: 936px) {
			display: none;
		}
	}
}

.slider {
	height: 613px !important;
}

.w-100 {
	width: 100%;
}

.list-none {
	list-style: none;
}

.italic {
	font-style: italic
}

.menu__content {
	border-radius: 8px;
  	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
    top: 35px !important;
	left: -80px !important;
	min-width: 120px !important;

	@media (max-width: 936px) {
		top: 34px !important;
		left: -84px !important;
	}
}

.list__tile--link {
	border-bottom: 1px solid #e5e5e5;
}

.list {
	padding: 0 6px;
}

.section-quality {
	.slider-items {
		text-align: center;
	}

	.slider-indicators-center {
		display: none;
	}
}

.section-quality {
	.slider {
		height: 117px !important;

		@media (min-width: 936px) {
			margin: 0 auto !important;
			width: 70% !important;
		}
	}
}

.relative {
	position: relative;
}
</style>
