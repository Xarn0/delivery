<template>
	<v-navigation-drawer
		v-model="navigationNav"
		location="right"
		:disable-resize-watcher="true"
	>
		<v-list-item class="text-uppercase text-center py-4">страницы</v-list-item>
		<v-divider></v-divider>
		<v-list class="" v-for="(link, key) in listItems">
			<v-list-item density="compact" class="cursor-pointer" :key="key">
				{{ link.title }}</v-list-item
			>
		</v-list>
	</v-navigation-drawer>
	<v-app-bar app elevation-0 flat>
		<div class="w-100">
			<v-container class="d-flex align-center">
				<v-toolbar-title color="primary">DeliveryHd</v-toolbar-title>
				<v-list class="d-none d-lg-block" v-for="(link, key) in listItems">
					<v-list-item class="cursor-pointer" :key="key">
						{{ link.title }}</v-list-item
					>
				</v-list>

				<!-- <v-spacer></v-spacer> -->
				<div class="d-flex align-center ga-2">
					<v-dialog max-width="500">
						<template v-slot:activator="{ props: activatorProps }">
							<v-btn v-bind="activatorProps">
								<userLogin class="pr-2"></userLogin>
								Вход
							</v-btn>
						</template>

						<template v-slot:default="{ isActive }">
							<v-card title="Вход">
								<v-container>
									<v-text-field
										label="ваше имя"
										placeholder="Андрей"
									></v-text-field>
									<v-text-field
										label="Почта"
										placeholder="johndoe@gmail.com"
									></v-text-field>
									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn
											class="bg-green-accent-3"
											text="Войти"
											color="white"
											@click="isActive.value = false"
										></v-btn>
									</v-card-actions>
								</v-container>
							</v-card>
						</template>
					</v-dialog>
					<v-dialog max-width="500">
						<template v-slot:activator="{ props: activatorProps }">
							<v-btn
								v-bind="activatorProps"
								class="button-green text-subtitle-1 rounded-xl text-white text-center"
							>
								Связаться с нами
							</v-btn>
						</template>

						<template v-slot:default="{ isActive }">
							<v-card title="Форма связи">
								<v-container>
									<v-text-field
										label="ваше имя"
										placeholder="Андрей"
									></v-text-field>
									<v-text-field
										label="Почта"
										placeholder="johndoe@gmail.com"
									></v-text-field>

									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn
											text="Закрыть"
											color="deep-orange-lighten-2"
											@click="isActive.value = false"
										></v-btn>
										<v-btn
											text="Отправить"
											class="bg-green-accent-3"
											color="white"
											@click="isActive.value = false"
										></v-btn> </v-card-actions
								></v-container>
							</v-card>
						</template>
					</v-dialog>

					<v-btn class="d-block d-lg-none" icon>
						<v-icon dark @click="navigationNav = !navigationNav">
							mdi:mdi-menu</v-icon
						></v-btn
					>
				</div>
			</v-container>
		</div>
	</v-app-bar>

	<v-main class="mt-5"> <slot></slot> </v-main>
</template>
<script setup lang="ts">
import userLogin from "~/components/icons/userLogin.vue";
let navigationNav: Ref<boolean> = ref(false);
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
