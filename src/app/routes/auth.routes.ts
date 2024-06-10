import type { RouteRecordRaw } from "vue-router"
import { AppLayoutsEnum } from "@/views/layouts/types"
import { AuthRoutesEnum } from "./types"

export const authRoutes: RouteRecordRaw[] = [
	{
		path: "/auth/login",
		name: AuthRoutesEnum.login,
		meta: {
			layout: AppLayoutsEnum.auth
		},
		component: () => import("#pages/auth/login/ui/AuthPage.vue")
	}
]
