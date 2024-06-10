<script lang="ts" setup>
import { NButton, NIcon, NResult } from "naive-ui"
import { XIcon } from "lucide-vue-next"
</script>

<template>
	<div class="custom-result">
		<NResult
			description="Что-то пошло не так! Страница, которую вы запрашиваете, не существует."
			status="404"
			title="404. Страница не найдена"
		>
			<template #icon>
				<div class="result-icon">
					<n-icon size="63">
						<XIcon />
					</n-icon>
				</div>
			</template>
			<template #footer>
				<NButton type="primary" @click="$router.back()">Вернуться назад</NButton>
			</template>
		</NResult>
	</div>
</template>

<style lang="scss" scoped>
.custom-result {
	height: calc(100svh - 30rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.result-icon {
		@include flex(0, row, center, center);

		color: var(--text-white);
		width: 11.2rem;
		height: 11.2rem;
		border-radius: 50%;
		background-color: var(--danger-500);
	}

	:deep(.n-result .n-result-header .n-result-header__title) {
		@include font("h20");
		margin-top: 2.4rem;
	}

	:deep(.n-result .n-result-header .n-result-header__description) {
		@include font("t14");
		margin-top: 0.8rem;
	}
}
</style>
