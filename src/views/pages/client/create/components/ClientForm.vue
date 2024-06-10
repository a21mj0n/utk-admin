<script lang="ts" setup>
import { FormInst, FormRules, NForm, NFormItemGi, NGrid, NInput } from "naive-ui"
import { IClientCreateDto } from "#services/client"
import { noFrontSpace, onlyAllowNumber } from "#shared/utils/functions"
import { numberValidator, validateEmail, validateMinLength, validatorMessages } from "#shared/utils/validators"

const formRef = defineModel<FormInst>("formRef")
const formModel = defineModel<IClientCreateDto>("model")

const rules: FormRules = {
	name: {
		required: true,
		trigger: ["blur", "input"]
	},
	address: {
		required: true,
		trigger: ["blur", "input"]
	},
	email: {
		required: true,
		validator: validateEmail,
		trigger: ["blur", "input"]
	},
	phone: {
		required: true,
		trigger: ["blur", "input"]
	},
	registration_number: {
		required: true,
		validator: numberValidator,
		trigger: ["blur", "input"]
	},
	tax_id: {
		required: true,
		validator: validateMinLength,
		min: 9,
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

			<NFormItemGi :label="$t('common.address')" path="address">
				<NInput v-model:value="formModel!.address" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.email')" path="email">
				<NInput v-model:value="formModel!.email" :allow-input="value => noFrontSpace(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.phone')" path="phone">
				<NInput v-model:value="formModel!.phone" v-phone-mask clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('client.registrationNumber')" path="registration_number">
				<NInput v-model:value="formModel!.registration_number" :allow-input="value => onlyAllowNumber(value)" clearable />
			</NFormItemGi>

			<NFormItemGi :label="$t('common.inn')" path="tax_id">
				<NInput v-inn-mask v-model:value="formModel!.tax_id" clearable />
			</NFormItemGi>
		</NGrid>
	</NForm>
</template>

<style lang="scss" scoped></style>
