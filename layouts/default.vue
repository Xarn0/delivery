<template>
	<v-app-bar app elevation-0 flat>
		<div class="w-100">
			<v-container class="d-flex align-center">
				<v-toolbar-title>logo</v-toolbar-title>
				<v-list v-for="(link, key) in listItems">
					<v-list-item class="cursor-pointer" :key="key">{{
						link.title
					}}</v-list-item>
				</v-list>
				<!-- <v-spacer></v-spacer> -->
				<div>
					<v-btn>
						<userLogin class="pr-2"></userLogin>
						Вход
					</v-btn>
					<v-btn class="button-green rounded-xl text-white text-center">
						Связаться с нами
					</v-btn>
				</div>
			</v-container>
		</div>
	</v-app-bar>
	<v-main> <slot></slot> </v-main>
</template>
<script setup lang="ts">
import userLogin from "@/components/icons/userLogin";

let navigatorPanel: boolean = ref(false);
let listItems = reactive([
	{
		link: "",
		title: "Как покупать"
	},
	{
		link: "",
		title: "Распродажи"
	},
	{
		link: "",
		title: "Цены"
	},
	{
		link: "",
		title: "Помощь"
	},
	{
		link: "",
		title: "Бонусы"
	},
	{
		link: "",
		title: "Блог"
	},
	{
		link: "",
		title: "Магазины"
	}
]);
</script>
