<template>
	<div class="layout-general">
		<div>
			<!-- <v-select
				solo
				:items="languages"
				item-value="id"
				item-text="name"
				return-object
			>
				<template slot="selection" 
					slot-scope="data">
						<flag :iso="data.item.icon"></flag>
						<span>{{ data.item.value }}</span>
					</template>
			</v-select> -->
		</div>
		<!-- <app-header /> -->
		<slot></slot>
		<app-footer />
	</div>
</template>

<script>
// import appHeader from '@/components/home/app-header';
import appFooter from '@/components/home/app-footer';

export default {
	name: 'layout-general',
	components: {
		// appHeader,
		appFooter,
	},
};
</script>

<style lang="scss" scoped>
.layout-general {
		min-height: 100vh;
		position: relative;
		width: 100vw;

		@media (min-width: 936px) {
			padding-top: 97px;
		}
}
</style>