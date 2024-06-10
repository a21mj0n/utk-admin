<script lang="ts" setup>
import { NButton, NPopconfirm } from "naive-ui"
import { renderIcon } from "#shared/utils/functions"
import { SaveIcon, TrashIcon, UndoIcon } from "lucide-vue-next"

defineProps<{
	isLoading?: {
		delete?: boolean
		save?: boolean
		edit?: boolean
		create?: boolean
	}
	hasDelete?: boolean
	backRouteName: string
	onSave: () => void
	onDelete?: () => void
}>()
</script>

<template>
	<div class="flex s:justify-end flex-col s:flex-row gap-8 mt-4">
		<NButton :render-icon="renderIcon(UndoIcon)" ghost @click="$router.push({ name: backRouteName })">
			{{ $t("toCancel") }}
		</NButton>

		<NPopconfirm
			v-if="hasDelete"
			:negative-text="$t('common.no')"
			:positive-text="$t('common.yes')"
			:show-icon="false"
			@positive-click="onDelete"
		>
			<template #trigger>
				<NButton :disabled="isLoading?.delete" :loading="isLoading?.delete" :render-icon="renderIcon(TrashIcon)" type="error">
					{{ $t("toDelete") }}
				</NButton>
			</template>
			{{ $t("common.sureDelete") }}
		</NPopconfirm>

		<NButton
			:disabled="isLoading?.edit || isLoading?.save || isLoading?.create"
			:loading="isLoading?.edit || isLoading?.save || isLoading?.create"
			:render-icon="renderIcon(SaveIcon)"
			type="primary"
			@click="onSave"
		>
			{{ $t("toSave") }}
		</NButton>
	</div>
</template>

<style lang="scss" scoped></style>
