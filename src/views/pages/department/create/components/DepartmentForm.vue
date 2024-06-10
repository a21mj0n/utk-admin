<script lang="ts" setup>
import { FormInst, FormRules, NForm, NFormItemGi, NGrid, NInput, NSelect, NSwitch, SelectOption } from "naive-ui"
import { validatorMessages } from "#shared/utils/validators"
import { noFrontSpace } from "#shared/utils/functions"
import { IDepartmentCreateDto, IDepartmentUpdateDto } from "#services/department"

defineProps<{
	loading: boolean
	isLoadingCenterList: boolean
	logisticCenterList: SelectOption[]
}>()

const formModel = defineModel<IDepartmentUpdateDto | IDepartmentCreateDto>("formModel")
const formRef = defineModel<FormInst | null>("formRef")

const formRules: FormRules = {
	name: {
		required: true,
		trigger: ["blur", "input"]
	},
	center_id: {
		required: true,
		trigger: ["blur", "input"]
	}
}
</script>

<template>
	<NForm
		:ref="ref => (formRef = ref)"
		:disabled="loading"
		:model="formModel"
		:rules="formRules"
		:validate-messages="validatorMessages"
	>
		<NGrid cols="1 s:3 m:3 l:3 xl:3 2xl:3" responsive="screen" x-gap="20">
			<NFormItemGi :label="$t('common.title')" path="name">
				<NInput v-model:value="formModel!.name" :allow-input="value => noFrontSpace(value)" clearable name="name" />
			</NFormItemGi>

			<NFormItemGi :label="$t('center.title')" path="center_id">
				<NSelect v-model:value="formModel!.center_id" :loading="isLoadingCenterList" :options="logisticCenterList" />
			</NFormItemGi>

			<NFormItemGi :label="$t('department.is_office')" path="is_office">
				<NSwitch v-model:value="formModel!.is_office"></NSwitch>
			</NFormItemGi>
		</NGrid>
	</NForm>
</template>

<style lang="scss" scoped></style>
