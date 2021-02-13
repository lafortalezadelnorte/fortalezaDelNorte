<template>
	<div class="app-footer">
		<div class="content-btn-top">
			<a href="#banner-home">
				<button>
					<img src="/static/images/icons/btn-footer-top.svg" alt="">
				</button>
			</a>
		</div>
		<div class="content-footer">
			<div class="content-mobile">
				<v-flex class="wd-25">
					<img src="/static/images/icons/logo-footer.svg" alt="logo-compañia" class="logo-company">
				</v-flex>
				<v-flex class="wd-50">
					<p class="title-list-footer bold border-bottom">{{$t('titleInformation')}}</p>
						<v-flex v-for="(item, index) in $t('linksFooter')" :key="index">
							<a class="link-footer" :href="item.link">
								{{item.name}}
							</a>
						</v-flex>
				</v-flex>
			</div>
			<div class="wd-30">
				<p class="title-list-footer bold border-bottom">{{$t('titleContactFooter')}}</p>
				<div>
					<v-layout row>
						<v-flex xs1>
							<img src="/static/images/icons/icon-office.svg" alt="icono-direccion">
						</v-flex>
						<v-flex class="item-list ml-3">
							{{$t('titleOffice')}}: Mza. C Lote. 09 Int. 03 piso Dpto 03 urb Los Cedros de Santa Clara, Ate - Lima.
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs1>
							<img src="/static/images/icons/icon-office.svg" alt="icono-direccion">
						</v-flex>
						<v-flex class="item-list ml-3">
							Planta Cal. Las Mimosas Nro. 121 Urb. La Capitana (C.P.M. Santa María de Huachipa) - Lurigancho - Lima.
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs1>
							<img src="/static/images/icons/icon-phone.svg" alt="icono-telefono">
						</v-flex>
						<v-flex class="item-list ml-3">
							+51 923 368 751
						</v-flex>
					</v-layout>
					<v-layout row class="mt-2">
						<v-flex xs1>
							<img src="/static/images/icons/icon-message.svg" alt="icono-email">
						</v-flex>
						<v-flex class="item-list ml-3">
							info@lafortalezadelnorte.com.pe
						</v-flex>
					</v-layout>
				</div>
			</div>
			<div class="br-mobile wd-25">
				<p class="title-list-footer bold">{{$t('titleFind')}}</p>
				<div>
					<a href="https://www.facebook.com/FortalezadelNortePeru/" target="_blank">
						<img src="/static/images/icons/icon-fb.svg" alt="icono-facebook">
					</a>
					<a href="http://linkedin.com/company/la-fortaleza-del-norte-s-a-c" target="_blank" class="ml-2">
						<img src="/static/images/icons/icon-linkedin.svg" alt="icono-linkedin">
					</a>
				</div>
			</div>
		</div>
		<div class="credits">
			Made with ♥ by LSO Fuego | Fortaleza del norte ® 2020
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-footer',
};
</script>

<style lang="scss" scoped>
.app-footer {
	background-image: url('/static/images/banners/banner-footer-mobile.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 790px;
	width: 100%;

	@media (min-width: 936px) {
		background-image: url('/static/images/banners/banner-footer.jpg');
		height: 435px;
	}
}

.content-footer {
	padding: 40px 38px 98px 38px;

	@media (min-width: 936px) {
		display: flex;
		justify-content: space-between;
		padding: 47px 10% 35px 10%;
	}
}

.title-list-footer {
	color: white;
	font-size: 18px;
	padding-bottom: 16px;
}

.border-bottom {
	border-bottom: solid 2px rgba(255, 255, 255, 0.21);
}

.item-list {
	color: white;
	font-size: 14px;
	font-weight: 500;
	list-style: none;
	text-transform: unset;
	margin-bottom: 14px;
}

.credits {
	border-top: 1px solid white;
	color: white;
	font-size: 12px;
	font-weight: 500;
	padding-top: 37px;
	text-align: center;

	@media (min-width: 936px) {
		font-size: 14px;
		padding-top: 24px;
	}
}

.content-mobile {
	display: flex;
	width: 50%;
	
	@media (max-width: 936px) {
		justify-content: space-between;
		margin-bottom: 30px;
		width: 100%;	
	}
}

// .wd-25 {
// 	@media (min-width: 936px) {
// 		width: 25%;
// 	}
// }

.link-footer {
	color: white;
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 18px;
	text-decoration: none;

	@media (min-width: 936px) {
		margin-bottom: 10px;
	}
}

.logo-company {
	@media (min-width: 936px) {
		height: 128px;
	}
}

.wd-30 {
	@media (min-width: 936px) {
		width: 30%;
	}
}

.wd-50 {
	@media (min-width: 936px) {
		width: 45%;
	}
}

.content-btn-top {
	bottom: 100px;
	right: 12px;
	position: absolute;

	@media (min-width: 936px) {
		bottom: 42px;
		right: 49px;	
	}
}
</style>