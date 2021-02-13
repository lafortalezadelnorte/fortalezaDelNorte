<template>
  <div class="section-quality" id="quality">
	  <img src="/static/images/banners/Bitmap.png" alt="" class="icono-quality-header">
	  <div>
		<v-flex class="title-section-quality bold" text-xs-center>
			{{$t('titleQuality')}}
		</v-flex>
		<v-flex text-xs-center class="description-section-quality">
			{{$t('descriptionQuality')}}
		</v-flex>
		<v-flex mt-5>
			<div class="content-buttons">
				<button
				:style="`width: ${item.width}px`"
				:class="{'active' : item.id === btnSelected}"
				v-for="(item, index) in $t('btnQuantity')"
				@click="selectBtnUs(item.id)"
				:key="index"
				class="btn-quality mr-2 ml-2"
				>
					{{item.name}}
				</button>
			</div>
		</v-flex>
		<v-flex class="content-tab" v-if="btnSelected === 1">
			<v-layout class="row">
				<v-flex>
					<v-layout column>
						<v-flex class="title-tab">{{$t('titleSystem')}} </v-flex>
						<v-flex class="description-tab">
							{{$t('descriptionSystem')}}
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex class="content-image">
					<img src="/static/images/section/sistema-integrado-gestion-calidad-min.png" alt="icono-primer-tab" class="icon-quality">
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex class="content-tab" v-if="btnSelected === 2">
			<v-layout class="row">
				<v-flex>
					<v-layout column>
						<v-flex class="title-tab">{{$t('titleSegurity')}}</v-flex>
						<v-flex class="description-tab">
							{{$t('descriptionSegurity')}}
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex class="content-image">
					<img src="/static/images/section/seguridad-alimentaria-calidad-copy-min.png" alt="icono-primer-tab" class="icon-quality">
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex class="content-tab" v-if="btnSelected === 3">
			<v-layout class="row">
				<v-flex>
					<v-layout column>
						<v-flex class="title-tab">{{$t('titleTraceability')}}</v-flex>
						<v-flex class="description-tab">
							{{$t('descriptionTracebilty')}}
							<div class="mt-4">
								<ul class="list-none">
									<li v-for="(li, index) in $t('listTraceability')" :key="index">
										<span>{{li.id}}.</span>
										{{li.name}}</li>
								</ul>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex class="content-image">
					<img src="/static/images/section/trazabilidad-calidad-min.png" alt="icono-primer-tab" class="icon-quality">
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex class="content-tab-certifications"  v-if="btnSelected === 4">
			<v-layout class="row">
				<v-flex xs12 sm12 md6>
					<v-layout column>
						<v-flex class="title-tab">{{$t('titleCertifications')}}</v-flex>
						<v-flex class="description-tab">
							{{$t('descriptionCertifications')}}
						</v-flex>
						<div class="mt-4" v-for="(listCert, index) in $t('listCertifications')" :key="index">
							<strong class="bold-list">{{listCert.bold}}</strong>
							<span class="text-certifications">
								{{listCert.text}}
							</span>
						</div>
					</v-layout>
				</v-flex>
				<v-flex xs12 md6 class="w-100 mt-4">
					<slider
						height="400px"
						animation="normal"
						:speed="7000"
						:control-btn="false"
						width="100%"
					>
						<slider-item v-for="(img, index) in imagesQuality" :key="index">
							<img :src="img.url" alt="">
						</slider-item>
					</slider>
				</v-flex>
			</v-layout>
		</v-flex>
	  </div>
	  <img src="/static/images/banners/Bitmap2.png" alt="" class="icono-footer"> 
	</div>  
</template>

<script>
function selectBtnUs(id) {
	this.btnSelected = id;
}

