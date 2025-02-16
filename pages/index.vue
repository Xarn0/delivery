<script setup lang="ts">
import backgroundGradient from "@/components/backgrountGradeint.vue";
import selectMainProduct from "@/components/selectMainProduct.vue";
import firstBlockWithImg from "@/components/firstBlockWithImg.vue";
</script>

<template>
	<div>
		<backgroundGradient>
			<firstBlockWithImg></firstBlockWithImg>
		</backgroundGradient>
		<v-container>
			<templatBlock :title="'Насколько выгодно покупать?'">
				<selectMainProduct></selectMainProduct> </templatBlock
		></v-container>
		<offerComponent></offerComponent>
	</div>
</template>
