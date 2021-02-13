<template>
  <div class="section-line-products">
		<v-flex class="title-line-products bold" text-xs-center>{{$t('titleLineProducts')}}</v-flex>
		<div class="content-image-products">
			<div class="content-image-one center"
			v-for="(item , index) in $t('lineProducts')"
			:key="index"
			:style="`background-image: url(${item.urlImage})`">
				<div class="opacity-image"></div>
				<div class="row-hover">
					<div>
						<img :src="item.icon" alt="icono-primer-producto" class="icon-line-products">
					</div>
					<div>
						<p class="title-section-image bold">{{item.title}}</p>
					</div>
				</div>
				<div class="text-hover">
					<p class="description-hover">
						{{item.description}}
					</p>
					<ul class="list-none mt-4">
						<li v-for="i in item.listProd" :key="i.id">{{i.name}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>  
</template>

<script>
export default {
	name: 'section-line-products',
};
</script>

<style lang="scss" scoped>
.section-line-products {
	background-color: white;
	padding: 71px 10px 20px 10px;

	@media (min-width: 936px) {
		padding: 101px 0 0 0;
	}
}

.title-line-products {
	color: #878787;
	font-size: 25px;

	@media (min-width: 936px) {
		font-size: 33px;
	}
}

.content-image-products {
	display: flex;
	flex-direction: column;
	margin-top: 38px;

	@media (min-width: 936px) {
		flex-direction: row;
		margin-top: 65px;
	}
}

.center {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.content-image-one {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 12px;
	height: 265px;
	margin-bottom: 12px;
	position: relative;

	&:hover {
		color: white !important;
		background-color: transparent;
		padding: 17px 29px;

		.text-hover {
			display: block;
			margin-top: 10px;
			z-index: 2;
		}

		.description-hover {
			max-width: 310px;
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 2;
		}

		.title-section-image {
			margin: 0 0 0 11px;
		}

		.opacity-image {
			display: block;
		}

		.icon-line-products {
			height: 36px; 
		}
	}

	@media (min-width: 936px) {
		border-radius: 0;
		height: 428px;
		width: 33.3%;
		z-index: 2;
	}
}

.content-image-two {
	background-image: url('/static/images/section/product-2.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 12px;
	height: 265px;
	margin-bottom: 12px;
	position: relative;

	&:hover {
		color: white !important;
		padding: 17px 29px;

		.text-hover {
			display: block;
			margin-top: 10px;
			z-index: 2;
		}

		.icon-line-products {
			height: 36px; 
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 2;
		}

		.title-section-image {
			margin: 0 0 0 11px;
		}

		.opacity-image {
			display: block;
		}
	}

	@media (min-width: 936px) {
		border-radius: 0;
		height: 428px;
		width: 33.3%;	
	}
}

.content-image-three {
	background-image: url('/static/images/section/product-3.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 12px;
	height: 265px;
	position: relative;

	&:hover {
		color: white !important;
		background-color: transparent;
		padding: 17px 29px;

		.text-hover {
			display: block;
			margin-top: 10px;
			z-index: 2;
		}

		.icon-line-products {
			height: 36px; 
		}

		.row-hover {
			align-items: center;
			display: flex;
			z-index: 2;
		}

		.title-section-image {
			margin: 0 0 0 11px;
		}

		.opacity-image {
			display: block;
		}
	}

	@media (min-width: 936px) {
		border-radius: 0;
		height: 428px;
		width: 33.3%;	
	}
}

.title-section-image {
	color: white;
	font-size: 20px;

	@media (min-width: 936px) {
		font-size: 30px;	
	}
}

.text-hover {
	display: none;
	font-size: 12px;
	line-height: 18px;
	text-align: center;

	@media (min-width: 936px) {
		font-size: 15px;
	}
}

.opacity-image {
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>