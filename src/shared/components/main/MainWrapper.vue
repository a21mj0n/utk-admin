<script setup lang="ts"></script>

<template>
	<section class="wrapper">
		<slot />
	</section>
</template>

<style scoped lang="scss">
.wrapper {
	border-radius: 2rem;
	padding: 2rem;
	background: map-get($colors, "bg-primary");
}
</style>
