<script setup lang="ts">
import savingsIcon from "@/components/icons/offer/savingsIcon.vue";
import genuineProductsIcon from "@/components/icons/offer/genuineProductsIcon.vue";
import operationalDeliveryIcon from "@/components/icons/offer/operationalDeliveryIcon.vue";
import selectionOfGoodIcon from "@/components/icons/offer/selectionOfGoodIcon.vue";

interface ArrayType {
	header: string;
	components: any;
	width: number;
	divider: boolean;
}

let array: ArrayType[] = reactive([
	{
		header: "Экономия до 70%",
		components: markRaw(savingsIcon),
		width: 88,
		divider: true
	},
	{
		header: "Только подлинная продукция",
		components: markRaw(genuineProductsIcon),
		width: 150,
		divider: true
	},
	{
		header: "Оперативная доставка",
		components: markRaw(operationalDeliveryIcon),
		width: 120,
		divider: true
	},
	{
		header: "Огромный выбор товаров",
		components: markRaw(selectionOfGoodIcon),
		width: 120,
		divider: false
	}
]);
</script>

<template>
	<v-container>
		<v-card flat>
			<v-list class="d-flex justify-space-between flex-wrap ga-4">
				<v-list-item
					v-for="(item, index) in array"
					:key="index"
					class="listOffers"
				>
					<v-card class="d-flex align-center ga-4">
						<component :is="item.components"></component>
						<p :style="`width:${item.width}px`">{{ item.header }}</p>
					</v-card>
				</v-list-item>
			</v-list>
		</v-card></v-container
	>
</template>

<style scoped lang="scss">
.listOffers {
	@media (min-width: 1280px) {
		border-right: 2px solid $grey;
	}
}
.listOffers:last-child {
	border-right: none;
}
</style>
