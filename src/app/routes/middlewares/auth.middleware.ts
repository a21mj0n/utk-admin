import { useAuthStore } from "@/app/stores"
import { AuthRoutesEnum, CommonRoutesEnum } from "../types"

export const authMiddleware = (to, from, next) => {
	const authStore = useAuthStore()

	if (authStore.isAuthorized && to.name === AuthRoutesEnum.login) {
		return next({ name: CommonRoutesEnum.home })
	}

	if (!authStore.isAuthorized && to.name !== AuthRoutesEnum.login) {
		return next({ name: AuthRoutesEnum.login })
	}

	next()
}
