<template>
	<v-layout wrap class="app-header">
		<div class="app-header-container">
			<div class="app-header-container-menu">
				<a href="/">
					<img src="/static/images/icons/logo-fortaleza.svg" alt="logo" class="logo-fortaleza">
				</a>
				<div v-if="open" class="app-header-container-column">
					<div v-for="(i, index) in $t('links')" :key="index">
						<a :href="i.link">
							<button
								@click="directLink"
								class="app-header-container-menu-item"
								type="button"
							>
								{{i.name}}
							</button>
						</a>
					</div>
					<div class="content-network-menu">
						<a href="https://www.facebook.com/FortalezadelNortePeru/" target="_blank">
							<img src="/static/images/icons/icon-fb.svg" alt="icono-facebook" height="40">
						</a>
						<a href="http://linkedin.com/company/la-fortaleza-del-norte-s-a-c" target="_blank" class="ml-4">
							<img src="/static/images/icons/icon-linkedin.svg" alt="icono-linkedin" height="40">
						</a>
					</div>
				</div>
			</div>
			<div class="br-desktop app-header-container-button">
				<v-flex>
					<v-select
						class="input-component width-mobile"
						v-model="country"
						item-text="value"
						item-value="name"
						:items="languages"
						hide-details
						single-line
					>
						<template slot="selection" slot-scope="data">
							<button type="button" @click="setLocale(data.item.lan)">
								<flag :iso="data.item.icon"></flag>
								<span>{{data.item.name}}</span>
							</button>
						</template>
						<template slot="item" slot-scope="data">
							<div>
								<button type="button" @click="setLocale(data.item.lan)">
									<flag :iso="data.item.icon"></flag>
									<span class="ml-2">{{data.item.name}}</span>
								</button>
							</div>
						</template>
					</v-select>
				</v-flex>
				<button type="button" @click="toogleMenu" class="app-header-button">
				<img
					v-if="open"
					src="/static/images/icons/close (2).svg"
					alt="boton para cerrar menu"
					height="15">
					<img
					v-else
					src="/static/images/icons/sidebar.svg"
					alt="boton para abrir menu"
					height="15">
				</button>
			</div>
			<v-flex xs12 sm8 md9 lg7 class="br-mobile">
				<v-layout row align-center>
					<v-flex>
						<v-layout row align-center class="menu-header">
						<v-flex v-for="(item, index) in $t('links')" class="px-1" :key="index">
							<a :href="item.link" class="link-header">
								{{item.name}}
							</a>
						</v-flex>
					</v-layout>
				</v-flex>
				<div class="br-mobile width-select-lan">
					<v-select
						class="input-component"
						v-model="country"
						item-text="value"
						item-value="name"
						:items="languages"
						hide-details
						single-line
					>
						<template slot="selection" slot-scope="data">
							<button type="button" @click="setLocale(data.item.lan)">
								<flag :iso="data.item.icon"></flag>
								<span>{{data.item.name}}</span>
							</button>
						</template>
						<template slot="item" slot-scope="data">
							<div>
								<button type="button" @click="setLocale(data.item.lan)">
									<flag :iso="data.item.icon"></flag>
									<span class="ml-2">{{data.item.name}}</span>
								</button>
							</div>
						</template>
					</v-select>
				</div>
				</v-layout>
			</v-flex>
		</div>
	</v-layout>
</template>

<script>
function created() {
	this.country = this.languages[0].value;
}

function toogleMenu() {
	this.open = !this.open;
}

function directLink() {
	this.open = false;
}

function setLocale(locale) {
	// import(`./langs/${local}.json`).then((msgs) => {
	// 	this.$i18n.setLocaleMessage(locale, msgs);
	// 	this.$i18n.locale = locale;
	// });
	this.$i18n.locale = locale;
}

function data() {
	return {
		country: null,
		open: false,
		languages: [
			{
				id: 1,
				name: 'ES',
				lan: 'es',
				icon: 'pe',
				value: 'ES',
			},
			{
				id: 2,
				name: 'EN',
				lan: 'en',
				icon: 'us',
				value: 'EN',
			},
		],
	};
}

export default {
	name: 'app-header',
	created,
	data,
	methods: {
		directLink,
		setLocale,
		toogleMenu,
	},
};
</script>

