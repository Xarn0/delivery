<script setup lang="ts">
import backgroundGradient from "@/components/backgrountGradeint.vue";
import selectMainProduct from "@/components/selectMainProduct.vue";
import firstBlockWithImg from "@/components/firstBlockWithImg.vue";
import templatBlock from "@/components/template/templatBlock.vue";
</script>

<template>
	<div>
		<backgroundGradient>
			<firstBlockWithImg></firstBlockWithImg>
		</backgroundGradient>
		<v-container class="custom-container">
			<templatBlock :title="'Насколько выгодно покупать?'">
				<selectMainProduct></selectMainProduct> </templatBlock
		></v-container>
		<offerComponent></offerComponent>
	</div>
</template>

<style>
.custom-container > div {
	padding: 8px;
}

@media (max-width: 600px) {
	.custom-container {
		padding: 0 !important;
		max-width: 100% !important;
	}
}
</style>
