<template>
	<div id="contact-us">
		<v-flex class="section-us-title bold" text-xs-center>{{$t('titleContactUs')}}</v-flex>
		<div class="pl-6-mobile">
			<div class="content-buttons">
				<button
				:class="{'active' : item.id === btnSelected}"
				@click="selectBtnUs(item.id)"
				class="btn-us"
				v-for="(item, index) in $t('btnUs')"
				:key="index"
				>{{item.name}}</button>
			</div>
		</div>
		<!-- vif="btnSelected === item.id" -->
		<div class="banner-section-us" v-if="btnSelected === 1">
			<p class="bold title-tab-us">{{$t('titleAboutUs')}}</p>
			<p class="description-tab-us">
				{{$t('descriptionAboutUs')}}
			</p>
		</div>
		<div class="banner-section-us pd-two-us" v-if="btnSelected === 2">
			<div v-for="(min, index) in $t('arrayVision')" :key="index">
				<p class="bold title-tab-us">{{min.title}}</p>
				<p class="description-tab-us">
					{{min.description}}
				</p>
			</div>
		</div>
		<div class="banner-section-us" v-if="btnSelected === 3">
			<p class="bold title-tab-us">{{ $t('titleValue') }}</p>
			<v-flex align-center v-for="(val, index) in $t('values')" :key="index">
				<img src="/static/images/icons/check-mark.svg" class="pr-1" alt="icono-check">
				<span class="description-tab-us">{{val.name}}</span>
			</v-flex>
		</div>
		<div class="banner-section-us-camp" v-if="btnSelected === 4">
			<p class="bold title-tab-us">{{$t('titleCamp')}}</p>
			<p class="description-tab-us">
				{{$t('descriptionCamp')}}
			</p>
		</div>
		<div class="banner-section-us-plant" v-if="btnSelected === 5">
			<p class="bold title-tab-us">{{$t('titleProcess')}}</p>
			<p class="description-tab-us">
				{{$t('descriptionProcess')}}
			</p>
		</div>
	</div>
</template>

<script>
function selectBtnUs(id) {
	this.btnSelected = id;
}

function data() {
	return {
		btnSelected: 1,
		sectionsUs: [
			{
				id: 1,
				backgroundUs: '/static/images/banners/banner-us-mobile.png',
				title: 'QUIENES SOMOS',
				description: 'Somos una Compañía Agroindustrial Peruana Sostenible, dedicada al cultivo, procesamiento y exportación de productos de alta calidad, dirigidos hacia los mercados y consumidores más exigentes del mundo.',
			},
			{
				id: 2,
				backgroundUs: '/static/images/banners/banner-us-mobile.png',
				title: 'MISIÓN',
				description: 'Proveer alimentos nutritivos y naturales bajo los más altos estándares de calidad y sostenibilidad a nuestros clientes y marcas de todo el mundo a través de un servicio eficiente.',
			},
			{
				id: 3,
				backgroundUs: '/static/images/banners/banner-us-mobile.png',
				title: 'VALORES',
			},
			{
				id: 4,
				backgroundUs: '/static/images/banners/image-section-camp.png',
				name: 'CAMPO',
			},
			{
				id: 5,
				backgroundUs: '/static/images/banners/image-banner-plant.png',
				name: 'PROCESOS',
			},
		],
	};
}

export default {
	name: 'section-us',
	data,
	methods: {
		selectBtnUs,
	},
};
</script>

<style lang="scss" scoped>
.section-us-title {
	color: #878787;
	font-size: 25px;
	margin-bottom: 25px;
	padding-top: 49px; 

	@media (min-width: 936px) {
		font-size: 33px;
		margin-bottom: 40px;
		padding-top: 97px;
	}
}

.banner-section-us {
	background-image: url('/static/images/banners/banner-us-mobile.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	padding: 60px 63px;
	width: 100%;

	@media (min-width: 936px) {
		background-image: url('/static/images/banners/banner-section-us.png');
		height: 525px;
		padding: 190px 0 0 12%;
	}
}

.banner-section-us-camp {
	background-image: url('/static/images/banners/image-section-camp.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 314px;
	padding: 60px 63px;
	width: 100%;

	@media (min-width: 936px) {
		background-image: url('/static/images/banners/image-section-camp.png');
		height: 525px;
		padding: 190px 0 0 12%;
	}
}

.banner-section-us-plant {
	background-image: url('/static/images/banners/image-banner-plant.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 314px;
	padding: 60px 63px;
	width: 100%;

	@media (min-width: 936px) {
		background-image: url('/static/images/banners/image-banner-plant.png');
		height: 525px;
		padding: 190px 0 0 12%;
	}

}

.title-tab-us {
	font-size: 20px;
	color: #878787;
	margin-bottom: 25px;
	text-align: center;

	@media (min-width: 936px) {
		font-size: 30px;
		margin-bottom: 22px;
		text-align: left;
	}
}

.description-tab-us {
	color: #585858;
	font-size: 14px;
	line-height: 18px;
	text-align: center;

	@media (min-width: 936px) {
		font-size: 15px;
		line-height: 20px;
		text-align: left;
		max-width: 450px;
	}
}

.btn-us {
	background-color: white;
	border: solid 1px #e5e5e5;
	border-radius: 31.5px;
	color: #878787;
	font-size: 14px;
	font-weight: 500;
	height: 44px;
	margin-left: 20px;
	width: 137px;

	&:first-child {
		margin-left: 0;
	}

	&.active {
		background-color: #66cc33;
		color: white;
	}

	@media (min-width: 936px) {
		margin-left: 20px;
		width: 157px;
	}
}

.content-buttons {
	background-color: #fafafa;
	padding: 9px 0 9px 11px;
  	border-radius: 31.5px;
	overflow: auto;
    overflow-y: hidden;
    margin: 0 auto;
    white-space: nowrap;

	@media (min-width: 936px) {
		background-color: transparent;
		display: flex;
		margin: 40px auto 0 auto;
		justify-content: center;
	}
}

.pl-6-mobile {
	padding-left: 6px;

	@media (min-width: 936px) {
		padding: 0;
	}
}

.pd-two-us {
	@media (min-width: 936px) {
		padding-top: 145px !important;	
	}
}
</style>