<template>
    <div class="banner" id="banner-home">
			<div class="component-network">
				<div>
					<a href="https://www.facebook.com/FortalezadelNortePeru/" target="_blank">
						<img src="/static/images/icons/icon-fb.svg" alt="icono-facebook" height="40">
					</a>
				</div>
				<div>
					<a href="http://linkedin.com/company/la-fortaleza-del-norte-s-a-c" target="_blank">
						<img src="/static/images/icons/icon-linkedin.svg" alt="icono-linkedin" height="40">
					</a>
				</div>
			</div>
			<slider
				:control-btn="false"
				height="100vh"
				animation="fade"
				:speed="6000"
				width="100%"
			>
				<slider-item  v-for="(item, index) in $t('banners')" :key="index">
					<div class="banner-slide br-mobile" :style="`background-image: url(${item.url})`">
						<v-flex class="text-bold-banner">{{item.textBold}}</v-flex>
						<v-flex class="subtitle-banner">{{item.text}}</v-flex>
					</div>
					<div class="banner-slide br-desktop" :style="`background-image: url(${item.urlMobile})`">
						<v-flex class="text-bold-banner">{{item.textBold}}</v-flex>
						<v-flex class="subtitle-banner">{{item.text}}</v-flex>
					</div>
				</slider-item>
			</slider>
		</div>
</template>

<script>
export default {
	name: 'banner-home',
};
</script>

<style lang="scss" scoped>
.banner {
	background-repeat: no-repeat;
	background-size: cover;
	position: relative !important;
	width: 100%;

	&-slide {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 600px;
		padding: 138px 16px 0 0;

		@media (min-width: 936px) {
			padding: 17% 0 0 10%;
			height: 613px;
		}
	}
}

.text-bold-banner {
	color: white;
	font-family: map-get($fonts, bold-champagne);
	font-size: 35px;
	line-height: 39px;
	text-align: right;
	margin: 0;

	@media (min-width: 936px) {
		font-size: 55px;
		text-align: left;
	}
}

.subtitle-banner {
	color: white;
	font-family: map-get($fonts, regular-champagne);
	font-size: 35px;
	text-align: right;

	@media (min-width: 935px) {
		margin-left: 40px;
		font-size: 55px;
		text-align: left;
	}
}

.component-network {
	background-color: white;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
	bottom: 0;
	display: flex;
	justify-content: space-between;
	padding: 5px 25px;
	display: flex;
	position: fixed;
	width: 145px;
	z-index: 222;

	@media (min-width: 936px) {
		border-bottom-left-radius: 5px;
		border-top-right-radius: 0;
		box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.11);
		bottom: 50%;
		flex-direction: column;
		justify-content: space-around;
		height: 145px;
		padding: 5px 11px;
		position: fixed;
		right: 0 !important;
		transform: 0;
		width: 60px;
	}

	@media (max-width: 936px) {
		left: 50%;
    	transform: translateX(-50%);
	}
}
</style>