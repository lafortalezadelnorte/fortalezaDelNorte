<template>
	<div class="page-home">
		<app-header />
		<banner-home />
		<section-us />
		<section-quality />
		<section-line-products />
		<section-products />
		<section-market />
		<section-contact />
	</div>
</template>
<script>
import appHeader from '@/components/home/app-header';
import bannerHome from '@/components/home/banner-home';
import sectionUs from '@/components/home/section-us';
import sectionQuality from '@/components/home/section-quality';
import sectionLineProducts from '@/components/home/section-line-products';
import sectionProducts from '@/components/home/section-products';
import sectionMarket from '@/components/home/section-market';
import sectionContact from '@/components/home/section-contact';

export default {
	name: 'page-home',
	components: {
		appHeader,
		bannerHome,
		sectionQuality,
		sectionUs,
		sectionLineProducts,
		sectionProducts,
		sectionMarket,
		sectionContact,
	},
};
</script>

<style lang="scss" scoped>
.page-home {
	position: relative;
}
</style>