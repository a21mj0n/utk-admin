<script setup>
import { NModal, NSpace, NButton, NGrid, NGridItem, NEllipsis } from "naive-ui"
import { XIcon } from "#shared/components/icons/svg"
const props = defineProps({
	modelValue: Boolean,
	title: {
		type: String,
		default: "Подтвердить удаление"
	},
	subtitle: {
		type: String,
		default: "Вы действительно хотите удалить? Удаление нельзя отменить."
	}
})
defineEmits(["update:modelValue", "confirmDeletion"])
</script>

<template>
	<n-modal
		:show="modelValue"
		@update:show="value => $emit('update:modelValue', value)"
		preset="dialog"
		close-on-esc
		:show-icon="false"
		class="delete-confirm-dialog"
		:closable="false"
	>
		<template #header>
			<div class="dialog-header">
				<span>{{ props.title }}</span>
				<XIcon class="dialog-close-btn" @click="$emit('update:modelValue', false)" />
			</div>
		</template>
		<div class="dialog-content">{{ subtitle }}</div>
		<template #action>
			<slot name="action">
				<n-grid class="actions" cols="2" x-gap="16">
					<n-grid-item>
						<n-button block text-color="var(--brand-primary-500)" @click="$emit('update:modelValue', false)"> Отменить </n-button>
					</n-grid-item>
					<n-grid-item>
						<n-button
							block
							type="primary"
							:bordered="false"
							style="background-color: var(--danger-500)"
							@click="
								() => {
									$emit('confirmDeletion')
									$emit('update:modelValue', false)
								}
							"
						>
							Удалить
						</n-button>
					</n-grid-item>
				</n-grid>
			</slot>
		</template>
	</n-modal>
</template>

<style scoped lang="scss">
:global(.delete-confirm-dialog) {
	padding: 38px 24px 34px !important;
	width: 413px !important;
	text-align: center;
}
.dialog-header {
	@include font("h24");
	width: 100%;
	padding-bottom: 12px;
	position: relative;
	.dialog-close-btn {
		position: absolute;
		bottom: 100%;
		right: 0;
		cursor: pointer;
	}
}
.actions {
	width: 70% !important;
	@include useMediaQuery($grid-breakpoints, md) {
		width: 90% !important;
	}
	margin: 0 auto;
}
.dialog-content {
	@include font("t16");
	padding-bottom: 16px;
}
</style>