<style lang="scss" scoped>
.link-header {
	color: #585858;
	font-size: 14px;
	font-weight: 500;
	outline: none;
	text-decoration: none;

	&:hover {
		color: #41aa36;
		border-bottom: 4px solid #41aa36;
		font-weight: bold;
		transition: left 250ms ease-in-out, right 250ms ease-in-out;
	}
}

.logo-fortaleza {
	height: 36px;

	@media (min-width: 936px) {
		height: 46px;
	}
}

.menu-header {
	@media (max-width: 936px) {
		display: none;
	}
}

.app-header {
		background-color: color(white);
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
		height: 70px;
		padding: 18px 18px 22px 25px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;

		@media (min-width: 936px) {
			height: 97px;
			padding: 27px 7%;
		}

		@media (min-width: 1204px) {
			padding: 27px 7%;
		}

		&-logo {
			height: 26px;

			@media (min-width: 936px) {
				height: 42px;
			}
		}

		&-container {
			align-items: center;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 0 auto;
			width: 100%;

			&-column {
				background-color: color(white);
				height: calc(100vh - 56px);
				left: 0;
				padding: 22px 15px 0 15px;
				position: absolute;
				top: 54px;
				width: 100%;

				@media (min-width: 936px) {
					align-items: flex-start;
					background-color: transparent;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					height: initial;
					justify-content: space-between;
					margin: 0 auto;
					max-width: 100%;
					right: 0;
					top: auto;
				}

				.leftside,
				.rightside {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;

					@media (min-width: 936px) {
						align-items: flex-start;
						flex-direction: row;
						justify-content: space-around;
						max-width: calc(50% - 126px);
						width: 100%;
					}
				}

				.top-buttons {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					padding: 15px 0px 25px;
					justify-content: space-between;

					.button-menu {
						border: 1px solid color(primary);
						font-family: font(bold);
						font-size: size(small);
						height: 40px;
						text-transform: uppercase;
						width: 48%;

						&.signin {
							background-color: color(primary);
							color: color(white);
						}

						&.signup {
							color: color(primary);
							margin-right: 11px;
						}

						@media (min-width: 425px) {
							width: 160px;
						}
					}

					@media (min-width: 425px) {
						justify-content: flex-start;
					}

					@media (min-width: 936px) {
						display: none;
					}
				}
			}

			&-menu {

				@media (max-width: 936px) {
					width: 50%;
				}
				&-item {
					border-bottom: 1px solid #f6f3f3;
					color: color(gray);
					font-family: font(regular);
					font-size: size(medium);
					text-align: left;
					padding: 18px 0px;
					width: 100%;

					&:first-child {
						border-top: 1px solid #f6f3f3;
					}

					@media (min-width: 936px) {
						border-bottom: 2px solid transparent;
						border-top: 0px;
						font-family: font(din-bold);
						font-size: size(medium18);
						letter-spacing: -0.36px;
						padding: 0px 0px 3px;
						text-transform: uppercase;
						width: auto;
					}

					&.active {
						color: color(secondary);
						font-family: font(bold);

						@media (min-width: 936px) {
							border-bottom: 2px solid color(gray);
							color: color(gray);
							font-family: font(din-bold);
						}
					}
				}

				@media (min-width: 936px) {
					align-items: center;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
					// margin: 0 auto;
					position: relative;
					// width: 96%;
				}

				// @media (min-width: 1200px) {
				// 	max-width: 1080px;
				// 	width: 100%;
				// }
			}
		}
	}

	@media (max-width: 936px) {
		.app-header-container-button {
			display: flex;
			width: 50%;
			text-align: right;
		}
	}

	.input-component {
		background-color: white;
		border: 1px solid #66cc33;
		border-radius: 31.5px;
		color: #41aa36;
		font-size: 14px;
		font-weight: 600;
		height: 30px;
		padding: 0 0 0 15px;
		width: 100%;

		&:focus {
			outline: 0px;
		}
	}

	.width-desktop {
		@media (min-width: 936px) {
			width: 100px;
		}
	}

	.content-network-menu {
		bottom: 50px;
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
	}

	.width-mobile {
		@media (max-width: 936px) {
			width: 85%;
		}
	}

	.width-select-lan {
		@media (min-width: 936px) {
			width: 115px;
		}
	}
</style>