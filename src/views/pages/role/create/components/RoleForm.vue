<script lang="ts" setup>
import { FormRules, NCheckbox, NCheckboxGroup, NForm, NFormItemGi, NGi, NGrid, NInput } from "naive-ui"
import { validatorMessages } from "#shared/utils/validators"
import { noFrontSpace } from "#shared/utils/functions"
import { IDepartment } from "#services/department"
import { IPermission } from "#services/permission"
import { IRoleCreateDto } from "#services/role"

defineProps<{
	isLoading: {
		permissionList: boolean
		departmentList: boolean
	}
	departmentList: IDepartment[]
	permissionList: IPermission[]
}>()

const formModel = defineModel<IRoleCreateDto>("model")
const formRef = defineModel<any>("formRef")

const formRules: FormRules = {
	name: {
		ru: {
			required: true,
			trigger: ["blur", "input"]
		},
		uz: {
			required: true,
			trigger: ["blur", "input"]
		}
	},
	description: {
		ru: {
			required: true,
			trigger: ["blur", "input"]
		},
		uz: {
			required: true,
			trigger: ["blur", "input"]
		}
	},
	permissions: {
		type: "array",
		required: true,
		trigger: "change"
	},
	departments: {
		type: "array",
		required: true,
		trigger: "change"
	}
}

const listLabelCss = { fontSize: "24px", lineHeight: "28px", fontWeight: 700, marginBottom: "2rem" }
</script>

<template>
	<NForm :ref="ref => (formRef = ref)" :model="formModel" :rules="formRules" :validate-messages="validatorMessages">
		<NGrid cols="1 s:2 m:4 l:4" responsive="screen" x-gap="20" y-gap="20">
			<NFormItemGi :label="`${$t('common.title')} RU`" path="name.ru">
				<NInput v-model:value="formModel!.name.ru" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="`${$t('common.title')} UZ`" path="name.uz">
				<NInput v-model:value="formModel!.name.uz" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="`${$t('common.description')} RU`" path="name.ru">
				<NInput v-model:value="formModel!.description.ru" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="`${$t('common.description')} UZ`" path="name.uz">
				<NInput v-model:value="formModel!.description.uz" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('permission.list')" :label-style="listLabelCss" path="permissions" span="4">
				<NCheckboxGroup v-model:value="formModel!.permissions">
					<NGrid cols="1 s:2 m:4 l:4" responsive="screen" x-gap="20" y-gap="8">
						<NGi v-for="permission in permissionList" :key="permission.id">
							<NCheckbox :label="permission.display_name[$i18n.locale]" :value="permission.id" />
						</NGi>
					</NGrid>
				</NCheckboxGroup>
			</NFormItemGi>

			<NFormItemGi :label="$t('department.list')" :label-style="listLabelCss" path="permissions" span="4">
				<NCheckboxGroup v-model:value="formModel!.departments">
					<NGrid :cols="3" :y-gap="8">
						<NGi v-for="department in departmentList" :key="department.id">
							<NCheckbox :label="department.name" :value="department.id">
								{{ department.name }}
							</NCheckbox>
						</NGi>
					</NGrid>
				</NCheckboxGroup>
			</NFormItemGi>
		</NGrid>
	</NForm>
</template>

<style lang="scss" scoped></style>
