<template>
	<div class="section-products" id="products">
		<v-flex text-xs-center class="bold title-section-products">{{$t('titleProduts')}}</v-flex>
		<div class="content-buttons">
			<button
			:style="`width: ${btn.width};`"
			@click="selectProduct(btn.id)"
			:class="{ 'active': btn.id ===  btnSelected}"
			class="btn-us"
			v-for="(btn, index) in $t('btnsProducts')"
			:key="index">{{btn.name}}</button>
		</div>
		<div
		class="content-product">
			<div v-if="btnSelected === 1" class="content-product">
				<div class="content-title">
					<v-flex xs2 class="cont-title-desktop">
						<span class="title-product">{{$t('titleEs')}}</span>
						<span class="title-product-green">{{$t('titleEsGreen')}}</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li v-for="(pres, index) in $t('listPresents')" :key="index" class="content-present pr-3">
								<v-layout column align-center>
									<v-flex>
										<img :src="pres.icon" :alt="pres.name" class="icon-one">
									</v-flex>
									<v-flex class="title-preset">
										{{ pres.name }}
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</div>
				<v-layout row mt-5 class="column-reverse-mobile">
					<v-flex class="pt-desktop mt-mobile" xs12 md4 sm12>
						<div>
							<ul class="list-none pt-one max-width-desktop">
								<p class="title-list br-desktop">{{$t('titleProperties')}}</p>
								<li class="mb-product" :class="{ 'mb-two' : pro.id === 2 }" v-for="(pro, index) in $t('listProperties')" :key="index">
									<span>
										<img src="/static/images/icons/check-mark.svg">
										<span class="item-description">
											{{pro.name}}
											<span class="bold-description">{{pro.bold}}</span>
										</span>
									</span>
									<!-- <v-layout row>
										<v-flex xs1>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description">
											{{pro.name}}
											<span class="bold-description">{{pro.bold}}</span>
										</v-flex>
									</v-layout> -->
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp" v-for="(dis, index) in $t('listDisp')" :key="index">
									<v-layout column align-center>
										<v-flex>
											<img :src="dis.icon" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{dis.name}}</span>	
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
					</v-flex>
					<v-flex class="relative">
						<button class="btn-temporate">{{$t('titleTemporate')}} <br> {{$t('rangeTemporate')}}</button>
						<img src="/static/images/section/esparrago-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop image-esparrago">
						<img src="/static/images/section/image-product-one.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 2">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product">{{$t('titleEs')}}</span>
						<span class="title-product-green">{{$t('titleEsWhite')}}</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li v-for="(pres, index) in $t('listPresents')" :key="index" class="content-present pr-3">
								<v-layout column align-center>
									<v-flex>
										<img :src="pres.icon" :alt="pres.name" class="icon-one">
									</v-flex>
									<v-flex class="title-preset">
										{{ pres.name }}
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</div>
				<v-layout row mt-5 class="column-reverse-mobile">
					<v-flex xs12 md4 sm12>
						<div>
							<ul class="list-none pt-two mt-mobile">
								<p class="title-list br-desktop">{{$t('titleProperties')}}</p>
								<li class="mb-product" v-for="(pro, index) in $t('listProperties')" :key="index">
									<span>
										<img src="/static/images/icons/check-mark.svg">
										<span class="item-description ml-2">
											{{pro.name}}
											<span class="bold-description">{{pro.bold}}</span>
										</span>
									</span>
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp">
									<v-layout column align-center>
										<v-flex>
											<img src="/static/images/icons/icon-three-es.svg" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{$t('titleConserve')}}</span>
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
					</v-flex>
					<v-flex class="relative">
						<button class="btn-temporate">{{$t('titleTemporate')}} <br> {{$t('rangeTemporate')}}</button>
						<img src="/static/images/section/esparragos-blanco-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop">
						<img src="/static/images/section/img-esparrago-blanco.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 3">
				<div class="content-title">
					<v-flex xs5>
						<span class="title-product">{{$t('titleBlackBell')}}</span>
						<span class="title-product-green">{{$t('titleGreenBell')}}</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li v-for="(pres, index) in $t('listPresents')" :key="index" class="content-present pr-3">
								<v-layout column align-center>
									<v-flex>
										<img :src="pres.icon" :alt="pres.name" class="icon-one">
									</v-flex>
									<v-flex class="title-preset">
										{{ pres.name }}
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</div>
				<v-layout row mt-2 class="column-reverse-mobile">
					<v-flex xs12 md4 sm12>
						<div>
							<ul class="list-none pt-three mt-mobile">
								<p class="title-list br-desktop">{{$t('titleProperties')}}</p>
								<li class="mb-product" v-for="(pim, index) in $t('listPropertiesRed')" :key="index">
									<span>
										<img src="/static/images/icons/check-mark.svg" alt="icono-check">
										<span class="item-description ml-2">
											{{pim.name}}
											<span class="bold-description">{{pim.bold}}</span>
										</span>
									</span>
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp">
									<v-layout column align-center>
										<v-flex>
											<img src="/static/images/icons/icon-three-es.svg" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{$t('titleConserve')}}</span>
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
					</v-flex>
					<v-flex class="relative">
						<button class="btn-temporate btn-temporate-pim">{{$t('titleTemporate')}} <br> {{$t('rangeTemporateRed')}}</button>
						<img src="/static/images/section/pimiento-mobile.png" alt="imagen-esparrago" class="w-100 br-desktop img-mobile-pim">
						<img src="/static/images/section/img-pimiento-morrin.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 4">
				<div class="content-title">
					<v-flex xs12 sm12 md8>
						<span class="title-product-green">{{$t('titleGreenFruit')}}</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li v-for="(pres, index) in $t('listPresents')" :key="index" class="content-present pr-3">
								<v-layout column align-center>
									<v-flex>
										<img :src="pres.icon" :alt="pres.name" class="icon-one">
									</v-flex>
									<v-flex class="title-preset">
										{{ pres.name }}
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</div>
				<v-layout row mt-2 class="column-reverse-mobile">
					<v-flex xs12 md4 sm12>
						<div>
							<ul class="list-none pt-three mt-mobile">
								<p class="title-list br-desktop">{{$t('titleProperties')}}</p>
								<li class="mb-product" v-for="(mar, index) in $t('listPropertiesFruit')" :key="index">
									<span>
										<img src="/static/images/icons/check-mark.svg" alt="icono-check">
										<span class="item-description ml-2">
											{{mar.name}}
											<span class="bold-description">{{mar.bold}}</span>
										</span>
									</span>
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp" v-for="(disp, index) in $t('listDisp')" :key="index">
									<v-layout column align-center>
										<v-flex>
											<img :src="disp.icon" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{disp.name}}</span>	
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
					</v-flex>
					<v-flex class="relative" xs9 sm8 md8>
						<button class="btn-temporate btn-maracuya">{{$t('titleTemporate')}} <br> {{$t('rangeTemporateMar')}}</button>
						<img src="/static/images/section/maracuya-mobile.png" alt="imagen-esparrago" class="mobile-image-maracuya br-desktop">
						<img src="/static/images/section/img-maracuya.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 5">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product-green">{{$t('titleGreenAran')}}</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li v-for="(pres, index) in $t('listPresents')" :key="index" class="content-present pr-3">
								<v-layout column align-center>
									<v-flex>
										<img :src="pres.icon" :alt="pres.name" class="icon-one">
									</v-flex>
									<v-flex class="title-preset">
										{{ pres.name }}
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</div>
				<v-layout row class="column-reverse-mobile content-arandanos-desktop">
					<v-flex xs12 md4 sm12>
						<div>
							<ul class="list-none mt-aran-mobile mt-mobile">
								<p class="title-list br-desktop">{{$t('titleProperties')}}</p>
								<li class="mb-product" v-for="(aran, index) in $t('listPropertiesAran')" :key="index">
									<span>
										<img src="/static/images/icons/check-mark.svg">
										<span>
											{{aran.name}}
											<span class="bold-description">{{aran.bold}}</span>
										</span>
									</span>
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp" v-for="(aranDis, index) in $t('listDisp')" :key="index">
									<v-layout column align-center>
										<v-flex>
											<img :src="aranDis.icon" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{aranDis.name}}</span>	
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
					</v-flex>
					<v-flex class="relative">
						<button class="btn-temporate width-arandanos bottom-aran">{{$t('titleTemporate')}} <br> {{$t('rangeTemporateArandanos')}}</button>
						<img src="/static/images/section/arandanos-mobile.png" alt="imagen-esparrago" class="br-desktop image-arandanos-mobile">
						<img src="/static/images/section/img-arandanos.png" class="w-100 br-mobile" alt="imagen-arandanos">
					</v-flex>
				</v-layout>
			</div>
			<div v-if="btnSelected === 6">
				<div class="content-title">
					<v-flex xs2>
						<span class="title-product">MANGO</span>
						<span class="title-product-green">KENT</span>
					</v-flex>
					<div>
						<p class="title-list">{{$t('titlePres')}}</p>
						<ul class="list-dispo">
							<li>
								<v-layout column align-center>
									<v-flex>
										<img src="/static/images/icons/icon-present-three-es.svg" alt="" class="icono-three">
									</v-flex>
									<v-flex class="title-preset">
										{{$t('titlePrivate')}}
									</v-flex>
								</v-layout>
							</li>
						</ul>
					</div>
				</div>
				<v-layout row mt-2 class="column-reverse-mobile">
					<v-flex>
						<div>
							<ul class="list-none pd-mango mt-mobile">
								<p class="title-list br-desktop">{{$t('titleProperties')}}</p>
								<li class="mb-product" v-for="(man, index) in $t('listPropertiesMang')" :key="index">
									<span>
										<img src="/static/images/icons/check-mark.svg">
										<span>
											{{man.name}}
											<span class="bold-description">{{man.bold}}</span>
										</span>
									</span>
									<!-- <v-layout row>
										<v-flex xs1>
											<img src="/static/images/icons/check-mark.svg">
										</v-flex>
										<v-flex class="item-description ml-2">
											{{man.name}}
											<span class="bold-description">{{man.bold}}</span>
										</v-flex>
									</v-layout> -->
								</li>
							</ul>
						</div>
						<div>
							<p class="title-list mt-disp italic">{{$t('titleDis')}}</p>
							<ul class="list-dispo">
								<li class="content-disp" v-for="(man, index) in $t('avaibleMango')" :key="index">
									<v-layout column align-center>
										<v-flex>
											<img :src="man.icon" class="icon-dispo">
										</v-flex>
										<v-flex>
											<span class="text-dispo">{{man.name}}</span>	
										</v-flex>
									</v-layout>
								</li>
							</ul>
						</div>
					</v-flex>
					<v-flex class="relative" sm10 md8 lg8>
						<button class="btn-temporate">{{$t('titleTemporate')}} <br> {{$t('rangeMango')}}</button>
						<img src="/static/images/section/mango-mobile.png" alt="imagen-esparrago" class="br-desktop image-mango">
						<img src="/static/images/section/img-mango-kent.png" class="w-100 br-mobile" alt="imagen-esparrago">
					</v-flex>
				</v-layout>
			</div>
		</div>
	</div>
