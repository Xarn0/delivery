<script setup lang="ts">
const props = defineProps<{ title: string; price: number; linkImg: string }>();

// Данные слайдов (можно передавать динамически)
const slides = reactive([
	{
		title: "Columbia Barlow Pass 550 Turbodown Jacket",
		priceRu: "7891,46₽",
		priceUk: "£80.62",
		imgRu: "russian.png",
		imgUk: "/assets/img/uk.png",
		img: "/1.png"
	},
	{
		title: "Columbia Barlow Pass 580 Turbodown Jacket",
		priceRu: "7891,46₽",
		priceUk: "£80.62",
		imgRu: "russian.png",
		imgUk: "/assets/img/uk.png",
		img: "/2.png"
	},
	{
		title: "Columbia Barlow Pass 580 Turbodown Jacket",
		priceRu: "7891,46₽",
		priceUk: "£80.62",
		imgRu: "russian.png",
		imgUk: "/assets/img/uk.png",
		img: "/3.png"
	}
]);
// const getImg = (value: string) => {
// 	return new URL(`../../assets/img/${value}`, import.meta.url).href;
// };

// Индекс текущего слайда (начинаем с 0)
const currentSlide = ref(1);

// Динамический расчёт количества слайдов
const totalSlides = computed(() => slides.length);

// Функции переключения слайдов
const prevSlide = () => {
	currentSlide.value =
		currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
};

const nextSlide = () => {
	currentSlide.value =
		currentSlide.value === totalSlides.value - 1 ? 0 : currentSlide.value + 1;
};
</script>

<template>
	<v-carousel
		class="mt-8"
		v-model="currentSlide"
		:show-arrows="false"
		hide-delimiters
	>
		<v-carousel-item v-for="(slide, index) in slides" :key="index">
			<keep-alive>
				<v-row>
					<v-col cols="12">
						<v-row class="d-flex justify-space-between align-center">
							<v-col
								md="3"
								class="d-flex flex-column justify-center align-center templateCard__left"
							>
								<h5 class="templateCard__left-title">
									Заказывай в Великобритании, пользуйся в России
								</h5>
								<div
									class="bg-blue-grey-lighten-4 rounded-lg d-flex justify-center pa-6 pt-2 pb-2 ga-4 align-center"
								>
									<img
										class="templateCard__left-img"
										src="@/assets/img/russian.png"
										alt="flag"
									/>
									<div class="">
										<span class="templateCard__left-priceTitle"
											>Цена в России</span
										>
										<p class="templateCard__left-price">
											{{ (Math.random() * 10000).toFixed(2) }}₽
										</p>
									</div>
								</div>
							</v-col>
							<v-col md="5">
								<div class="d-flex bg-blue-grey-lighten-4 templateCard__center">
									<v-img :src="`/img/${linkImg}${slide.img}`" />
								</div>
							</v-col>
							<v-col md="3" class="templateCard__right"
								><h5 class="templateCard__right-title">
									Доставка {{ props.title }} из Великобритании от
									<span class="templateCard__right-price"
										>£{{ props.price }}</span
									>
								</h5>
								<div
									class="bg-blue-grey-lighten-4 rounded-lg d-flex w-100 pa-6 pt-2 pb-2 ga-4 align-center align-self-start"
								>
									<img
										class="templateCard__right-img"
										src="@/assets/img/uk.png"
										alt="flag"
									/>
									<div class="">
										<span class="templateCard__right-priceTitle"
											>Цена в UK</span
										>
										<p class="templateCard__right-price">£80.62</p>
									</div>
								</div></v-col
							>
						</v-row>
					</v-col>
				</v-row></keep-alive
			>
		</v-carousel-item>
	</v-carousel>
	<div class="controls d-flex justify-space-between">
		<div
			class="controls__container d-flex ga-4 align-center"
			v-if="currentSlide > 0"
			@click="prevSlide"
		>
			<div class="controls__img cursor-pointer">
				<img :src="`/img/${linkImg}${slides[currentSlide - 1].img}`" />
			</div>
			<v-btn flat
				><v-icon size="30"
					><svg
						width="36"
						height="16"
						viewBox="0 0 36 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM36 9H1V7H36V9Z"
							fill="#01CD7D"
						/>
					</svg> </v-icon
			></v-btn>
		</div>
		<div class="controls__text">
			<p>Срок доставки примерно 10 дней</p>
			<h4>
				Вы экономите до <span class="templateCard__right-price">$119.56</span>
			</h4>
		</div>
		<v-spacer></v-spacer>
		<div
			class="controls__container d-flex ga-4 align-center"
			@click="nextSlide"
			v-if="currentSlide < totalSlides - 1"
		>
			<v-btn flat
				><v-icon size="30"
					><svg
						width="36"
						height="16"
						viewBox="0 0 36 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
							fill="#01CD7D"
						/>
					</svg> </v-icon
			></v-btn>
			<div class="controls__img cursor-pointer">
				<img :src="`/img/${linkImg}${slides[currentSlide + 1].img}`" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.templateCard {
	&__left {
		gap: 30px;
		&-img {
			width: 74px;
			height: 54px;
		}
		&-title {
			font-size: 19px;
			width: 304px;
			line-height: 40px;
			align-self: flex-start;
		}
		&-priceTitle {
			font-size: 18px;
		}
		&-price {
			font-size: 26px;
			font-weight: 700;
		}
	}
	&__center {
		width: 446px;
		border-radius: 50%;
		height: 446px;
	}
	&__right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
		&-price {
			color: #01cd7d;
			font-size: 26px;
			font-weight: 700;
		}
		&-priceTitle {
			font-size: 18px;
		}
		&-title {
			font-size: 19px;
			width: 304px;
			align-self: flex-start;
		}
	}
}

.controls {
	&__container {
	}
	&__text {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		p {
			font-family: "Gilroy";
			font-size: 18px;
			text-align: center;
		}
		h4 {
			text-align: center;
			font-size: 26px;
			font-family: "Gilroy";
		}
	}
	&__img {
		max-width: 120px;
		padding: 6px;
		max-height: 120px;
		background-color: #f2f6fc;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			max-width: 100%;
			object-fit: contain;
		}
		border-radius: 50%;
	}
}
</style>
