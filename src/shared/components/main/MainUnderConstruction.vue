<script setup lang="ts">
import { UNDER_CONSTRUCTION } from "@/shared/assets/images"

withDefaults(defineProps<{ title?: string }>(), {
	title: "Страница находиться в процессе разработки..."
})
</script>

<template>
	<div class="construction">
		<div class="construction__image">
			<img :src="UNDER_CONSTRUCTION" alt="image" />
		</div>
		<h2 class="construction__title">{{ title }}</h2>
	</div>
</template>

<style scoped lang="scss">
.construction {
	display: grid;
	place-items: center;

	&__image {
		width: 10rem;
		img {
			width: 100%;
		}
	}

	&__title {
		font-family: monospace;
		font-weight: 500;
	}
}
</style>