</template>

<script>
function selectProduct(id) {
	this.btnSelected = id;
}

function data() {
	return {
		btnSelected: 1,
		products: [
			{
				id: 1,
				titleBlack: 'ESPÁRRAGO',
				titleGreen: 'VERDE',
				imageMobile: '/static/images/section/esparrago-mobile.png',
				imageDesktop: '/static/images/section/image-product-one.png',
				listProperties: [
					{
						id: 1,
						name: 'Tiene una gran cantidad de vitaminas:',
						bold: 'A, B1, B2, B6, C Y E.',
					},
					{
						id: 2,
						name: 'Tiene minerales como:',
						bold: 'magnesio, fósforo, calcio y potasio.',
					},
					{
						id: 3,
						name: 'Alta cantidad de',
						bold: 'antioxidantes.',
					},
				],
			},
			{
				id: 2,
				titleBlack: 'ESPÁRRAGO',
				titleGreen: 'BLANCO',
				listProperties: [
					{
						id: 1,
						name: 'Tiene una gran cantidad de vitaminas:',
						bold: 'A, B1, B2, B6, C Y E.',
					},
					{
						id: 2,
						name: 'Tiene minerales como:',
						bold: 'magnesio, fósforo, calcio y potasio.',
					},
					{
						id: 3,
						name: 'Alta cantidad de',
						bold: ' antioxidantes.',
					},
				],
			},
			{
				id: 3,
				titleBlack: 'PIMIENTO',
				titleGreen: 'MORRÓN',
				listProperties: [
					{
						id: 1,
						name: 'Por su alto contenido de potasio, el morrón en un',
						bold: 'excelente diurético',
					},
					{
						id: 2,
						name: 'Ayuda a',
						bold: 'bajar de peso',
					},
					{
						id: 3,
						name: 'Tiene un bajo aporte de calorías:',
						bold: 'sólo 20 calorías cada 100 gramos',
					},
				],
			},
			{
				id: 4,
				titleGreen: 'MARACUYÁ',
				listProperties: [
					{
						id: 1,
						name: 'Ayuda a',
						bold: 'reducir la presión arterial.',
					},
					{
						id: 2,
						bold: 'Rica en vitaminas A y C antioxidantes,',
						name: 'alto contenido de hierro y flavonoides.',
					},
					{
						id: 3,
						name: 'Estimulante natural y suplemento dietético práctico,',
						bold: 'aumenta el metabolismo.',
					},
				],
			},
			{
				id: 5,
				titleGreen: 'ARÁNDANOS',
				listProperties: [
					{
						id: 1,
						name: 'Favorece a la',
						bold: 'familia de los berries.',
					},
					{
						id: 2,
						name: 'Muy bajo en calorías, gran contenido de fibra,',
						bold: 'vitamina C y K.',
					},
					{
						id: 3,
						name: 'Tienen la capacidad antioxidante, con los flavonoides como principales antioxidantes presentes',
					},
				],
			},
			{
				id: 6,
				titleBlack: 'MANGO',
				titleGreen: 'KENT',
				listPropertiesMang: [
					{
						id: 1,
						name: 'Fruta rica en vitamina',
						bold: 'A, C Y E',
					},
					{
						id: 2,
						name: 'Aporta',
						bold: 'magnesio y potasio',
					},
					{
						id: 3,
						name: 'Favorece la asimilación de nutrientes, con los flavonoides como principales antioxidantes presentes',
					},
				],
			},
		],
	};
}

