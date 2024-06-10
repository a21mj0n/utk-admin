import { reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { type FormInst, type FormRules } from "naive-ui"
import { useAuthStore, useUserStore } from "@/app/stores"
import { messageSuccess } from "#shared/utils/functions/message-provider"
import { IAuthFormModel } from "../types"
import { CommonRoutesEnum } from "#routes/types"
import { AuthService } from "#services/auth"
import { useI18n } from "vue-i18n"
import { UserService } from "#services/user"

export default function () {
	const router = useRouter()
	const route = useRoute()
	const authStore = useAuthStore()
	const userStore = useUserStore()
	const { t } = useI18n()

	const authForm = ref<FormInst | null>(null)
	const formModel = reactive<IAuthFormModel>({
		login: "",
		password: ""
	})
	const isLoading = ref<boolean>(false)

	const onLogin = async () => {
		try {
			isLoading.value = true

			await authForm.value?.validate()
			const response = await AuthService.login(formModel)

			if (!response?.token) {
				return
			}

			authStore.login(response.token)

			await getMe()

			messageSuccess(t("auth.login.successText"))

			await router.push((route.query.redirectTo as string) || { name: CommonRoutesEnum.home })
		} finally {
			isLoading.value = false
		}
	}

	const getMe = async () => {
		const result = await UserService.fetchMe()

		if (!result) {
			return
		}

		userStore.state.me = result
	}

	// validators
	const formRules: FormRules = {
		login: {
			required: true,
			trigger: ["input", "blur"]
		},
		password: {
			required: true,
			min: 4,
			trigger: ["input", "blur"]
		}
	}

	return {
		authForm,
		formModel,
		formRules,
		isLoading,
		onLogin
	}
}