function data() {
	return {
		btnSelected: 1,
		imagesQuality: [
			{
				id: 1,
				url: '/static/images/icons/logo-global.png',
			},
			{
				id: 2,
				url: '/static/images/section/image-calidad-two.png',
			},
			{
				id: 3,
				url: '/static/images/section/image-calidad-three.png',
			},
		],
		btnQuantity: [
			{
				id: 1,
				name: 'SISTEMA INTEGRADO DE GESTIÓN',
			},
			{
				id: 2,
				name: 'SEGURIDAD ALIMENTARIA',
			},
			{
				id: 3,
				name: 'TRAZABILIDAD',
			},
			{
				id: 4,
				name: 'CERTIFICACIONES',
			},
		],
	};
}

export default {
	name: 'section-quality',
	data,
	methods: {
		selectBtnUs,
	},
};
</script>

<style lang="scss" scoped>
.section-quality {
	// background-image: url('/static/images/banners/banner-quality-mobile.png');
	// background-size: cover;
	// background-repeat: no-repeat;
	// background-position: 50%;
	// height: 620px;
	padding: 89px 0 120px 6px;
	position: relative;
	width: 100%;

	@media (min-width: 936px) {
		// background-image: url('/static/images/banners/banner-quality.png');
		// background-attachment: inherit;
		// box-sizing: border-box;
		// height: 910px;
		padding: 106px 30px 120px 30px;
		// height: 520px;
	}
}

.title-section-quality {
	color: #878787;
	font-size: 25px;

	@media (min-width: 936px) {
		font-size: 33px;
	}
}

.description-section-quality {
	color: #585858;
	font-size: 14px;
	line-height: 18px;
	padding: 0 24px;
	margin: 19px 0 58px 0;

	@media (min-width: 936px) {
		font-size: 15px;
		line-height: 20px;
		margin: 39px auto 67px auto;
		max-width: 715px;
		padding: 0;
	}
}

.btn-quality {
	border: 1px solid #e5e5e5;
	border-radius: 31.5px;
	color: #878787;
	font-size: 14px;
	font-weight: 500;
	height: 44px;

	&:first-child {
		margin-left: 0;
	}

	&.active {
		background-color: #66cc33;
		color: white;
		font-weight: 600;
	}

	@media (min-width: 936px) {
		margin-left: 20px;
	}
}

.content-buttons {
	background-color: #fafafa;
	padding: 9px 0 9px 11px;
	border-top-left-radius: 31px;
	border-bottom-left-radius: 31px;
  	// border-radius: 31.5px;
	overflow: auto;
    overflow-y: hidden;
    margin: 0 auto;
    white-space: nowrap;

	@media (min-width: 936px) {
		background-color: transparent;
		display: flex;
		margin: 0 auto 0 auto;
		justify-content: center;
	}
}

.title-tab {
	color: #878787;
	font-family: map-get($fonts, bold-champagne);
	font-size: 20px;

	@media (min-width: 936px) {
		font-size: 30px;
	}
}

.description-tab {
	color: #585858;
	font-size: 15px;
	line-height: 20px;
	margin-top: 20px;
}

.content-tab {
	margin-top: 52px;
	padding: 0 42px;

	@media (min-width: 936px) {
		margin: 84px auto 0 auto;
		max-width: 795px;
		padding: 0;
	}
}

.content-tab-certifications {
	margin-top: 52px;

	@media (min-width: 936px) {
		margin: 84px auto 0 auto;
		max-width: 835px;
	}
}

.row {
	align-items: center;
	flex-direction: column;
	text-align: center;

	@media (min-width: 936px) {
		flex-direction: row;
		text-align: left;
	}
}

.icon-quality {
	margin-top: 25px;
	height: 140px;

	@media (min-width: 936px) {
		height: auto;
	}
}

.text-certifications {
	color: #585858;
	font-size: 15px;
}

.bold-list {
	color: #585858;
}

.icono-quality-header {
	position: absolute;
	top: 0;
	left: 0;

	@media (max-width: 936px) {
		width: 40%;
	}
}

.icono-footer {
	position: absolute;
	bottom: 0;
	right: 0;

	@media (max-width: 936px) {
		width: 40%;
	}
}

.content-image {
	@media (min-width: 936px) {
		margin-left: 50px;
	}
}
</style>