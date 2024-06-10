<script lang="ts" setup>
import { NButton, NCard, NForm, NFormItem, NInput } from "naive-ui"
import { validatorMessages } from "#shared/utils/validators"
import usePage from "./usePage"
import { noSideSpace } from "#shared/utils/functions"

const { authForm, formModel, formRules, isLoading, onLogin } = usePage()
</script>

<template>
	<div class="auth-container">
		<NCard class="auth">
			<NForm
				ref="authForm"
				:disabled="isLoading"
				:model="formModel"
				:rules="formRules"
				:validate-messages="validatorMessages"
				@submit.prevent="onLogin"
			>
				<h1 class="h24 mb-4.8 text-center">{{ $t("auth.login.title") }}</h1>

				<NFormItem :label="$t('auth.login.login')" path="login">
					<NInput
						v-model:value="formModel.login"
						:allow-input="noSideSpace"
						:placeholder="$t('auth.login.enterLogin')"
						clearable
						name="login"
					/>
				</NFormItem>

				<NFormItem :label="$t('auth.login.password')" path="password">
					<NInput
						v-model:value="formModel.password"
						:allow-input="noSideSpace"
						:placeholder="$t('auth.login.enterPassword')"
						name="password"
						show-password-on="click"
						type="password"
					/>
				</NFormItem>

				<NButton :disabled="isLoading" :loading="isLoading" attr-type="submit" block class="auth__submit" type="primary">
					{{ $t("auth.login.title") }}
				</NButton>
			</NForm>
		</NCard>
	</div>
</template>

<style lang="scss" scoped>
.auth {
	width: 400px;
	padding: 2rem;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;

	&__submit {
		margin-top: 0.8rem;
		width: 100%;
	}
}

.auth-container {
	@include flex(0, row, center, center);
	height: 100%;
	width: 100%;
}
</style>
