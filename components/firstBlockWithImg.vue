<script setup lang="ts">
import airplane from "@/components/icons/airplane.vue";
import headHuman from "@/components/icons/headHuman.vue";
import planet from "@/components/icons/planet.vue";
import bodyHuman from "@/components/icons/bodyHuman.vue";
</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="12" lg="6" class="d-flex flex-column ga-10">
				<h2
					class="text-white text-center text-h4 text-lg-left text-md-h2 title-main"
				>
					Доставка товаров из Великобритании в Россию
				</h2>

				<p class="text-white text-h6 text-lg-body-1" style="line-height: 40px">
					Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы
					покупать со скидками в UK одежду, обувь, гаджеты известных брендов и
					безопасно отправлять вещи в Россию.
				</p>

				<v-dialog max-width="500">
					<template v-slot:activator="{ props: activatorProps }">
						<v-btn
							v-bind="activatorProps"
							class="button-green d-flex align-self-center align-self-lg-start text-h6 text-sm-h5 text-lg-body-1 pa-6 pa-lg-2"
							flat
							>Получить адрес в UK</v-btn
						>
					</template>

					<template v-slot:default="{ isActive }">
						<v-card title="Фома получение">
							<v-card-text> Получить адрес в UK? </v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>

								<v-btn
									text="Получить"
									@click="isActive.value = false"
									class="bg-green-accent-3"
									color="white"
								></v-btn>
							</v-card-actions>
						</v-card>
					</template>
				</v-dialog>
			</v-col>
			<v-col
				cols="12"
				lg="6"
				class="palnet-position d-none d-sm-flex justify-center d-lg-block"
			>
				<planet></planet><airplane class="airplane" />

				<div class="human">
					<headHuman class="headHuman" /> <bodyHuman class="bodyHuman" />
				</div>
			</v-col> </v-row
	></v-container>
</template>
<style scoped>
.palnet-position {
	position: relative;
}
.headHuman {
	bottom: 0;
	transform: translateY(30%);
	left: center;
}
.bodyHuman {
	top: 0;
}
.human {
	position: absolute;
	width: 500px;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	bottom: 0;
}
.airplane {
	position: absolute;
	top: 15%;
	right: 20%;
	transform: rotate(0deg) translateX(0px);
	/* animation: identifier 5s infinite ease-in alternate; */
}
.title-main {
	line-height: 40px;
	font-family: "Gilroy";
}
@media (min-width: 600px) {
	.title-main {
		line-height: 70px;
	}
}
</style>
