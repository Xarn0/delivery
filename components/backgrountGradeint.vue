<template>
	<v-main>
		<div class="mainGradient">
			<v-container>
				<slot></slot>
			</v-container></div
	></v-main>
</template>

<style>
.mainGradient {
	background: linear-gradient(79.63deg, #5b52a3 1.08%, #40b8ea 100%);
	border-radius: 36px;
	margin: 0 60px;
	margin-top: 30px;
}
</style>
