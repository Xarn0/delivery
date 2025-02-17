<template>
	<div class="mainGradient pa-5">
		<slot></slot>
	</div>
</template>

<style>
.mainGradient {
	background: linear-gradient(79.63deg, #5b52a3 1.08%, #40b8ea 100%);

	margin-top: 0px;
}
@media (min-width: 1024px) {
	.mainGradient {
		margin: 0 60px;
		border-radius: 36px;
	}
}
</style>
