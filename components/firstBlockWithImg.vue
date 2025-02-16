<script setup lang="ts">
import airplane from "@/components/icons/airplane.vue";
import headHuman from "@/components/icons/headHuman.vue";
import planet from "@/components/icons/planet.vue";
import bodyHuman from "@/components/icons/bodyHuman.vue";
import templatBlock from "@/components/template/templatBlock.vue";
</script>

<template>
	<v-row>
		<v-col cols="6" class="d-flex flex-column ga-10">
			<h2
				class="text-white"
				style="font-size: 62px; line-height: 70px; font-family: 'Gilroy'"
			>
				Доставка товаров из Великобритании в Россию
			</h2>

			<p class="text-white" style="line-height: 40px">
				Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы
				покупать со скидками в UK одежду, обувь, гаджеты известных брендов и
				безопасно отправлять вещи в Россию.
			</p>
			<v-btn class="button-green align-self-start" flat
				>Получить адрес в UK</v-btn
			>
		</v-col>
		<v-col cols="6" class="palnet-position">
			<planet></planet><airplane class="airplane" />

			<div class="human">
				<headHuman class="headHuman" /> <bodyHuman class="bodyHuman" />
			</div>
		</v-col>
	</v-row>
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
</style>