export default {
	name: 'section-products',
	data,
	methods: {
		selectProduct,
	},
};
</script>

<style lang="scss" scoped>
.section-products {
	padding: 40px 0;
}

.title-section-products {
	color: #878787;
	font-size: 25px;
	margin-bottom: 41px;

	@media (min-width: 936px) {
		font-size: 33px;
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
	margin-left: 21px;

	&.active {
		background-color: #66cc33;
		color: white;
		font-weight: bold;
	}

	&:first-child {
		margin-left: 0;
	}

	@media (min-width: 936px) {
		margin-left: 20px;
	}
}

.content-buttons {
	background-color: #fafafa;
	border-radius: 31.5px;
	padding: 9px 0 9px 11px;
	overflow: auto;
	overflow-y: hidden;
	margin: 0 auto;
	white-space: nowrap;

	@media (min-width: 936px) {
		background-color: transparent;
		display: flex;
		margin: 40px 0 70px 0;
		padding: 0 8%;
		justify-content: center;
	}
}

.title-product {
	color: #000000;
	line-height: 27px;
	font-size: 25px;
	font-style: italic;

	@media (min-width: 936px) {
		font-size: 47px;
		line-height: 42px;
	}
}

.title-product-green {
	color: #41aa36;
	font-size: 25px;
	font-weight: 600;
	font-style: italic;

	@media (min-width: 936px) {
		font-size: 47px;
		line-height: 42px;
	}
}

.item-description {
	color: #000000;
	line-height: 17px;
	max-width: 235px;

	@media (min-width: 936px) {
		max-width: 236px;
	}
}

.bold-description {
	font-weight: bold;
}

.title-list {
	color: #000000;
	font-size: 14px;
	font-weight: bold;
	line-height: 27px;
	margin-bottom: 5px;
	
	@media (min-width: 936px) {
		font-size: 16px;
		margin-top: 12px;
	}
}

.text-dispo {
	color: #000000;
	font-size: 10px;
	line-height: 27px;
	font-stretch: normal;
	font-style: italic;
	font-weight: 600;

	@media (min-width: 936px) {
		font-size: 11px;
	}
}

.icon-dispo {
	height: 31px;

	@media (min-width: 936px) {
		height: 42px;
	}
}

.list-dispo {
	display: flex;
	list-style: none;
}

.title-preset {
	color: #000000;
	font-size: 9px;
	font-weight: 600;
	line-height: 11px;
	text-align: center;
}

.content-product {
	margin-top: 40px;
	padding: 0 30px;

	@media (min-width: 936px) {
		margin: 70px auto 0 auto;
		max-width: 1100px;
		padding: 0;
	}
}

.content-title {
	display: flex;
	flex-direction: column;

	@media (min-width: 936px) {
		align-items: flex-end;
		flex-direction: row;
		justify-content: space-between;
	}
}

.icon-one {
	height: 28px;

	@media (min-width: 936px) {
		height: 38px;
	}
}

.content-present {
	@media (min-width: 936px) {
		margin-right: 24px;
	}
}

.mb-product {
	margin-bottom: 16px;

	&.mb-two {
		@media (min-width: 936px) {
			margin-bottom: 44px;
		}
	}

	@media (min-width: 936px) {
		margin-bottom: 50px;
	}
}

.mt-disp {
	margin-top: 35px;

	@media (min-width: 936px) {
		margin-top: 38px;
	}
}

.content-disp {
	margin-left: 16px;

	@media (min-width: 936px) {
		margin-left: 34px;	
	}

	&:first-child {
		margin-left: 0;
	}
	
}

.column-reverse-mobile {
	@media (max-width: 936px) {
		flex-direction: column-reverse;
	}
}

.icono-three {
	@media (max-width: 936px) {
		height: 33px;
	}
}

.cont-title-desktop {
	@media (min-width: 936px) {
		padding-top: 50px;
	}
}

.btn-temporate {
	background-color: #000000;
	border-radius: 26px;
	bottom: 0;
	color: white;
	font-size: 12px;
	font-weight: 600;
	height: 42px;
	line-height: 13px;
	position: absolute;
	right: 0px;
	text-align: center;
	width: 142px;

	@media (min-width: 936px) {
		bottom: 56px;
		font-size: 16px;
		height: 55px;
		line-height: 20px;
		padding: 0 20px;
		right: 0;
		width: auto;
	}
}

.width-arandanos {	
	@media (min-wdith: 936px) {
		width: 325px;
	}
}

.img-mobile-pim {
	@media (max-width: 936px) {
		bottom: 29px;
		left: 51px;
		position: relative;
		width: 80%;	
	}
}

.mobile-image-maracuya {
	@media (max-width: 936px) {
		bottom: 10px;
		left: 58px;
		position: relative;
		width: 90%;
	}
}

.pt-one {
	@media (min-width: 936px) {
		padding-top: 64px;
	}
}

.pt-two {
	@media (min-wdith: 936px) {
		padding-top: 23px;
	}
}

.pt-three {
	@media (min-width: 936px) {
		padding-top: 70px;
	}
}

.content-arandanos-desktop {
	@media (min-width: 936px) {
		margin-top: 90px;
	}
}

.pd-mango {
	@media (min-width: 936px) {
		padding-top: 65px;
	}
}

.image-esparrago {
	@media (max-width: 936px) {
		bottom: 30px;
		position: relative;
	}
}

.btn-temporate-pim {
	@media (max-width: 936px) {
		bottom: -16px;
	}
}

.image-arandanos-mobile {
	@media (max-width: 936px) {
		left: 20%;
		position: relative;
	}
}

.mt-aran-mobile {
	@media (max-width: 936px) {
		margin-top: 45px;
	}
}

.bottom-aran {
	@media (max-width: 936px) {
		bottom: -45px;
	}
}

.image-mango {
	@media (max-width: 936px) {
		bottom: 30px;
		position: relative;
	}
}

.max-width-desktop {
	@media (min-width: 936px) {
		max-width: 335px;	
	}
}

.btn-maracuya {
	@media (max-width: 936px) {
		bottom: -17px;
		right: -73px;
	}
}

.mt-mobile {
	@media (max-width: 936px) {
		margin-top: 30px;
	}
}
</style>