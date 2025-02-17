<script setup lang="ts">
import ClothesIcon from "@/components/icons/clothesIcon.vue";
import ElectronicsIcon from "@/components/icons/electronicsIcon.vue";
import AccessoriesIcon from "~/components/icons/accessoriesIcon.vue";
import KidsIcon from "@/components/icons/kidsIcon.vue";
import SportsIcon from "@/components/icons/sportsIcon.vue";
import CosmeticsIcon from "@/components/icons/cosmeticsIcon.vue";

import templateCard from "@/components/template/templateCard.vue";

interface ListTabsObj {
	type: string;
	icon: any;
	subtitle: string;
	id: number;
	linkImg: string;
}
let listTabs: ListTabsObj[] = [
	{
		type: "Одежда",
		subtitle: "Одежды",
		icon: markRaw(ClothesIcon),
		id: 1,
		linkImg: "ClothesImg"
	},
	{
		type: "Электроника",
		icon: markRaw(ElectronicsIcon),
		id: 2,
		subtitle: "Электроники",
		linkImg: "ElectronicsImg"
	},
	{
		type: "Аксессуары",
		icon: markRaw(AccessoriesIcon),
		id: 3,
		subtitle: "Аксессуаров",
		linkImg: "AccessoriesImg"
	},
	{
		type: "Для детей",
		icon: markRaw(KidsIcon),
		id: 4,
		subtitle: "Для детей",
		linkImg: "KidsImg"
	},
	{
		type: "для спорта",
		icon: markRaw(SportsIcon),
		id: 5,
		subtitle: "Для спорта",
		linkImg: "SportsImg"
	},

	{
		type: "Косметика",
		icon: markRaw(CosmeticsIcon),
		id: 6,
		subtitle: "Косметики",
		linkImg: "CosmeticsImg"
	}
];
let tab = ref(null);
</script>

<template>
	<ClientOnly>
		<v-card flat>
			<v-tabs
				prev-icon="mdi:mdi-ray-end-arrow"
				next-icon="mdi:mdi-ray-start-arrow"
				class="h-100"
				v-model="tab"
				style="height: 200px"
			>
				<v-tab
					v-for="(item, index) in listTabs"
					:key="index"
					:text="`${item.type}`"
					:active-color="'#1F2428'"
					class="rounded-xl ml-2"
					style="height: 80px"
					selected-class=""
					:value="index"
				>
					<component :is="item.icon" class="mr-10 tab-icon"></component>
					{{ item.type }}
				</v-tab>
			</v-tabs>

			<v-card-text>
				<v-tabs-window v-model="tab">
					<v-tabs-window-item
						v-for="(item, index) in listTabs"
						:key="index"
						:value="index"
					>
						<templateCard
							:link-img="item.linkImg"
							:title="item.subtitle"
							:price="8.62"
						></templateCard>
					</v-tabs-window-item> </v-tabs-window
			></v-card-text> </v-card
	></ClientOnly>
</template>
