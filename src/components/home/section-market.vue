<template>
  <div class="section-market" id="markets">
		<v-flex class="bold title-market" text-xs-center>{{$t('titleMarket')}}</v-flex>
		<v-flex class="description-market bold" text-xs-center>
			{{$t('descriptionMarket')}}
		</v-flex>
		<div class="content-image">
			<img :src="$t('imageDesktopMarket')" alt="imagen-mapa" class="br-mobile content-image">
		</div>
		<div class="content-image">
			<img :src="$t('imageMobileMarket')" alt="image-mapa-mobile" class="br-desktop w-100">
		</div>
	</div>
</template>

<script>
export default {
	name: 'section-market',
};
</script>

<style lang="scss" scoped>
.section-market {
	background-image: linear-gradient(to bottom, #ffffff, #fdfdfd 45%, #e8e8e8);
	padding: 25px 0 60px 0;

	@media (min-width: 936px) {
		background-color: none;
		padding: 60px 0 0 0;
	}
}

.title-market {
	color: #878787;
	font-size: 25px;

	@media (min-width: 936px) {
		font-size: 33px;
	}
}

.description-market {
	color: #585858;
	font-family: 'Poppins', sans-serif !important;
	font-size: 14px;
	line-height: 18px;
	margin: 41px 0 50px 0;
	padding: 0 40px;

	@media (min-width: 936px) {
		font-size: 15px;
		line-height: 22px;
		margin: 53px auto 0 auto;
		max-width: 895px;
	}
}

.w-100 {
	width: 100%;
}

.content-image {
	// padding: 0 55px;
	width: 100%;

	@media (min-width: 936px) {
		padding: 0;
	}
}
</style>