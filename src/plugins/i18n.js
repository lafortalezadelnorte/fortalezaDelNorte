
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: 'es',
	fallbackLocale: 'en',
	messages: {
		es: {
			headerInit: 'INICIO',
			links: [
				{
					id: 1,
					name: 'INICIO',
					link: '#banner-home',
				},
				{
					id: 2,
					name: 'NOSOTROS',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'CALIDAD',
					link: '#quality',
				},
				{
					id: 4,
					name: 'PRODUCTOS',
					link: '#products',
				},
				{
					id: 5,
					name: 'MERCADOS',
					link: '#markets',
				},
				{
					id: 6,
					name: 'CONTACTO',
					link: '#contact',
				},
			],
			banners: [
				{
					id: 1,
					url: '/static/images/banners/banner-principal-min.png',
					urlMobile: '/static/images/banners/banner-principal-mobile-min.png',
					textBold: 'GARANTIA DE',
					text: 'AGRONEGOCIOS SOSTENIBLE',
				},
				{
					id: 2,
					url: '/static/images/banners/image-banner-one.jpg',
					urlMobile: '/static/images/banners/banner-mobile-one.jpg',
					textBold: 'DEL CAMPO',
					text: 'A TU MESA',
				},
				{
					id: 3,
					url: '/static/images/banners/image-banner-two.jpg',
					urlMobile: '/static/images/banners/banner-mobile-two.jpg',
					textBold: 'COMERCIALIZAMOS',
					text: 'LAS MEJORES FRUTAS',
				},
				{
					id: 4,
					textBold: 'COMERCIALIZAMOS',
					text: 'LOS MEJORES ESPÁRRAGOS',
					url: '/static/images/banners/image-banner-three.jpg',
					urlMobile: '/static/images/banners/banner-mobile-three.jpg',
				},
			],
			titleContactUs: 'NOSOTROS',
			titleAboutUs: 'QUIENES SOMOS',
			descriptionAboutUs: 'Somos una Compañía Agroindustrial Peruana Sostenible, dedicada al cultivo, procesamiento y exportación de productos de alta calidad, dirigidos hacia los mercados y consumidores más exigentes del mundo.',
			arrayVision: [
				{
					id: 1,
					title: 'MISIÓN',
					description: 'Proveer alimentos nutritivos y naturales bajo los más altos estándares de calidad y sostenibilidad a nuestros clientes y marcas de todo el mundo a través de un servicio eficiente.',
				},
				{
					id: 2,
					title: 'VISIÓN',
					description: 'Ser una de las empresas peruanas líder en la producción de alimentos de calidad premium y la preferida para marcas reconocidas a nivel mundial.',
				},
			],
			titleValue: 'VALORES',
			values: [
				{
					id: 1,
					name: 'Ética',
				},
				{
					id: 2,
					name: 'Integridad',
				},
				{
					id: 3,
					name: 'Creatividad',
				},
				{
					id: 4,
					name: 'Flexibilidad',
				},
				{
					id: 5,
					name: 'Responsabilidad',
				},
			],
			titleCamp: 'CAMPO',
			descriptionCamp: 'Contamos con campos propios de Espárragos para así asegurar el abastecimiento de nuestros clientes. Así mismo, nuestros campos de espárrago (Huaral) son certificados con GLOBAL GAP, siendo uno de los estándares más estrictos de BPA, asegurando productos de calidad.',
			titleProcess: 'PROCESOS',
			descriptionProcess: 'Contamos con una planta de producción en Lima, que cumple con los más altos estándares de calidad y actualmente cuenta con certificaciones vigentes.',
			btnUs: [
				{
					id: 1,
					name: 'NOSOTROS',
				},
				{
					id: 2,
					name: 'MISIÓN Y VISIÓN',
				},
				{
					id: 3,
					name: 'VALORES',
				},
				{
					id: 4,
					name: 'CAMPO',
				},
				{
					id: 5,
					name: 'PLANTA',
				},
			],
			btnQuantity: [
				{
					id: 1,
					name: 'SISTEMA INTEGRADO DE GESTIÓN',
					width: 278,
				},
				{
					id: 2,
					name: 'SEGURIDAD ALIMENTARIA',
					width: 205,
				},
				{
					id: 3,
					name: 'TRAZABILIDAD',
					width: 166,
				},
				{
					id: 4,
					name: 'CERTIFICACIONES',
					width: 166,
				},
			],
			titleQuality: 'CALIDAD',
			descriptionQuality: 'Estamos comprometidos a cultivar, procesar y exportar productos de calidad, bajo estándares internacionales certificados que garanticen a nuestros clientes la satisfacción del consumidor final.',
			titleLineProducts: 'LÍNEA DE PRODUCTOS',
			lineProducts: [
				{
					id: 1,
					icon: '/static/images/icons/icon-product-one.png',
					urlImage: '/static/images/section/product-1.png',
					title: 'Conservas',
					description: 'Elaboramos nuestros productos cumpliendo con las regulaciones y estándares vigentes de calidad e inocuidad aplicados en nuestra organización.',
					listProd: [
						{
							id: 1,
							name: '– Espárragos Verdes',
						},
						{
							id: 2,
							name: '– Espárragos Blancos',
						},
						{
							id: 3,
							name: '– Pimiento Morrón',
						},
						{
							id: 4,
							name: '– Arándano',
						},
						{
							id: 5,
							name: '– Maracuyá',
						},
					],
				},
				{
					id: 2,
					title: 'Frescos',
					description: 'Elaboramos nuestros productos cumpliendo con las regulaciones y estándares vigentes de calidad e inocuidad aplicados en nuestra organización.',
					icon: '/static/images/icons/icon-product-two.png',
					urlImage: '/static/images/section/product-2.png',
					listProd: [
						{
							id: 1,
							name: '– Espárrago verde',
						},
						{
							id: 2,
							name: '– Maracuyá',
						},
						{
							id: 3,
							name: '– Arándano',
						},
						{
							id: 4,
							name: '– Mango: Kent',
						},
						{
							id: 5,
							name: '– Palta: Hass y fuerte',
						},
					],
				},
				{
					id: 3,
					title: 'Congelados',
					description: 'Elaboramos nuestros productos cumpliendo con las regulaciones y estándares vigentes de calidad e inocuidad aplicados en nuestra organización.',
					urlImage: '/static/images/section/product-3.png',
					icon: '/static/images/icons/icon-product-three.png',
					listProd: [
						{
							id: 1,
							name: '– Espárrago verde',
						},
						{
							id: 2,
							name: '– Maracuyá',
						},
						{
							id: 3,
							name: '– Arándano',
						},
						{
							id: 4,
							name: '– Mango: Kent',
						},
						{
							id: 5,
							name: '– Palta: Hass y fuerte',
						},
					],
				},
			],
			titleProduts: 'PRODUCTOS',
			titleProperties: 'Propiedades',
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
			listPropertiesRed: [
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
			listPropertiesFruit: [
				{
					id: 1,
					name: 'Ayuda a',
					bold: 'reducir la presión arterial.',
				},
				{
					id: 2,
					name: 'Rica en vitaminas A y C antioxidantes,',
					bold: 'alto contenido de hierro y flavonoides.',
				},
				{
					id: 3,
					name: 'Estimulante natural y suplemento dietético práctico,',
					bold: 'aumenta el metabolismo.',
				},
			],
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
					name: 'Favorece a la',
					bold: 'asimilación de nutrientes',
				},
			],
			avaibleMango: [
				{
					id: 1,
					icon: '/static/images/icons/icon-product-one.svg',
					name: 'Fresco',
				},
				{
					id: 2,
					icon: '/static/images/icons/icon-product-two-es.svg',
					name: 'Congelados',
				},
			],
			titlePrivate: 'Marca Privada',
			titleEs: 'ESPÁRRAGO',
			titleEsGreen: 'VERDE',
			titleEsWhite: 'BLANCO',
			titlePres: 'Presentación:',
			titleBlackBell: 'PIMIENTO',
			titleGreenBell: 'MORRON',
			titleGreenFruit: 'MARACUYÁ',
			titleGreenAran: 'ARÁNDANOS',
			listPropertiesAran: [
				{
					id: 1,
					name: 'Pertenece a la',
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
			titleConserve: 'Conservas',
			listPresents: [
				{
					id: 1,
					name: 'Vidrio',
					icon: '/static/images/icons/icon-present-one-es.svg',
				},
				{
					id: 2,
					name: 'Lata',
					icon: '/static/images/icons/icon-present-two-es.svg',
				},
				{
					id: 3,
					name: 'Marca Privada',
					icon: '/static/images/icons/icon-present-three-es.svg',
				},
			],
			listDisp: [
				{
					id: 1,
					name: 'Fresco',
					icon: '/static/images/icons/icon-product-one.svg',
				},
				{
					id: 2,
					name: 'Congelados',
					icon: '/static/images/icons/icon-product-two-es.svg',
				},
				{
					id: 3,
					name: 'Conservas',
					icon: '/static/images/icons/icon-three-es.svg',
				},
			],
			titleDis: 'Disponible',
			btnsProducts: [
				{
					id: 1,
					name: 'ESPÁRRAGOS VERDES',
					width: '221px',
				},
				{
					id: 2,
					name: 'ESPÁRRAGOS BLANCOS',
					width: '195px',
				},
				{
					id: 3,
					name: 'PIMIENTOS MORRONES',
					width: '195px',
				},
				{
					id: 4,
					name: 'MARACUYÁ',
					width: '146px',
				},
				{
					id: 5,
					name: 'ARÁNDANOS',
					width: '146px',
				},
				{
					id: 6,
					name: 'MANGO',
					width: '146px',
				},
			],
			titleMarket: 'MERCADOS',
			imageDesktopMarket: '/static/images/banners/mapa-market.png',
			descriptionMarket: 'Somos socios estratégicos de las marcas de alimentos y supermercados más exigentes del mundo. Hemos estado cultivando relaciones comerciales a largo plazo basadas en la competitividad de nuestro equipo de trabajo, nuestro producto de calidad y la sostenibilidad de nuestro negocio.',
			titleContact: 'CONTÁCTANOS',
			placeholderName: 'Nombre *',
			placeholderEmail: 'Correo *',
			placeholderPhone: 'Teléfono *',
			placeholderMessage: 'Escribe aquí',
			btnTitleContact: 'Enviar',
			titleFind: 'Encuéntranos',
			titleInformation: 'Información',
			imageMobileMarket: '/static/images/banners/section-market-mobile-min (1).png',
			titleTemporate: 'Temporada',
			rangeTemporate: 'Ene/mar-jul/set-dic',
			rangeTemporateRed: 'Enero - Agosto',
			rangeTemporateMar: 'Noviembre - Abril',
			rangeTemporateArandanos: 'Ene-May/Jul-Dic',
			rangeMango: 'Noviembre - Abril',
			titleOffice: 'Oficina',
			linksFooter: [
				{
					id: 1,
					name: 'Inicio',
					link: '#banner-home',
				},
				{
					id: 2,
					name: 'Nosotros',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'Calidad',
					link: '#quality',
				},
				{
					id: 4,
					name: 'Productos',
					link: '#products',
				},
				{
					id: 5,
					name: 'Mercados',
					link: '#markets',
				},
				{
					id: 6,
					name: 'Contacto',
					link: '#contact',
				},
			],
			titleContactFooter: 'Contáctanos',
			titleSystem: 'SISTEMA INTEGRADO DE GESTIÓN (SIG)',
			descriptionSystem: 'Basado en el compromiso de nuestra alta dirección, nuestros certificados reconocidos a nivel mundial, nuestro cuidado y control de todos los aspectos relacionados con la calidad y nuestra constante capacitación y la motivación de nuestro capital humano.',
			titleSegurity: 'SEGURIDAD ALIMENTARIA',
			descriptionSegurity: 'La calidad y seguridad de los alimentos que llevamos de nuestro campo a la mesa del consumidor final, es nuestra responsabilidad.',
			titleTraceability: 'TRAZABILIDAD',
			descriptionTracebilty: 'Conocemos la historia de cada conserva de esparrago que producimos, pues controlamos minuciosamente todo el proceso de trazabilidad desde que es cultivado en el campo hasta que es servido en la mesa del consumidor final. Nuestros principales puntos de control de calidad son:',
			titleCertifications: 'CERTIFICACIONES',
			descriptionCertifications: 'La calidad y seguridad de los alimentos que llevamos de nuestros campos a la mesa del consumidor final, es nuestra responsabilidad.',
			listTraceability: [
				{
					id: 1,
					name: 'Materias Primas',
				},
				{
					id: 2,
					name: 'Insumos',
				},
				{
					id: 3,
					name: 'Entorno y Proceso de Producción',
				},
				{
					id: 4,
					name: 'Producto Final',
				},
			],
			listCertifications: [
				{
					id: 1,
					bold: 'BRC:',
					text: 'Es la aplicación certificada de un sistema de seguridad alimentaria, que garantiza la calidad, inocuidad, legalidad y autenticidad de nuestros productos.',
				},
				{
					id: 2,
					bold: 'Global GAP:',
					text: 'Es un conjunto de normas internacionalmente reconocidas sobre las buenas prácticas agrícolas (Good Agricultural Practices). ',
				},
				{
					id: 3,
					bold: 'HACCP:',
					text: 'Es un sistema de base científica que identifica peligros específicos y medidas para su control, con el fin de garantizar la inocuidad alimentaria.',
				},
			],
		},
		en: {
			headerInit: 'HOME',
			links: [
				{
					id: 1,
					name: 'HOME',
					link: '#banner-home',
				},
				{
					id: 2,
					name: 'ABOUT US',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'QUALITY',
					link: '#quality',
				},
				{
					id: 4,
					name: 'PRODUCTS',
					link: '#products',
				},
				{
					id: 5,
					name: 'MARKETS',
					link: '#markets',
				},
				{
					id: 6,
					name: 'CONTACT US',
					link: '#contact',
				},
			],
			banners: [
				{
					id: 1,
					url: 'static/images/banners/banner-principal-min.png',
					urlMobile: '/static/images/banners/banner-principal-mobile-min.png',
					textBold: 'GUARANTEE OF',
					text: 'A SUSTAINABLE AGRIBUSINESS',
				},
				{
					id: 1,
					url: '/static/images/banners/image-banner-one.png',
					urlMobile: '/static/images/banners/banner-mobile-one.jpg',
					textBold: 'FROM FIELD',
					text: 'TO YOUR TABLE',
				},
				{
					id: 2,
					url: '/static/images/banners/image-banner-two.jpg',
					urlMobile: '/static/images/banners/banner-mobile-two.jpg',
					textBold: 'WE SELL',
					text: 'THE PREMIUM FRUITS',
				},
				{
					id: 3,
					textBold: 'WE SELL',
					text: 'THE BEST ASPARAGUS',
					url: '/static/images/banners/image-banner-three.jpg',
					urlMobile: '/static/images/banners/banner-mobile-three.jpg',
				},
			],
			titleContactUs: 'WHO WE ARE',
			titleAboutUs: 'ABOUT US',
			descriptionAboutUs: 'We are a Sustainable Peruvian Agroindustrial Company, dedicated to the cultivation, processing and export of high quality products, aimed at the most demanding markets and consumers in the world.',
			titleValue: 'VALUES',
			values: [
				{
					id: 1,
					name: 'Ethics',
				},
				{
					id: 2,
					name: 'Integrity',
				},
				{
					id: 3,
					name: 'Creativity',
				},
				{
					id: 4,
					name: 'Flexibility',
				},
				{
					id: 5,
					name: 'Responsibility',
				},
			],
			arrayVision: [
				{
					id: 1,
					title: 'MISSION',
					description: 'Provide nutritious and natural foods with high quality and sustainability standards to more demanding customers and brands in the world through efficient service and personalized solutions.',
				},
				{
					id: 2,
					title: 'VISION',
					description: 'Is to establish ourselves as a leading Peruvian company in the production of premium quality food, widely committed to sustainability and preferred by world-renowned brands.',
				},
			],
			titleCamp: 'ABOUT FARMING',
			descriptionCamp: 'We have our own fields of Asparagus to ensure the supply of our customers. Likewise, our asparagus fields (Huaral) are certified with GLOBAL GAP, being one of the strictest GAP standards, ensuring quality products.',
			titleProcess: 'PROCESSES',
			descriptionProcess: 'We have a production facility in Lima, which meets the highest quality standards and currently has current certifications.',
			btnUs: [
				{
					id: 1,
					name: 'ABOUT',
				},
				{
					id: 2,
					name: 'MISSION AND VISION',
				},
				{
					id: 3,
					name: 'VALUES',
				},
				{
					id: 4,
					name: 'FIELD',
				},
				{
					id: 5,
					name: 'FACILITY',
				},
			],
			btnQuantity: [
				{
					id: 1,
					name: 'INTEGRATED MANAGEMENT SYSTEM',
					width: 290,
				},
				{
					id: 2,
					name: 'FOOD SAFETY',
					width: 205,
				},
				{
					id: 3,
					name: 'TRACEABILITY',
					width: 166,
				},
				{
					id: 4,
					name: 'CERTIFICATION',
					width: 166,
				},
			],
			titleQuality: 'QUALITY',
			descriptionQuality: 'We are committed to cultivate, process and export quality products, certified under international standards that guarantee our customers the satisfaction of the final consumer.',
			titleLineProducts: 'OUR PRODUCTS LINE',
			lineProducts: [
				{
					id: 1,
					icon: '/static/images/icons/icon-product-one.png',
					urlImage: '/static/images/section/product-1.png',
					title: 'Canned',
					description: 'We make our products complying with current regulations and standards of quality and safety applied in our organization.',
					listProd: [
						{
							id: 1,
							name: '– Green asparagus',
						},
						{
							id: 2,
							name: '– White Asparagus',
						},
						{
							id: 3,
							name: '– Bell pepper',
						},
						{
							id: 4,
							name: '– Blueberry',
						},
						{
							id: 4,
							name: '- Passion Fruit',
						},
					],
				},
				{
					id: 2,
					title: 'Fresh',
					description: 'We make our products complying with current regulations and standards of quality and safety applied in our organization.',
					icon: '/static/images/icons/icon-product-two.png',
					urlImage: '/static/images/section/product-2.png',
					listProd: [
						{
							id: 1,
							name: '– Green asparagus',
						},
						{
							id: 2,
							name: '– Passion frui',
						},
						{
							id: 3,
							name: '– Blueberry',
						},
						{
							id: 4,
							name: '– Handle: Kent',
						},
						{
							id: 5,
							name: '– Avocado: Hass and strong',
						},
					],
				},
				{
					id: 3,
					title: 'Frozen',
					description: 'We make our products complying with current regulations and standards of quality and safety applied in our organization.',
					urlImage: '/static/images/section/product-3.png',
					icon: '/static/images/icons/icon-product-three.png',
					listProd: [
						{
							id: 1,
							name: '- Green asparagus',
						},
						{
							id: 2,
							name: '– Passion fruit',
						},
						{
							id: 3,
							name: '– Blueberry',
						},
						{
							id: 4,
							name: '– Handle: Kent',
						},
						{
							id: 5,
							name: '- Avocado: Hass and strong',
						},
					],
				},
			],
			titleProduts: 'PRODUCTS',
			titleProperties: 'Properties',
			listProperties: [
				{
					id: 1,
					name: 'Has a large amount of vitamins:',
					bold: 'A, B1, B2, B6, C and E.',
				},
				{
					id: 2,
					name: 'Has minerals such as',
					bold: 'magnesium, phosphorus, calcium, and potassium.',
				},
				{
					id: 3,
					name: 'High amount of',
					bold: 'antioxidants',
				},
			],
			listPropertiesRed: [
				{
					id: 1,
					name: 'Due to its high potassium content, it is an',
					bold: 'excellent diuretic',
				},
				{
					id: 2,
					name: 'It helps you',
					bold: 'lose weight',
				},
				{
					id: 3,
					name: 'They have a low caloric intake,',
					bold: 'only 20 calories per 100 grams.',
				},
			],
			listPropertiesFruit: [
				{
					id: 1,
					name: 'Helps',
					bold: 'reduce blood pressure.',
				},
				{
					id: 2,
					bold: 'Rich in vitamins A, C and antioxidants',
					name: 'High content of iron and flavonoids',
				},
				{
					id: 3,
					name: 'Natural stimulant and practical dietary supplement,',
					bold: 'increases metabolism.',
				},
			],
			listPropertiesMang: [
				{
					id: 1,
					name: 'Fruit rich in vitamin',
					bold: 'A, C and E',
				},
				{
					id: 2,
					name: 'Provides',
					bold: 'magnesium and potassium',
				},
				{
					id: 3,
					name: 'Supports the',
					bold: 'assimilation of nutrients',
				},
			],
			avaibleMango: [
				{
					id: 1,
					icon: '/static/images/icons/icon-product-one.svg',
					name: 'Fresh',
				},
				{
					id: 2,
					icon: '/static/images/icons/icon-product-two-es.svg',
					name: 'Frozen',
				},
			],
			titlePrivate: 'Private Label',
			titleEs: 'ASPARAGUS',
			titleEsWhite: 'WHITE',
			titleEsGreen: 'GREEN',
			titleBlackBell: 'RED BELL',
			titleGreenBell: 'PEPPER',
			titleGreenFruit: 'PASSION FRUIT',
			titleGreenAran: 'BLUEBERRY ',
			listPropertiesAran: [
				{
					id: 1,
					name: 'Belongs to the',
					bold: 'berries family',
				},
				{
					id: 2,
					name: 'Very low in calories,',
					bold: 'high in fiber, vitamin C and K',
				},
				{
					id: 3,
					name: 'They have antioxidant capacity, with flavonoids as the main antioxidants present.',
				},
			],
			titleConserve: 'Canned',
			titlePres: 'Presentation:',
			listPresents: [
				{
					id: 1,
					name: 'Glass',
					icon: '/static/images/icons/icon-present-one-es.svg',
				},
				{
					id: 2,
					name: 'Can',
					icon: '/static/images/icons/icon-present-two-es.svg',
				},
				{
					id: 3,
					name: 'Private Label',
					icon: '/static/images/icons/icon-present-three-es.svg',
				},
			],
			titleDis: 'Available',
			listDisp: [
				{
					id: 1,
					name: 'Fresh',
					icon: '/static/images/icons/icon-product-one.svg',
				},
				{
					id: 2,
					name: 'Frozen',
					icon: '/static/images/icons/icon-product-two-es.svg',
				},
				{
					id: 3,
					name: 'Canned',
					icon: '/static/images/icons/icon-three-es.svg',
				},
			],
			btnsProducts: [
				{
					id: 1,
					name: 'GREEN ASPARAGUS',
				},
				{
					id: 2,
					name: 'WHITE ASPARAGUS',
				},
				{
					id: 3,
					name: 'RED BELL PEPPERS',
				},
				{
					id: 4,
					name: 'PASSION FRUIT',
				},
				{
					id: 5,
					name: 'BLUEBERRY',
				},
				{
					id: 6,
					name: 'MANGO',
				},
			],
			titleMarket: 'MARKETS',
			imageDesktopMarket: '/static/images/banners/image-market-en-min.png',
			descriptionMarket: 'We are strategic partners of the most demanding food brands and supermarkets in the world. We have been cultivating long-term business relationships based on the competitiveness of our work team, our quality product and the sustainability of our business.',
			titleContact: 'CONTACT US',
			placeholderName: 'Name *',
			placeholderEmail: 'E-mail*',
			placeholderPhone: 'Phone*',
			placeholderMessage: 'Message',
			btnTitleContact: 'Send',
			titleFind: 'Find Us',
			titleInformation: 'Information',
			linksFooter: [
				{
					id: 1,
					name: 'Home',
					link: '#banner-home',
				},
				{
					id: 2,
					name: 'About Us',
					link: '#contact-us',
				},
				{
					id: 3,
					name: 'Quality',
					link: '#quality',
				},
				{
					id: 4,
					name: 'Products',
					link: '#products',
				},
				{
					id: 5,
					name: 'Markets',
					link: '#markets',
				},
				{
					id: 6,
					name: 'Contact Us',
					link: '#contact',
				},
			],
			titleContactFooter: 'Contac Us',
			imageMobileMarket: '/static/images/banners/section-market-mobile-en-min.png',
			titleTemporate: 'Season',
			rangeTemporate: 'Jan/Mar to July/ Sep to Dec',
			rangeTemporateRed: 'Junary to August',
			rangeTemporateMar: 'November to April',
			rangeTemporateArandanos: 'Jan to May/ July to Dec',
			rangeMango: 'November to April',
			titleOffice: 'Office',
			titleSystem: 'INTEGRATED MANAGEMENT SYSTEM (IMS)',
			descriptionSystem: 'Based in Our senior management commitment, Our certificates recognized a World level, Our care and control of all aspects related to quality and Our constant training and motivation of our human capital.',
			titleSegurity: 'FOOD SAFETY',
			descriptionSegurity: 'The quality and safety of food far in our field to table the final consumer, is our responsibility.',
			titleTraceability: 'TRACEABILITY',
			descriptionTracebilty: 'We know the history of each product we produce, because we carefully control the entire process of tracking since it is cultivated in the field until it is served at the table of the final consumer. Our main quality control points are:',
			titleCertifications: 'CERTIFICATION',
			descriptionCertifications: 'The quality and safety of the food that we bring from our fields to the final consumers table is our responsibility.',
			listTraceability: [
				{
					id: 1,
					name: 'Raw Material',
				},
				{
					id: 2,
					name: 'Supplies',
				},
				{
					id: 3,
					name: 'Environment and Production Process',
				},
				{
					id: 4,
					name: 'Final Product',
				},
			],
			listCertifications: [
				{
					id: 1,
					bold: 'BRC:',
					text: 'Certification is the application of a certified food safety system developed by the British Retail Distribution, which guarantees the quality, safety, legality and authenticity of our products.',
				},
				{
					id: 2,
					bold: 'Global GAP:',
					text: 'It is a set of internationally recognized standards on good agricultural practices.',
				},
				{
					id: 3,
					bold: 'HACCP:',
					text: 'It is a scientifically based system that identifies specific hazards and measures to control them, in order to guarantee food safety.',
				},
			],
		},
	},
});

export { i18n as default };
