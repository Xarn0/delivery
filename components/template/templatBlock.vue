<template>
	<v-container class="mt-15">
		<div class="main__title">{{ data.title }}</div>
		<div class="main__content">
			<slot></slot>
		</div>
	</v-container>
</template>

<script setup lang="ts">
let data = defineProps<{ title: string }>();
</script>
