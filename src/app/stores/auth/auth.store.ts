import { computed, reactive } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"
import type { IAuthStoreState } from "./auth-store.types"
import { AuthRoutesEnum } from "#routes/types"

export const useAuthStore = defineStore(
	"auth",
	() => {
		const router = useRouter()

		const authState = reactive<IAuthStoreState>({
			access_token: ""
		})

		const isAuthorized = computed(() => authState.access_token !== "")

		// eslint-disable-next-line func-style
		function login(token: string) {
			authState.access_token = token
		}

		// eslint-disable-next-line func-style
		function logout() {
			authState.access_token = ""

			router.push({
				name: AuthRoutesEnum.login,
				query: {
					redirectTo: router.currentRoute.value.fullPath
				}
			})
		}

		return {
			authState,
			isAuthorized,
			login,
			logout
		}
	},
	{
		persist: {
			storage: window.localStorage
		}
	}
)
