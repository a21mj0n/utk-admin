<script lang="ts" setup>
import { NPageHeader } from "naive-ui"

defineProps<{
	title?: string
}>()
</script>

<template>
	<NPageHeader class="u-page-header mb-6.4">
		<template #title>
			<span v-if="!('title' in $slots) && title">{{ $t(title) }}</span>
			<slot v-else name="title"></slot>
		</template>
		<template #extra>
			<slot name="extra">
				<div id="page-header-teleport-target"></div>
			</slot>
		</template>
	</NPageHeader>
</template>

<style lang="scss" scoped>
.u-page-header {
	:deep(.n-page-header__title) {
		@include font("h24");
	}

	:deep(.n-page-header-header) {
		margin-bottom: 0;
	}
}
</style>
