<script lang="ts" setup>
import { FormInst, FormRules, NForm, NFormItemGi, NGrid, NInput, NSelect, SelectOption } from "naive-ui"
import { IUserCreateDto } from "#services/user"
import { validateEmail, validatorMessages } from "#shared/utils/validators"
import { noFrontSpace } from "#shared/utils/functions"

defineProps<{
	roleList: SelectOption[]
	departmentList: SelectOption[]
}>()

const formRef = defineModel<FormInst>("formRef")
const formModel = defineModel<IUserCreateDto>("model")

const rules: FormRules = {
	name: {
		required: true,
		trigger: ["blur", "input"]
	},
	surname: {
		required: true,
		trigger: ["blur", "input"]
	},
	patronymic: {
		required: true,
		trigger: ["blur", "input"]
	},
	phone: {
		required: true,
		trigger: ["blur", "input"]
	},
	email: {
		required: true,
		validator: validateEmail,
		trigger: ["blur", "input"]
	},
	login: {
		required: true,
		trigger: ["blur", "input"]
	},
	password: {
		required: true,
		min: 4,
		trigger: ["blur", "input"]
	},
	role_id: {
		required: true,
		trigger: ["blur", "input"]
	},
	department_id: {
		required: true,
		trigger: ["blur", "input"]
	}
}
</script>

<template>
	<NForm :ref="ref => (formRef = ref)" :model="formModel" :rules="rules" :validate-messages="validatorMessages">
		<NGrid cols="1 s:2 m:3 l:3 xl:4" responsive="screen" x-gap="20">
			<NFormItemGi :label="$t('common.name')" path="name">
				<NInput v-model:value="formModel!.name" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.surname')" path="surname">
				<NInput v-model:value="formModel!.surname" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.patronymic')" path="patronymic">
				<NInput v-model:value="formModel!.patronymic" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.phone')" path="phone">
				<NInput v-model:value="formModel!.phone" v-phone-mask clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.email')" path="email">
				<NInput v-model:value="formModel!.email" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('auth.login.login')" path="login">
				<NInput v-model:value="formModel!.login" :allow-input="value => noFrontSpace(value)" />
			</NFormItemGi>

			<NFormItemGi :label="$t('auth.login.password')" path="password">
				<NInput
					v-model:value="formModel!.password"
					:allow-input="value => noFrontSpace(value)"
					show-password-on="click"
					type="password"
				/>
			</NFormItemGi>

			<NFormItemGi :label="$t('role.title')" path="role_id">
				<NSelect v-model:value="formModel!.role_id" :options="roleList" />
			</NFormItemGi>

			<NFormItemGi :label="$t('department.departments')" path="department_id">
				<NSelect v-model:value="formModel!.department_id" :options="departmentList" />
			</NFormItemGi>
		</NGrid>
	</NForm>
</template>

<style lang="scss" scoped></style>
